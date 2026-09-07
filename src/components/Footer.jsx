import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ArrowUp,
  Heart,
  MapPin,
  Code2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      Icon: Github,
      label: "GitHub",
      handle: "@MDHossain093",
      href: "https://github.com/MDHossain093",
      gradient: "from-slate-700 to-slate-900",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      handle: "MD Hossin Fardin",
      href: "https://www.linkedin.com/in/md-hossin-fardin-381720241/",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      Icon: Globe,
      label: "Portfolio",
      handle: "Live site",
      href: "https://portfolio-chi-seven-78.vercel.app/",
      gradient: "from-indigo-500 to-purple-700",
    },
    {
      Icon: Mail,
      label: "Email",
      handle: "mdhossin093@gmail.com",
      href: "mailto:mdhossin093@gmail.com",
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "ai-demos", label: "AI Demos" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24">
      {/* Footer body */}
      <div className="relative bg-slate-900 dark:bg-slate-950 text-slate-200">
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            {/* Brand block */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-blue-900/40">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 leading-tight">
                    MD Hossin
                  </h3>
                  <p className="text-xs text-slate-400">Also known as Fardin</p>
                </div>
              </div>

              <p className="mt-4 max-w-md text-sm text-slate-300 leading-relaxed">
                Full-stack developer crafting modern, high-performance web apps
                with Next.js, AI, and competitive programming skills.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  </span>
                  Available for work
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300">
                  <MapPin className="w-3 h-3" />
                  Chittagong, Bangladesh
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-4">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 group-hover:w-3 transition-all" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="md:col-span-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-4">
                Let&apos;s Connect
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map(({ Icon, label, handle, href, gradient }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/25 p-3 transition"
                  >
                    <div
                      className={`absolute -top-10 -right-10 h-20 w-20 rounded-full bg-gradient-to-br ${gradient} opacity-25 blur-2xl group-hover:opacity-50 transition`}
                    />
                    <div className="relative flex items-center gap-2.5">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} text-white shadow-md flex-shrink-0`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-xs font-medium text-white truncate">
                          {handle}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              © {year}{" "}
              <span className="text-slate-300 font-medium">
                MD Hossin (Fardin)
              </span>{" "}
              — All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <p className="inline-flex items-center gap-1.5">
                Built with{" "}
                <span className="inline-flex items-center gap-1 text-white">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Next.js
                </span>{" "}
                &amp;{" "}
                <span className="inline-flex items-center gap-1 text-white">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Tailwind
                </span>
              </p>

              <button
                onClick={scrollTop}
                aria-label="Back to top"
                className="group inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/25 transition"
              >
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Crafted line */}
          <p className="mt-4 text-center text-[11px] text-slate-500 inline-flex items-center justify-center gap-1.5 w-full">
            Crafted with{" "}
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> and lots of{" "}
            <code className="px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-slate-300">
              console.log
            </code>
          </p>
        </div>
      </div>
    </footer>
  );
}