import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    const response = await fetch("https://formspree.io/f/mkglvegq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
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
    setTimeout(() => setStatus(""), 4000);
  }
};


  const contactInfo = [
    { icon: "📧", label: "Email", value: "mdhossin093@gmail.com", link: "mailto:mdhossin093@gmail.com" },
    { icon: "📱", label: "Phone", value: "+8801636348262", link: "tel:+8801636348262" },
    { icon: "📍", label: "Location", value: "Chittagong, Bangladesh" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT PANEL FIXED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 relative overflow-hidden shadow-xl bg-white text-slate-900 border border-slate-200 dark:bg-slate-800/50 dark:text-slate-50 dark:border-slate-700"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Let’s talk about your next project
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            Use the form or contact me directly — open to freelance, remote work, or collaborations.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-slate-700/40 dark:border-slate-700/60"
              >
                <div className="text-2xl">{info.icon}</div>
                <div>
                  <p className="text-[11px] uppercase text-slate-600 dark:text-slate-400">
                    {info.label}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="font-medium text-slate-900 dark:text-slate-50"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FORM SECTION */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-8"
        >
          <div className="space-y-5">
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2.5 rounded-xl bg-slate-100 border border-slate-300 dark:bg-slate-700/60 dark:border-slate-600 text-sm focus:ring-2 focus:ring-blue-500 transition"
                />
                <label
                  className="absolute left-4 top-3 text-sm text-slate-600 dark:text-slate-400 pointer-events-none transition-all peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2.5 rounded-xl bg-slate-100 border border-slate-300 dark:bg-slate-900 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 transition"
              />
              <label
                className="absolute left-4 top-3 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:top-2 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-600 dark:text-green-400 text-sm">
                ✓ Message sent successfully!
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
