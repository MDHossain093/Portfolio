import { motion } from "framer-motion";
import { useState, useMemo } from "react";

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
    title: "SkillDev",
    description:
      "Built a full-stack platform that centralizes student skills, projects, and coding achievements to enhance peer visibility and collaboration. Designed and implemented RESTful APIs, optimized database schema with MySQL, and ensured efficient handling of user-generated content.",
    technologies: ["HTML", "CSS", "JavaScript", "Express.js", "MySQL"],
    image: "/skilldev.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/MDHossain093/SkillDev",
    category: "Full-Stack"
  },
  {
    id: 3,
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
    id: 4,
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

  const filters = ["All", "Full-Stack", "Frontend", "Dashboard", "Tooling"];
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
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-slate-900 to-purple-500/40" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  💻
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] bg-black/50 text-slate-100 backdrop-blur-md border border-white/10">
                  {project.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity flex items-end justify-between px-4 pb-3 text-xs text-slate-100">
                  <p className="max-w-[70%] line-clamp-2 text-[11px]">
                    {project.description}
                  </p>
                  <span className="text-[11px] border border-white/30 rounded-full px-2 py-0.5">
                    {project.technologies[0]}
                  </span>
                </div>
              </div>

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

                <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                  <a
                    href={project.liveUrl || "#projects"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noopener noreferrer" : undefined}
                    aria-disabled={!project.liveUrl}
                    className={`px-10 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-500 hover:via-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition ${
                      project.liveUrl
                        ? "hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:-translate-y-1"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    Live ↗
                  </a>

                  <a
                    href={project.githubUrl || "#projects"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noopener noreferrer" : undefined}
                    aria-disabled={!project.githubUrl}
                    className={`px-10 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 hover:from-blue-500 hover:via-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition ${
                      project.githubUrl
                        ? "hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:-translate-y-1"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                  >
                    Code ↗
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
