import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      Icon: Trophy,
      title: "Global Finalist",
      event: "NASA International Space Apps Challenge 2025",
      description:
        "Selected as a Global Finalist among thousands of teams worldwide for Stellar Tales, a NASA Space Weather Learning PWA built with React and real-time NASA APIs.",
      accent: "from-yellow-500/20 to-amber-500/10",
      iconBg: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-300",
    },
    {
      Icon: Award,
      title: "Regional Champion",
      event: "NASA International Space Apps Challenge 2025",
      description:
        "Won the Regional Champion title for the NASA Space Apps Challenge, advancing to the global round with the Stellar Tales project.",
      accent: "from-blue-500/20 to-cyan-500/10",
      iconBg: "bg-blue-500/20 text-blue-600 dark:text-blue-300",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-white dark:bg-slate-900"
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
            Achievements
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Recognition & Awards
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Milestones that reflect dedication to building real-world solutions.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.iconBg}`}
                >
                  <item.Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {item.event}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
