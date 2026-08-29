import { motion } from "framer-motion";
import { Code2, Cpu, Terminal, Users } from "lucide-react";

export default function Competitions() {
  const competitions = [
    {
      Icon: Code2,
      title: "ICPC Regional Contest",
      year: "2023, 2024",
      tag: "Algorithmic",
    },
    {
      Icon: Terminal,
      title: "IUPC — Premier University",
      year: "2024",
      tag: "Programming",
    },
    {
      Icon: Terminal,
      title: "IUPC — Comilla University",
      year: "2023",
      tag: "Programming",
    },
    {
      Icon: Cpu,
      title: "IIUC Hackathon",
      year: "2025",
      tag: "Hackathon",
    },
    {
      Icon: Cpu,
      title: "Solvio Hackathon",
      year: "2025",
      tag: "Hackathon",
    },
    {
      Icon: Users,
      title: "MERN Stack Competition",
      year: "2024",
      tag: "Full-Stack",
    },
  ];

  return (
    <section
      id="competitions"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            Competitions
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Competitions &amp; Participations
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Algorithmic contests, hackathons, and team challenges I&apos;ve
            competed in.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitions.map((item, i) => (
            <motion.div
              key={`${item.title}-${item.year}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform">
                <item.Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 truncate">
                  {item.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100/70 dark:border-blue-800/40">
                    {item.tag}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
