import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="Languages, frameworks and tools I use to design, build and ship software."
        />

        <div ref={ref} className="reveal skills__groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group glass">
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__chips">
                {group.items.map((skill) => (
                  <span key={skill.name} className="skill-chip" title={skill.level}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
