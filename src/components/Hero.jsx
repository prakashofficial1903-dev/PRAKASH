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
          Digital ideas,
          <br />
          built to make
          <br />
          <span className="highlight">an impact.</span>
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
        <div className="hero-portrait">
          <img src={portfolioData.portrait} alt={`${portfolioData.name} holding a laptop`} />
        </div>
        <div className="portrait-label">
          <Sparkles size={16} />
          <span>Designed to make a difference.</span>
        </div>
        <div className="hero-sticker" aria-hidden="true">
          <span>THINK</span>
          <span>MAKE</span>
          <span>GROW</span>
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
