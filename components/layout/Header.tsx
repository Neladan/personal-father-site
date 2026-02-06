"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/biographie", label: "Biographie" },
  { href: "/enseignements", label: "Enseignements" },
  { href: "/conferences", label: "Conférences" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="header"
        style={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.85)",
        }}
      >
        <div className="container header-inner">
          <Link href="/" className="logo">
            Teddy NGBANDA
          </Link>

          <nav>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span
              style={{
                transform: isMenuOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span
              style={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                transform: isMenuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
