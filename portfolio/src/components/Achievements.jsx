import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { achievements } from "../data/achievements.js";
import { iconMap, AwardIcon } from "./Icons.jsx";
import "./Achievements.css";

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones"
          subtitle="Key milestones that shaped my journey in computer science and development."
        />

        <div ref={ref} className="reveal achievements__grid">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || AwardIcon;
            return (
              <div key={item.id} className="achievement-card glass">
                <div className="achievement-card__icon">
                  <Icon />
                </div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.description}</p>
                <p className="achievement-card__date mono">{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
