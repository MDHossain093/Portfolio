import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

// Project banner — falls back to an avatar when image is missing or fails to load
function ProjectBanner({ project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = project.image && !imgFailed;

  return (
    <div className="relative h-44 overflow-hidden bg-slate-900">
      {showImage ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <ProjectAvatar title={project.title} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] bg-black/50 text-slate-100 backdrop-blur-md border border-white/10">
        {project.category}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent transition-opacity flex items-end justify-between px-4 pb-3 text-xs text-slate-100">
        <p className="max-w-[70%] line-clamp-2 text-[11px]">
          {project.description}
        </p>
        <span className="text-[11px] border border-white/30 rounded-full px-2 py-0.5">
          {project.technologies[0]}
        </span>
      </div>
    </div>
  );
}


// Generate a consistent gradient pair based on the project title
function getAvatarGradient(title) {
  const gradients = [
    "from-blue-500 via-cyan-400 to-purple-600",
    "from-purple-500 via-pink-500 to-rose-500",
    "from-emerald-500 via-teal-400 to-cyan-600",
    "from-orange-500 via-amber-400 to-yellow-500",
    "from-indigo-500 via-blue-500 to-cyan-500",
    "from-fuchsia-500 via-purple-500 to-indigo-500",
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

function ProjectAvatar({ title }) {
  const initials = title
    .replace(/[()]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${getAvatarGradient(title)} flex items-center justify-center`}
    >
      <div className="absolute inset-0 bg-slate-950/30" />
      <span className="relative text-5xl md:text-6xl font-bold text-white/90 tracking-tight drop-shadow-lg select-none">
        {initials}
      </span>
      {/* decorative circles */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-black/20 blur-2xl" />
    </div>
  );
}

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: "Stellar Tales (NASA Space Apps 2025)",
    description:
      "Developed an interactive progressive web app to teach children about space weather concepts using real-time NASA data. Implemented offline-first functionality and dynamic visualizations with charts to simplify complex scientific information and improve accessibility.",
    technologies: ["React", "PWA", "NASA APIs", "Chart.js"],
    image: "/stellar-tales.jpg",
    liveUrl: "https://steller-tales.vercel.app/",
    githubUrl: "",
    category: "Frontend"
  },
  {
    id: 2,
    title: "SkillDev — AI-Powered Developer Portfolio",
    description:
      "Built a full-stack developer platform featuring portfolio management, project and skill tracking, AI-powered career assistance, and developer discovery with secure authentication and RESTful APIs.",
    technologies: ["Next.js", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma", "JWT", "Gemini AI", "LangChain"],
    image: "/skilldev.jpg",
    liveUrl: "https://skilldev2-0-8yljymvv3-mdhossain093s-projects.vercel.app/",
    githubUrl: "",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "CF Recommender",
    description:
      "Built a research-based competitive programming recommender system using Difficulty-Aware Truncated SVD for personalized Codeforces problem recommendation. Integrated tag-level weakness analysis, cold-start recommendation, and automated team formation with a React.js frontend and Flask REST APIs.",
    technologies: ["Python", "Flask", "React.js", "Scikit-learn", "Pandas"],
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/MDHossain093/projectResearch",
    category: "AI / Tooling"
  },
  {
    id: 4,
    title: "Lost & Found Portal",
    description:
      "Created a campus-focused web application that enables users to report, search, and recover lost items through image-based listings. Implemented secure communication between users, responsive UI design, and backend services for efficient real-time data management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/lost-found.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/MDHossain093/Lost_Found_Portal",
    category: "Full-Stack"
  },
  {
    id: 5,
    title: "CashNex",
    description:
      "Developed a progressive web application for tracking personal expenses and loans, offering a simple and mobile-friendly alternative to traditional finance tools. Focused on clean UI design, offline capabilities, and efficient data handling for everyday financial management.",
    technologies: ["Next.js", "Tailwind CSS", "PWA"],
    image: "/cashnex.jpg",
    liveUrl: "https://cashnex.netlify.app/",
    githubUrl: "https://github.com/MDHossain093/Loan-manager",
    category: "Frontend"
  }
];

  const filters = ["All", "Full-Stack", "Frontend", "AI / Tooling"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            My Work
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Selected Projects
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            A mix of front-end, full-stack and dashboard projects that showcase
            my experience with modern web technologies and product thinking.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm border transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md"
                    : "border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image / banner */}
              <ProjectBanner project={project} />

              {/* Content */}
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100/70 dark:border-blue-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 sm:gap-3 w-full">
                  <a
                    href={project.liveUrl || "#projects"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noopener noreferrer" : undefined}
                    aria-disabled={!project.liveUrl}
                    aria-label="Live demo"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-500 hover:via-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition ${
                      project.liveUrl
                        ? "hover:shadow-xl"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>

                  <a
                    href={project.githubUrl || "#projects"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noopener noreferrer" : undefined}
                    aria-disabled={!project.githubUrl}
                    aria-label="Source code"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-500 hover:via-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition ${
                      project.githubUrl
                        ? "hover:shadow-xl"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
