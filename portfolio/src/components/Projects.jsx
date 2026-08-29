import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A mix of full-stack applications and tools, built to practice and apply what I'm learning."
        />

        <div ref={ref} className="reveal projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
