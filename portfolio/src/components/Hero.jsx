import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, ArrowRightIcon, DownloadIcon } from "./Icons.jsx";
import { socialLinks } from "../data/social.js";
import "./Hero.css";

const CODE_LINES = [
  { indent: 0, text: "public class BikasKumarGupta {" },
  { indent: 1, text: "private String role = " },
  { indent: 1, text: '"Java Developer";', extra: true },
  { indent: 1, text: "" },
  { indent: 1, text: "public void solve(Problem p) {" },
  { indent: 2, text: "while (!p.isSolved()) {" },
  { indent: 3, text: "think(); debug(); learn();" },
  { indent: 2, text: "}" },
  { indent: 1, text: "}" },
  { indent: 0, text: "}" },
];

function TypedCode() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return undefined;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 220);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="code-window glass" aria-hidden="true">
      <div className="code-window__bar">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="code-window__title">BikasKumarGupta.java</span>
      </div>
      <div className="code-window__body mono">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="code-line"
            style={{ paddingLeft: `${line.indent * 20}px` }}
          >
            <span className="code-line__num">{i + 1}</span>
            <span className={line.extra ? "code-string" : "code-text"}>{line.text || "\u00A0"}</span>
          </div>
        ))}
        {visibleLines < CODE_LINES.length && <span className="code-cursor" />}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero section-bg-glow">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Available for opportunities</span>
          <h1 className="hero__name">
            Hi, I&apos;m <span className="text-gradient">Bikas Kumar Gupta</span>
          </h1>
          <p className="hero__role mono">B.Tech CSE Student · Java Developer · Problem Solver</p>
          <p className="hero__intro">
            I build clean, functional software and enjoy breaking down hard problems into
            simple, working code — from Java-based systems to full-stack web applications.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRightIcon />
            </a>
            {/* [EDIT HERE]: resume file lives at public/resume/resume.pdf */}
            <a href="/resume/resume.pdf" className="btn btn-ghost" download>
              Download Resume <DownloadIcon />
            </a>
          </div>

          <div className="hero__socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon />
            </a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode profile">
              <LeetCodeIcon />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <TypedCode />
        </div>
      </div>
    </section>
  );
}
