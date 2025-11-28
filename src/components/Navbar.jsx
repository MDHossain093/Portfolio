"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navShrink, setNavShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll effects (shrink + progress)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setNavShrink(scrolled > 20);
      setScrollProgress(docHeight > 0 ? (scrolled / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  const isActive = (id) => activeSection === id;

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 backdrop-blur-xl
          transition-all duration-300 border-b
          ${
            navShrink
              ? "py-2 bg-white/80 dark:bg-gray-900/80 shadow-lg border-gray-200/60 dark:border-gray-800/80"
              : "py-4 bg-white/40 dark:bg-gray-900/40 border-transparent"
          }
        `}
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 hover:opacity-80 transition"
          >
            MD Hossin
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative pb-1 transition cursor-pointer
                    ${
                      isActive(item.id)
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }
                  `}
                >
                  {item.name}
                  {isActive(item.id) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full" />
                  )}
                </button>
              </li>
            ))}

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 px-3 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === "dark" ? "☀️ Light" : "🌙 Dark") : "⚙️"}
            </button>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5 transition-all">
              <span
                className={`block w-7 h-0.5 bg-gray-800 dark:bg-gray-100 transition-transform ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-7 h-0.5 bg-gray-800 dark:bg-gray-100 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-7 h-0.5 bg-gray-800 dark:bg-gray-100 transition-transform ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="fixed top-[72px] left-0 w-full md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl py-4 px-6 space-y-4 border-t dark:border-gray-800 shadow-2xl z-40">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block text-lg w-full text-left ${
                  isActive(item.id)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-gray-100 hover:shadow-lg transition-all duration-300 text-sm mt-2"
          >
            {mounted
              ? theme === "dark"
                ? "Switch to Light ☀️"
                : "Switch to Dark 🌙"
              : "Loading..."}
          </button>
        </ul>
      )}
    </>
  );
}
