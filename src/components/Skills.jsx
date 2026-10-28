import { ArrowUpRight, Code2, Layers3, Megaphone, WandSparkles } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { portfolioData } from '../data/portfolioData.js';

const icons = [Code2, WandSparkles, Layers3, Megaphone];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="page-shell">
        <SectionHeading
          eyebrow="WHAT I BRING"
          title="A few things I do well."
          description="A flexible mix of design thinking and development, with a soft spot for the details."
        />
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <article className="skill-card" key={skill.title}>
                <div className="skill-card-top">
                  <span className="skill-icon"><Icon size={20} strokeWidth={1.7} /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="tag-list">
                  {skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                <ArrowUpRight className="skill-arrow" size={18} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
