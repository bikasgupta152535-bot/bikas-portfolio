import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/services.js";
import { iconMap, CodeIcon } from "./Icons.jsx";
import "./Services.css";

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What I can help with"
          subtitle="Areas I'm comfortable working in, from building interfaces to wiring up the backend behind them."
        />

        <div ref={ref} className="reveal services__grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || CodeIcon;
            return (
              <div key={service.id} className="service-card glass">
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
