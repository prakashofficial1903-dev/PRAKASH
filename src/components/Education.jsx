import { ArrowUpRight, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="page-shell education-layout">
        <div>
          <SectionHeading
            eyebrow="THE LEARNING NEVER STOPS"
            title="Built on good foundations."
            description="A little of what I've studied, explored, and learned along the way."
          />
          <a className="inline-link education-link" href="#contact">
            Ask me about my journey <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="education-list">
          {portfolioData.education.map((item) => (
            <article className="education-item" key={item.degree}>
              <span className="education-icon"><GraduationCap size={19} /></span>
              <div className="education-details">
                <span className="education-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-detail">{item.detail}</p>
              </div>
              <ArrowUpRight className="education-arrow" size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
