import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white text-slate-900 border-t border-slate-200 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
            >
              MD Hossin
            </h3>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              Full-stack developer crafting modern, high-performance web apps.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {["home", "about", "skills", "projects", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {["🔗", "💼", "🐦", "📧"].map((icon, i) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-center text-slate-600 dark:text-slate-400">
          © {year} MD Hossin — Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
