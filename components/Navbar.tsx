"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Aalsi Works", href: "/aalsi" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = -((y / rect.height) - 0.5) * 8;

      nav.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const reset = () => {
      nav.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };

    nav.addEventListener("mousemove", handleMove);
    nav.addEventListener("mouseleave", reset);

    return () => {
      nav.removeEventListener("mousemove", handleMove);
      nav.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-4 py-5">
        <div
          ref={navRef}
          className="
              mx-auto
              h-16
              max-w-7xl
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              px-6
              backdrop-blur-2xl
              transition-transform
              duration-200
              will-change-transform
            "
        >
          {/* Logo */}
          <a
            href="/"
            className="
              text-lg
              font-bold
              tracking-[0.35em]
              text-white
              transition
              duration-300
              hover:text-blue-500
              hover:opacity-80
            "
          >
            A.SAHU
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  group
                  relative
                  text-sm
                  uppercase
                  tracking-widest
                  text-zinc-300
                  transition
                  hover:text-white
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-white md:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          inset-0
          z-40
          bg-transparent/95
          backdrop-blur-xl
          transition-all
          duration-500
          md:hidden

          ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="
                text-4xl
                font-light
                tracking-wider
                text-white
              "
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}