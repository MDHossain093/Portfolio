import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navShrink, setNavShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [moreOpen, setMoreOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

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

  // Detect active section based on scroll position
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (sections.length === 0) return;

    function updateActiveSection() {
      // The line that defines which section is "active" — about 1/3 from the top
      const detectionLine = window.innerHeight * 0.33;

      let currentId = sections[0]?.id || "home";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= detectionLine) {
          currentId = sec.id;
        } else {
          break;
        }
      }
      setActiveSection(currentId);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "journey" },
    { name: "AI Demos", id: "ai-demos" },
    { name: "Contact", id: "contact" },
  ];

  // Sections reachable via "More" — kept compact in the desktop nav
  const moreItems = [
    { name: "Achievements", id: "achievements" },
    { name: "Competitions", id: "competitions" },
    { name: "Education", id: "education" },
  ];

  const toggleTheme = () => {
    const currentTheme = resolvedTheme || theme || 'light';
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

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
          <ul className="hidden md:flex items-center gap-8 text-slate-900 dark:text-slate-100 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative pb-1 transition cursor-pointer
                    ${
                      isActive(item.id)
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
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

            {/* More dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-1 pb-1 transition cursor-pointer text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {moreOpen && (
                <ul className="absolute top-full right-0 mt-2 w-44 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50">
                  {moreItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          scrollToSection(item.id);
                          setMoreOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm transition ${
                          isActive(item.id)
                            ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 text-blue-700 dark:text-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted ? (
                (resolvedTheme || theme) === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5 transition-all">
              <span
                className={`block w-7 h-0.5 bg-slate-900 dark:bg-slate-100 transition-transform ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-7 h-0.5 bg-slate-900 dark:bg-slate-100 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-7 h-0.5 bg-slate-900 dark:bg-slate-100 transition-transform ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="fixed top-[72px] left-0 w-full md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl py-4 px-6 space-y-4 border-t dark:border-slate-800 shadow-2xl z-40">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block text-lg w-full text-left ${
                  isActive(item.id)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* More group on mobile — separate visual section */}
          <li className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">
              More
            </p>
            {moreItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block text-base w-full text-left py-1.5 ${
                  isActive(item.id)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </li>

          <button
            onClick={toggleTheme}
            className="w-full py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 text-blue-700 dark:text-slate-100 hover:shadow-lg transition-all duration-300 text-sm mt-2 flex items-center justify-center gap-2"
          >
            {mounted ? (
              (resolvedTheme || theme) === "dark" ? (
                <>
                  <Sun className="w-4 h-4" />
                  Switch to Light
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  Switch to Dark
                </>
              )
            ) : (
              "Loading..."
            )}
          </button>
        </ul>
      )}
    </>
  );
}
