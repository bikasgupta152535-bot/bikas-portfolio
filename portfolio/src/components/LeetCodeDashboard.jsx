import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { LeetCodeIcon, LoaderIcon, AlertCircleIcon } from "./Icons.jsx";
import { leetcodeFallback } from "../data/leetcodeFallback.js";
import { socialLinks } from "../data/social.js";
import "./LeetCodeDashboard.css";

/**
 * HOW TO CONNECT A REAL LEETCODE API LATER:
 * 1. Pick a LeetCode stats API (several free community APIs exist, or your own backend proxy).
 * 2. Replace the body of `fetchLeetCodeStats` below with a real fetch call, e.g.:
 *
 *    const res = await fetch(`https://your-api.example.com/${username}`);
 *    if (!res.ok) throw new Error("Failed to load LeetCode stats");
 *    const data = await res.json();
 *    return {
 *      totalSolved: data.totalSolved,
 *      totalQuestions: data.totalQuestions,
 *      easySolved: data.easySolved,
 *      easyTotal: data.totalEasy,
 *      mediumSolved: data.mediumSolved,
 *      mediumTotal: data.totalMedium,
 *      hardSolved: data.hardSolved,
 *      hardTotal: data.totalHard,
 *      currentStreak: data.streak ?? 0,
 *      ranking: data.ranking ?? null,
 *    };
 *
 * 3. That's it — the component below already handles loading / error / success states.
 */
async function fetchLeetCodeStats() {
  // Simulated network delay so the loading state is visible; safe to remove once a real API is wired in.
  await new Promise((resolve) => setTimeout(resolve, 500));
  // No live API connected yet — using documented placeholder data (see src/data/leetcodeFallback.js).
  return leetcodeFallback;
}

function ProgressRing({ value, total, label, colorVar, delay = 0 }) {
  const [animatedPct, setAnimatedPct] = useState(0);
  const pct = total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPct(pct), 120 + delay);
    return () => clearTimeout(timer);
  }, [pct, delay]);

  const offset = circumference - (animatedPct / 100) * circumference;

  return (
    <div className="progress-ring">
      <svg viewBox="0 0 100 100" width="118" height="118">
        <circle cx="50" cy="50" r={radius} className="progress-ring__track" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="progress-ring__fill"
          style={{
            stroke: `var(${colorVar})`,
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
        <text x="50" y="47" textAnchor="middle" className="progress-ring__value">
          {value}
        </text>
        <text x="50" y="63" textAnchor="middle" className="progress-ring__total">
          / {total}
        </text>
      </svg>
      <p className="progress-ring__label" style={{ color: `var(${colorVar})` }}>
        {label}
      </p>
    </div>
  );
}

export default function LeetCodeDashboard() {
  const ref = useReveal();
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "success"
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetchLeetCodeStats()
      .then((data) => {
        if (cancelled) return;
        setStats(data);
        setStatus("success");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const overallPct =
    stats && stats.totalQuestions > 0
      ? Math.round((stats.totalSolved / stats.totalQuestions) * 100)
      : 0;

  return (
    <section id="leetcode" className="section leetcode section-bg-glow">
      <div className="container">
        <SectionHeading
          eyebrow="LeetCode"
          title="Problem-solving progress"
          subtitle="A live-ready snapshot of my LeetCode activity. Connect a real API any time — see the code comment for exactly where."
        />

        <div ref={ref} className="reveal leetcode__panel glass">
          {status === "loading" && (
            <div className="leetcode__state">
              <LoaderIcon className="spin" />
              <p>Loading LeetCode stats…</p>
            </div>
          )}

          {status === "error" && (
            <div className="leetcode__state leetcode__state--error">
              <AlertCircleIcon />
              <p>Couldn&apos;t load live stats right now. Showing profile link instead.</p>
              <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <LeetCodeIcon /> View LeetCode Profile
              </a>
            </div>
          )}

          {status === "success" && stats && (
            <>
              <div className="leetcode__header">
                <div>
                  <p className="leetcode__username mono">@{stats.username}</p>
                  <p className="leetcode__solved">
                    <span className="text-gradient">{stats.totalSolved}</span>
                    <span className="leetcode__solved-total"> / {stats.totalQuestions} solved</span>
                  </p>
                </div>
                <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <LeetCodeIcon /> Full Profile
                </a>
              </div>

              <div className="leetcode__rings">
                <ProgressRing value={stats.easySolved} total={stats.easyTotal} label="Easy" colorVar="--success" delay={0} />
                <ProgressRing value={stats.mediumSolved} total={stats.mediumTotal} label="Medium" colorVar="--warning" delay={120} />
                <ProgressRing value={stats.hardSolved} total={stats.hardTotal} label="Hard" colorVar="--danger" delay={240} />
                <ProgressRing value={stats.totalSolved} total={stats.totalQuestions} label="Overall" colorVar="--accent-2" delay={360} />
              </div>

              <div className="leetcode__meta">
                <div className="leetcode__meta-item">
                  <p className="leetcode__meta-value">{stats.currentStreak}</p>
                  <p className="leetcode__meta-label">Day Streak</p>
                </div>
                <div className="leetcode__meta-item">
                  <p className="leetcode__meta-value">{overallPct}%</p>
                  <p className="leetcode__meta-label">Overall Progress</p>
                </div>
                <div className="leetcode__meta-item">
                  <p className="leetcode__meta-value">{stats.ranking ?? "—"}</p>
                  <p className="leetcode__meta-label">Global Ranking</p>
                </div>
              </div>

              <p className="leetcode__note mono">
                Placeholder data — connect a live LeetCode API to replace these numbers automatically.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
