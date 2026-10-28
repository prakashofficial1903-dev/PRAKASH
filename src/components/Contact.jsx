import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-inner">
        <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
        <h2>Let&apos;s make<br /><span>it happen.</span></h2>
        <p className="contact-intro">
          Have a project, a question, or just want to say hello? My inbox is always open.
        </p>
        <a
          className="button button--light"
          href={`mailto:${portfolioData.email}?subject=${encodeURIComponent("Let's make something good")}`}
        >
          <Mail size={17} /> Say hello <ArrowUpRight size={17} />
        </a>
        <div className="contact-meta">
          <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
          <span><MapPin size={14} /> India · Open to remote</span>
        </div>
      </div>
      <span className="contact-decoration contact-decoration--one" aria-hidden="true">✳</span>
      <span className="contact-decoration contact-decoration--two" aria-hidden="true">✳</span>
    </section>
  );
}
