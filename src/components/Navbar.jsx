import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand">
          Abdelrahman<span>.dev</span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav className={`navbar-mobile ${open ? 'open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
