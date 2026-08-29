import { GitHubIcon, ExternalLinkIcon } from "./Icons.jsx";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, tagline, description, tech, features, github, demo, status, image } = project;

  return (
    <article className="project-card glass">
      <div className="project-card__cover">
        {image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" />
        ) : (
          <div className="project-card__cover-placeholder">
            <span className="mono">{title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <span className={`project-card__status ${status === "Completed" ? "is-done" : "is-progress"}`}>
          {status}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__tagline mono">{tagline}</p>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost project-card__link">
            <GitHubIcon width={17} height={17} /> Code
          </a>
          {demo ? (
            <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary project-card__link">
              Live Demo <ExternalLinkIcon />
            </a>
          ) : (
            <span className="project-card__link project-card__link--disabled mono">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
