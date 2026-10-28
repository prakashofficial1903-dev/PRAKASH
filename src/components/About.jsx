import { ArrowUpRight, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-shell">
        <SectionHeading eyebrow="A LITTLE INTRO" title="Curious by nature." />
        <div className="about-grid">
          <div className="about-note">
            <Heart size={20} />
            <p>Good work starts with listening.</p>
            <span>My favorite part of any project? Figuring out what really matters.</span>
          </div>
          <div className="about-copy">
            <p className="about-lead">{portfolioData.about}</p>
            <p className="about-support">
              Equal parts thoughtful and hands-on, I love bringing designers, developers, and big
              ideas together to make something worth spending time with.
            </p>
            <a className="inline-link" href="#contact">
              More about working together <ArrowUpRight size={16} />
            </a>
            <div className="stats-row">
              <div><strong>{portfolioData.yearsExperience}</strong><span>Years learning & making</span></div>
              <div><strong>{portfolioData.projectsCompleted}</strong><span>Projects brought to life</span></div>
              <div><strong>∞</strong><span>Things left to learn</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
