import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Brain,
  Wrench,
  Trophy,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  GitBranch,
  Palette,
  Boxes,
  Network,
  KeyRound,
  Lock,
  Sigma,
  Layers,
  FlaskConical,
  Atom,
  Terminal,
  Github,
  Figma,
  TrendingUp,
} from "lucide-react";

// Each skill maps to a small icon (lucide-react) so chips look like real tech pills
const skillIconMap = {
  // Languages
  "C++": Terminal,
  Python: Code2,
  "JavaScript (ES6+)": Sparkles,
  // Frontend
  "Next.js": Layout,
  "React.js": Atom,
  HTML5: Code2,
  CSS3: Palette,
  "Tailwind CSS": Sparkles,
  Vite: Zap,
  // Backend
  "Node.js": Server,
  "Express.js": Network,
  "REST APIs": Globe,
  // Database
  MongoDB: Database,
  MySQL: Database,
  "Vector DB": Boxes,
  // Auth
  JWT: KeyRound,
  Bcrypt: Lock,
  // Core CS
  "Data Structures & Algorithms": Sigma,
  OOP: Layers,
  // AI
  LangChain: Brain,
  RAG: FlaskConical,
  "Scikit-learn": TrendingUp,
  // Tools
  Git: GitBranch,
  GitHub: Github,
  Figma: Figma,
  Canva: Palette,
};

const skillGroups = [
  {
    title: "Languages",
    Icon: Code2,
    accent: "from-amber-500 to-orange-500",
    ring: "ring-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-300",
    skills: ["C++", "Python", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend",
    Icon: Layout,
    accent: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-300",
    skills: ["Next.js", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    Icon: Server,
    accent: "from-emerald-500 to-teal-500",
    ring: "ring-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    Icon: Database,
    accent: "from-indigo-500 to-violet-500",
    ring: "ring-indigo-500/30",
    bg: "bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-300",
    skills: ["MongoDB", "MySQL", "Vector DB"],
  },
  {
    title: "Authentication",
    Icon: ShieldCheck,
    accent: "from-rose-500 to-pink-500",
    ring: "ring-rose-500/30",
    bg: "bg-rose-500/10",
    text: "text-rose-700 dark:text-rose-300",
    skills: ["JWT", "Bcrypt"],
  },
  {
    title: "Core CS",
    Icon: Cpu,
    accent: "from-purple-500 to-fuchsia-500",
    ring: "ring-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-300",
    skills: ["Data Structures & Algorithms", "OOP"],
  },
  {
    title: "AI / Modern Tech",
    Icon: Brain,
    accent: "from-fuchsia-500 to-pink-500",
    ring: "ring-fuchsia-500/30",
    bg: "bg-fuchsia-500/10",
    text: "text-fuchsia-700 dark:text-fuchsia-300",
    skills: ["LangChain", "RAG", "Scikit-learn"],
  },
  {
    title: "Tools",
    Icon: Wrench,
    accent: "from-slate-500 to-gray-600",
    ring: "ring-slate-500/30",
    bg: "bg-slate-500/10",
    text: "text-slate-700 dark:text-slate-300",
    skills: ["Git", "GitHub", "Figma", "Canva"],
  },
  {
    title: "Competitive Programming",
    Icon: Trophy,
    accent: "from-yellow-500 to-orange-500",
    ring: "ring-yellow-500/30",
    bg: "bg-yellow-500/10",
    text: "text-yellow-700 dark:text-yellow-300",
    skills: ["Codeforces (1200+ • Pupil)", "1000+ problems solved"],
  },
];

function SkillCard({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
      />
      {/* Decorative corner blob */}
      <div
        className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-2xl group-hover:opacity-20 transition`}
      />

      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-md ring-4 ${group.ring}`}
          >
            <group.Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">
              {group.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {group.skills.length} {group.skills.length === 1 ? "skill" : "skills"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => {
            const Icon = skillIconMap[skill] || Boxes;
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${group.bg} ${group.text} border-transparent hover:border-current/30`}
              >
                <Icon className="w-3.5 h-3.5" />
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
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
            Skills &amp; Expertise
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Technologies and tools I use to build modern, scalable applications —
            from full-stack web apps to AI-powered features.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
