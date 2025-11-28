"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Next.js", level: 90, type: "Frontend / Full-Stack" },
    { name: "React.js", level: 85, type: "Frontend" },
    { name: "JavaScript (ES6+)", level: 90, type: "Language" },
    { name: "Tailwind CSS", level: 95, type: "Styling" },
    { name: "Node.js", level: 80, type: "Backend" },
    { name: "MongoDB", level: 75, type: "Database" },
    { name: "MySQL", level: 70, type: "Database" },
    { name: "Git & GitHub", level: 85, type: "Workflow" },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Skills &amp; Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm md:text-base"
        >
          A snapshot of the technologies I use to design, build and ship
          high-quality web applications.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-5 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {skill.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {skill.type}
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
