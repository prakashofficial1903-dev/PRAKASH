import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Hero() {
  return (
    <section className="hero page-shell" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="availability-dot" />
          Open to select opportunities
        </div>
        <p className="hero-greeting">Hey, I&apos;m {portfolioData.name} <span>✳</span></p>
        <h1>
          Making the web
          <br />
          feel a little more
          <br />
          <span className="highlight">human.</span>
        </h1>
        <p className="hero-description">{portfolioData.intro}</p>
        <div className="hero-actions">
          <a className="button button--dark" href="#work">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#about">
            A little about me <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={portfolioData.portrait} alt={`${portfolioData.name}, ${portfolioData.role}`} />
        </div>
        <div className="portrait-label">
          <Sparkles size={16} />
          <span>Good things take curiosity.</span>
        </div>
        <div className="hero-sticker" aria-hidden="true">
          <span>DESIGN</span>
          <span>WITH</span>
          <span>FEELING</span>
          <span className="sticker-star">✳</span>
        </div>
        <span className="hero-scribble" aria-hidden="true">✳</span>
      </div>
      <div className="hero-bottom">
        <span>{portfolioData.location}</span>
        <a href="#about">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
      </div>
    </section>
  );
}
