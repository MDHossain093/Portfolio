"use client";

import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "Full-stack web applications",
    "Clean, scalable architecture",
    "Reusable, accessible UI components",
    "Performance-focused development",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1.1fr] gap-14 items-center">
        {/* Left image card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 dark:border-slate-800 bg-slate-900">
            <img
              src="/profile.jpg"
              alt="MD Hossin"
              className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">
                  Full-Stack Developer
                </p>
                <p className="font-semibold text-sm">MD Hossin</p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[11px]">
                <span className="text-emerald-300">20+ projects</span> shipped
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Building thoughtful digital products with clean code &amp; sharp UI.
          </h2>

          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            I&apos;m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              MD Hossin
            </span>
            , a full-stack developer focused on crafting modern web applications
            that look good and perform even better. I enjoy working across the
            stack — from database and APIs to polished frontends.
          </p>

          <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            My goal is to keep shipping production-ready products, learn from
            real-world problems, and eventually lead high-impact engineering
            teams working on meaningful products.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-[11px] text-white shadow-md">
                  ✓
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-100/70 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                20+
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Projects Delivered
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-100/70 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                10+
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Technologies Used
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-100/70 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                2+ yrs
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
