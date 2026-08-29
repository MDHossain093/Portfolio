import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Send, Bot, User, Loader2, Brain } from "lucide-react";

function RagDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm a RAG (Retrieval-Augmented Generation) demo trained on a small knowledge base about MD Hossin's portfolio. Try asking about his projects, skills, achievements, or competitive programming background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestedQuestions = [
    "What is Stellar Tales?",
    "Tell me about SkillDev",
    "What's his Codeforces rating?",
    "What did he win at NASA?",
  ];

  async function send(text) {
    const question = (text ?? input).trim();
    if (!question || loading) return;

    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
        },
      ]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[480px]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-800/30">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            RAG Knowledge Base
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Retrieval-Augmented Generation demo
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-1.5">
                  {msg.sources.map((s, j) => (
                    <span
                      key={j}
                      className="inline-block px-2 py-0.5 rounded-full text-[10px] bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <Bot className="w-4 h-4" />
            </div>
            <div className="rounded-2xl px-4 py-3 bg-slate-100 dark:bg-slate-800">
              <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
            </div>
          </div>
        )}
      </div>

      {/* Suggested */}
      {messages.length <= 1 && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100/70 dark:border-blue-800/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about projects, skills, achievements..."
          disabled={loading}
          className="flex-1 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button
          onClick={() => send()}
          disabled={loading || !input.trim()}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 disabled:opacity-40 transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function RecommenderDemo() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const topicPresets = [
    { label: "Dynamic Programming", value: "dp" },
    { label: "Graphs", value: "graph" },
    { label: "Greedy", value: "greedy" },
    { label: "Number Theory", value: "math" },
    { label: "Binary Search", value: "binary" },
    { label: "Segment Tree", value: "segment" },
  ];

  async function fetchRecommendation(value) {
    const t = (value ?? topic).trim();
    if (!t || loading) return;
    setTopic(typeof value === "string" && value.length <= 5 ? value : t);
    setLoading(true);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: t }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ message: "Failed to fetch. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[480px]">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            CP Study Path Generator
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Get a structured learning path for any topic
          </p>
        </div>
      </div>

      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
          What do you want to practice?
        </label>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchRecommendation()}
            placeholder="e.g. dynamic programming, graph, greedy..."
            disabled={loading}
            className="flex-1 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
          />
          <button
            onClick={() => fetchRecommendation()}
            disabled={loading || !topic.trim()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:opacity-90 disabled:opacity-40 transition"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {topicPresets.map((p) => (
            <button
              key={p.value}
              onClick={() => fetchRecommendation(p.value)}
              disabled={loading}
              className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100/70 dark:border-emerald-800/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {!result && (
          <div className="h-full flex items-center justify-center text-sm text-slate-500 dark:text-slate-400 text-center">
            Try a topic — you&apos;ll get prerequisites, subtopics, and
            suggested problems to start with.
          </div>
        )}

        {result && result.message && (
          <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
            {result.message}
          </div>
        )}

        {result && result.detected && (
          <div className="space-y-4 text-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Topic Detected
              </span>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50 capitalize">
                {result.detected}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {result.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100/70 dark:border-emerald-800/40"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Prerequisites
              </span>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {result.prerequisites.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Subtopics to master
              </span>
              <ol className="mt-2 space-y-1.5">
                {result.subtopics.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Suggested starting problems
              </span>
              <ul className="mt-2 space-y-1">
                {result.suggestedProblems.map((p) => (
                  <li
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic">
                {result.note}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AIDemos() {
  return (
    <section
      id="ai-demos"
      className="py-24 px-6 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            AI Demos
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Try the Models Yourself
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Two live demos built with the same patterns used in production
            LangChain and RAG pipelines. No API keys required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <RagDemo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <RecommenderDemo />
          </motion.div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Both demos run on Next.js API routes using keyword-similarity
          retrieval over a curated knowledge base. Swap in embeddings and a
          vector DB for production.
        </p>
      </div>
    </section>
  );
}