import { motion } from "framer-motion";
import { Trophy, Brain, Code2, Sparkles, ArrowRight } from "lucide-react";

const stats = [
  {
    Icon: Trophy,
    value: "Global Finalist",
    label: "NASA Space Apps 2025",
    accent: "from-amber-500 to-orange-500",
    ring: "ring-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-300",
    href: "#journey",
  },
  {
    Icon: Code2,
    value: "1200+",
    label: "Codeforces (Pupil)",
    accent: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-300",
    href: "#about",
  },
  {
    Icon: Brain,
    value: "5+",
    label: "Live Projects",
    accent: "from-emerald-500 to-teal-500",
    ring: "ring-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    href: "#projects",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-blue-500/20 dark:bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-purple-500/15 dark:bg-purple-500/25 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center text-slate-900 dark:text-slate-50">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-slate-300/40 dark:border-slate-600/40 bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-md text-xs md:text-sm tracking-[0.2em] uppercase text-blue-700 dark:text-blue-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          Available for freelance &amp; remote work
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
            MD Hossin
          </span>
          <br className="hidden md:block" />
          <span className="text-3xl md:text-5xl lg:text-6xl">
            a builder, learner,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
              NASA finalist
            </span>
            .
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-5 text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          Full-stack developer working across{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-300">
            Next.js, Node.js, and AI
          </span>
          . I build production-grade apps, compete in algorithmic contests, and
          ship research-driven side projects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#ai-demos"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-900/40 hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            <Sparkles className="w-4 h-4" />
            Try my AI demos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-slate-300/60 dark:border-slate-600/60 bg-slate-100/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-50 backdrop-blur-md hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-blue-500 dark:hover:border-blue-400 font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-slate-300/60 dark:border-slate-600/60 bg-slate-100/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-50 backdrop-blur-md hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-blue-500 dark:hover:border-blue-400 font-semibold transition"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        {/* Achievement stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 ${stat.bg} backdrop-blur-md p-4 hover:-translate-y-1 hover:shadow-lg transition`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <div className="relative flex items-center gap-3 text-left">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.accent} text-white shadow-md flex-shrink-0`}
                >
                  <stat.Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className={`text-base md:text-lg font-bold ${stat.text}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
