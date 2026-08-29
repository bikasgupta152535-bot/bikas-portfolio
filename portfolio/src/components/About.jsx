import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import { skillGroups } from "../data/skills.js";
import "./About.css";


const stats = [
  { label: "Projects Built", value: `${projects.length}+` },
  { label: "Core Skills", value: `${skillGroups.reduce((n, g) => n + g.items.length, 0)}+` },
  { label: "Years Learning to Code", value: "2+" },
  { label: "Problems Practiced", value: "250+" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A little about who I am"
          subtitle="The short version of my background, what I study, and what keeps me interested in code."
        />

        <div ref={ref} className="reveal about__grid">
          <div className="about__text">
            <p>
              I'm a B.Tech Computer Science &amp; Engineering student with a strong interest in
              Java development and problem solving. I like understanding how systems work under
              the hood, then building clean, working software on top of that understanding.
            </p>
            <p>
              Outside of coursework, I spend time strengthening my data structures and algorithms
              fundamentals, working on full-stack side projects, and picking apart problems on
              LeetCode to sharpen how I think through logic.
            </p>

            <div className="about__edu glass">
              <span className="eyebrow" style={{ marginBottom: 10 }}>Education</span>
              <p className="about__edu-degree">B.Tech, Computer Science &amp; Engineering</p>
              {}
              <p className="about__edu-meta">[Maharana pratap engineering college,kanpur] &middot; [2024-2028]</p>
            </div>
          </div>

          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card glass">
                <p className="stat-card__value text-gradient">{s.value}</p>
                <p className="stat-card__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
