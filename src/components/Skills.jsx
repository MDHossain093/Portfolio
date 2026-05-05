import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["Next.js", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Core CS",
      skills: ["Data Structures & Algorithms", "OOP"],
    },
    {
      title: "AI / Modern Tech",
      skills: ["LangChain", "RAG", "Vector DB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "Canva"],
    },
    {
      title: "Competitive Programming",
      skills: [
        "Codeforces (1200+ Rating • Pupil)"
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            Skills
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100/70 dark:border-blue-800/40 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/40 dark:hover:text-blue-200 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}