export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle" style={center ? { marginLeft: "auto", marginRight: "auto" } : undefined}>{subtitle}</p>}
    </div>
  );
}
