"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with shopping cart, payment integration, and an admin dashboard for product & order management.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project1",
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Real-time collaborative task manager with drag & drop, kanban boards and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/project2.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project2",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather app with 7-day forecasts, beautiful charts and location-based weather alerts.",
      technologies: ["Next.js", "OpenWeather API", "Chart.js"],
      image: "/project3.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project3",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for monitoring social media performance with data visualizations and reports.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "/project4.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project4",
      category: "Dashboard",
    },
    {
      id: 5,
      title: "Portfolio Generator",
      description:
        "AI-powered portfolio generator that lets developers deploy a polished portfolio in minutes.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "MySQL"],
      image: "/project5.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project5",
      category: "Full-Stack",
    },
    {
      id: 6,
      title: "Blog CMS",
      description:
        "Content management system with markdown, SEO optimization and analytics integration.",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      image: "/project6.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project6",
      category: "Tooling",
    },
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
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
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
                    : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500/70 hover:text-blue-600 dark:hover:text-blue-400"
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
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-100/70 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs md:text-sm font-semibold px-3 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs md:text-sm font-semibold px-3 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
                  >
                    GitHub
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
