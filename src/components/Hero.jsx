import { motion } from "framer-motion";

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
      </div>

      <div className="max-w-4xl mx-auto text-center text-slate-700 dark:text-gray-50">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-md text-xs md:text-sm tracking-[0.2em] uppercase text-blue-700 dark:text-blue-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          Available for freelance & remote work
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Crafting{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
            modern web experiences
          </span>{" "}
          that feel effortless.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          I’m <span className="font-semibold text-blue-600 dark:text-blue-200">MD Hossin</span>,  
          a full-stack developer building fast, scalable, visually consistent products using  
          <span className="text-blue-600 dark:text-blue-300"> Next.js, Node.js, TailwindCSS</span> & more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-black/20 bg-black/5 text-slate-800 dark:border-white/20 dark:bg-white/10 dark:text-white backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/20 font-semibold transition"
          >
            Let's Collaborate
          </a>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 max-w-xl mx-auto rounded-3xl border border-black/10 bg-white/40 dark:border-white/20 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl p-5"
        >
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
            “I love turning complex ideas into smooth, performant interfaces — clean code,
            thoughtful UX, and consistency always come first.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
