/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useEffect, useState } from "react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#quick-links", label: "Quick Links" },
  { href: "#portfolio", label: "Select Projects" },
  { href: "#awards", label: "Awards & Certs" },
  { href: "#footer", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();

    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }

    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-brand">Ebube Anene</div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((current) => !current)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span className="menu-icon" />
      </button>

      <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(event) => handleSmoothScroll(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
