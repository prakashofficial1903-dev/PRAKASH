import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="site-footer page-shell">
      <a className="wordmark" href="#home">
        {portfolioData.name}<span className="wordmark-dot">.</span>
      </a>
      <p>Thoughtfully made, one pixel at a time.</p>
      <div className="footer-socials" aria-label="Social links">
        {portfolioData.socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={13} />
          </a>
        ))}
      </div>
      <span className="copyright">© {new Date().getFullYear()} {portfolioData.name}</span>
    </footer>
  );
}
