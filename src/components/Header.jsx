import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Go to home">
        {portfolioData.name}
        <span className="wordmark-dot">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav
        className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </nav>
    </header>
  );
}
