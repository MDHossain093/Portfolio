import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Award,
  Code2,
  Cpu,
  Users,
  Rocket,
  Star,
} from "lucide-react";

const events = [
  {
    year: "2022",
    title: "Started B.Sc. in CSE",
    subtitle: "Comilla University",
    description:
      "Began undergraduate studies in Computer Science and Engineering, building the foundation in algorithms, data structures, and software engineering.",
    Icon: GraduationCap,
    side: "left",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    title: "First ICPC Regional Contest",
    subtitle: "ICPC Preliminary",
    description:
      "Participated in the ICPC Regional Contest and IUPC at Comilla University — first taste of competitive programming at scale.",
    Icon: Code2,
    side: "right",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    year: "2024",
    title: "MERN Stack Competition",
    subtitle: "Full-Stack Showdown",
    description:
      "Competed in the MERN Stack Competition. Also led the Publicity Team at the Comilla University IT Society and was elected to the CSE Society executive committee.",
    Icon: Users,
    side: "left",
    accent: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    title: "IUPC at Premier University",
    subtitle: "Programming Contest",
    description:
      "Continued building competitive programming fundamentals while shipping full-stack side projects (Lost & Found Portal, SkillDev).",
    Icon: Cpu,
    side: "right",
    accent: "from-orange-500 to-amber-500",
  },
  {
    year: "2025",
    title: "IIUC & Solvio Hackathons",
    subtitle: "Two Hackathons in One Year",
    description:
      "Competed in IIUC Hackathon and Solvio Hackathon — sharpened rapid-prototyping and team-collaboration skills.",
    Icon: Rocket,
    side: "left",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    year: "2025",
    title: "NASA Space Apps — Regional Champion",
    subtitle: "Stellar Tales PWA",
    description:
      "Won the Regional Champion title at NASA International Space Apps Challenge 2025 for Stellar Tales, an interactive PWA teaching space weather with NASA APIs.",
    Icon: Trophy,
    side: "right",
    accent: "from-yellow-500 to-orange-500",
  },
  {
    year: "2025",
    title: "NASA Space Apps — Global Finalist",
    subtitle: "Stellar Tales",
    description:
      "Selected as a Global Finalist at NASA International Space Apps Challenge 2025 — competing among the best teams worldwide.",
    Icon: Award,
    side: "left",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    year: "July 2026",
    title: "Graduation",
    subtitle: "B.Sc. CSE — Comilla University",
    description:
      "Completing the B.Sc. in Computer Science and Engineering with a strong portfolio of full-stack, AI, and competitive programming work.",
    Icon: Star,
    side: "right",
    accent: "from-fuchsia-500 to-purple-600",
  },
];

function TimelineCard({ event, index }) {
  const isLeft = event.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`relative md:w-1/2 ${
        isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto md:text-left"
      } mb-10`}
    >
      {/* Dot on the timeline */}
      <span
        className={`absolute top-6 hidden md:block w-4 h-4 rounded-full bg-gradient-to-br ${event.accent} ring-4 ring-white dark:ring-slate-950 shadow-lg`}
        style={isLeft ? { right: "-8px" } : { left: "-8px" }}
      />

      {/* Year badge for mobile */}
      <div className="md:hidden mb-3">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${event.accent}`}
        >
          {event.year}
        </span>
      </div>

      {/* Card */}
      <div className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${event.accent} opacity-0 group-hover:opacity-5 transition-opacity`}
        />

        <div
          className={`relative flex items-start gap-3 ${
            isLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${event.accent} text-white shadow-md flex-shrink-0`}
          >
            <event.Icon className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Year — desktop only (mobile shows the badge above) */}
            <span
              className={`hidden md:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r ${event.accent} mb-2`}
            >
              {event.year}
            </span>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              {event.title}
            </h3>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
              {event.subtitle}
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            Journey
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            From First Semester to Last Semester
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            A timeline of the milestones that shaped my path as a developer and
            competitive programmer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — center on md+, left on mobile */}
          <div className="absolute md:left-1/2 left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-fuchsia-500 opacity-30" />

          {events.map((event, i) => (
            <TimelineCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}