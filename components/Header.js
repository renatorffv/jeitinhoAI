"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { whatsappLink } from "./site";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#por-que", label: "Por que nós" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__brand" onClick={() => setOpen(false)}>
          <Logo size={40} />
        </a>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Vim pelo site e quero saber mais.")}
            className="btn btn--primary nav__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
