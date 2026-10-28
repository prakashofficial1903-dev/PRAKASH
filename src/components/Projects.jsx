import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="page-shell">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="A FEW FAVORITES"
            title="Made with intention."
            description="A selection of ideas turned into useful, memorable digital experiences."
          />
          <span className="projects-count">2024 — 2025<br />SELECTED WORK</span>
        </div>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-art">
                <span className="project-monogram">{project.monogram}</span>
                <span className="project-art-mark" aria-hidden="true">✳</span>
                <span className="project-number">{project.number} / 03</span>
              </div>
              <div className="project-info">
                <div>
                  <span className="project-category">{project.category} · {project.year}</span>
                  <h3>{project.title}</h3>
                </div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project`}>
                  <ArrowUpRight size={18} />
                </a>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
