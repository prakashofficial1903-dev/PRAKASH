import { ArrowDown, ArrowUpRight, Code2, MonitorSmartphone, Sparkles } from 'lucide-react';
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
        <div className="hero-preview" aria-label="A preview of a digital website design">
          <div className="preview-toolbar">
            <div className="preview-window-dots" aria-hidden="true"><i /><i /><i /></div>
            <span>yournextbigidea.com</span>
            <MonitorSmartphone size={16} aria-hidden="true" />
          </div>
          <div className="preview-content">
            <span className="preview-kicker">GOOD IDEAS DESERVE GREAT DESIGN</span>
            <strong>Make your<br />next move.</strong>
            <span className="preview-button">Let&apos;s get started <ArrowUpRight size={14} /></span>
            <div className="preview-orbit preview-orbit--one" aria-hidden="true" />
            <div className="preview-orbit preview-orbit--two" aria-hidden="true" />
          </div>
          <div className="preview-footer">
            <span><Code2 size={15} /> Built for people</span>
            <span>01 — 04</span>
          </div>
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
