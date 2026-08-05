/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#quick-links", label: "Quick Links" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#footer", label: "Contact" },
];

const Header = () => {
  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.4rem",
        background: "rgba(255,255,255,0.48)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(78, 86, 126, 0.12)",
        padding: "0.8rem 1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "1.5rem",
          fontFamily: "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive",
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "#4e567e",
          letterSpacing: "0.03em",
          lineHeight: 1,
        }}
      >
        Ebube Anene
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.4rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(event) => handleSmoothScroll(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
