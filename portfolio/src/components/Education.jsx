import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/education.js";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div ref={ref} className="reveal education__timeline">
          {education.map((item) => (
            <div key={item.id} className="education__item">
              <div className="education__dot" />
              <div className="education__card glass">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <p className="education__duration mono">{item.duration}</p>
                <p className="education__details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
