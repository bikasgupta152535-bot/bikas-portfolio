import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { journey } from "../data/journey.js";
import "./Journey.css";

export default function Journey() {
  const ref = useReveal();

  return (
    <section id="journey" className="section journey">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title="My path so far"
          subtitle="Edit src/data/journey.js to reflect your real timeline of learning and building."
        />

        <div ref={ref} className="reveal journey__list">
          {journey.map((item, index) => (
            <div key={item.id} className={`journey__row ${index % 2 === 1 ? "journey__row--reverse" : ""}`}>
              <div className="journey__year mono">{item.year}</div>
              <div className="journey__line">
                <span className="journey__node" />
              </div>
              <div className="journey__card glass">
                <h3 className="journey__title">{item.title}</h3>
                <p className="journey__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
