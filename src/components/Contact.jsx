import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Send,
  Github,
  Linkedin,
  Globe,
  ArrowUpRight,
  Sparkles,
  Clock,
  MessageSquare,
  Copy,
} from "lucide-react";

const MAX_MESSAGE = 500;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mkglvegq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 4500);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mdhossin093@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "mdhossin093@gmail.com",
      link: "mailto:mdhossin093@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      ring: "ring-blue-500/30",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+8801636348262",
      link: "tel:+8801636348262",
      gradient: "from-emerald-500 to-teal-500",
      ring: "ring-emerald-500/30",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Chittagong, Bangladesh",
      gradient: "from-rose-500 to-pink-500",
      ring: "ring-rose-500/30",
    },
  ];

  const socials = [
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/mdhossin",
      gradient: "from-slate-700 to-slate-900",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-hossin-fardin-381720241",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      Icon: Globe,
      label: "Portfolio",
      href: "https://portfolio-chi-seven-78.vercel.app",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const messageLength = formData.message.length;

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Have a project, an idea, or a role that fits? Drop me a message — I
            usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-xl"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative p-7 md:p-8 text-white">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Available for new work
              </div>

              <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight">
                Let&apos;s talk about your next project
              </h3>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                Open to freelance, remote work, full-time roles, and
                collaborations on interesting problems.
              </p>

              {/* Contact items */}
              <div className="mt-7 space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link || "#"}
                    className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/25 transition"
                  >
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${info.gradient} ring-4 ${info.ring} shadow-md flex-shrink-0`}
                    >
                      <info.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-white/70">
                        {info.label}
                      </p>
                      <p className="font-medium truncate">{info.value}</p>
                    </div>
                    {info.link && (
                      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                    )}
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 text-xs text-white/85">
                <Clock className="w-3.5 h-3.5" />
                Average response time:{" "}
                <span className="font-semibold">under 24 hours</span>
              </div>

              {/* Socials */}
              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-wider text-white/70 mb-3">
                  Find me online
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 backdrop-blur-sm ring-1 ring-white/15 hover:bg-white/15 transition text-xs font-medium"
                    >
                      <s.Icon className="w-3.5 h-3.5" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM SECTION */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-7 md:p-9"
          >
            {/* Form header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                  Send me a message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "name", type: "text", placeholder: "Your name" },
                { name: "email", type: "email", placeholder: "you@email.com" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <label
                    className="absolute left-4 top-3 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
                  >
                    {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </label>
                </div>
              ))}
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <label className="absolute left-4 top-3 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm">
                Subject
              </label>
            </div>

            {/* Message with counter */}
            <div className="relative mt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder=" "
                maxLength={MAX_MESSAGE}
                className="peer w-full px-4 pt-5 pb-7 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              />
              <label className="absolute left-4 top-3 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm">
                Message
              </label>
              <div className="absolute bottom-2 right-3 text-[10px] text-slate-400">
                {messageLength}/{MAX_MESSAGE}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? "Copied!" : "Copy email"}
              </button>

              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                    <Sparkles className="w-3.5 h-3.5 opacity-80" />
                  </>
                )}
              </button>
            </div>

            {/* Status messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500 text-white shadow-md">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Message sent!</p>
                    <p className="text-xs opacity-80">
                      Thanks — I&apos;ll reply soon.
                    </p>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300"
                >
                  <div className="font-semibold text-sm">
                    Something went wrong. Please try again or email me directly.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}