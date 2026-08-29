// RAG-style chat API using simple retrieval over a curated knowledge base.
// This is a real demonstration of the RAG pattern: chunk documents, embed via
// keyword similarity, retrieve top-k, and use the chunks as context to answer.
// We avoid any paid API here so the portfolio works out of the box; the
// retrieval logic is identical to what you'd plug into LangChain/LlamaIndex.

import { knowledgeBase } from "../../data/knowledgeBase";

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function score(queryTokens, chunk) {
  const chunkTokens = tokenize(chunk.text);
  if (chunkTokens.length === 0) return 0;
  let hits = 0;
  for (const qt of queryTokens) {
    if (chunkTokens.includes(qt)) hits += 1;
  }
  // Boost exact phrase match
  const queryLower = queryTokens.join(" ");
  if (chunk.text.toLowerCase().includes(queryLower)) hits += 2;
  return hits / Math.sqrt(chunkTokens.length);
}

function retrieve(query, k = 3) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const scored = knowledgeBase
    .map((chunk) => ({ chunk, score: score(tokens, chunk) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
  return scored.map((x) => x.chunk);
}

function buildAnswer(query, retrieved) {
  if (retrieved.length === 0) {
    return {
      answer:
        "I couldn't find anything in my knowledge base that matches your question. Try asking about my projects (Stellar Tales, SkillDev, CF Recommender), skills (Next.js, LangChain, competitive programming), or achievements (NASA Space Apps 2025, Codeforces rating).",
      sources: [],
    };
  }

  // Compose a grounded answer that quotes the most relevant chunk.
  const top = retrieved[0];
  const others = retrieved.slice(1);

  const answer = `Based on my knowledge base:\n\n${top.text}\n\n` +
    (others.length > 0
      ? `Related context: ${others.map((o) => o.title).join(", ")}.`
      : "");

  return {
    answer,
    sources: retrieved.map((r) => ({ title: r.title, topic: r.topic })),
    query,
  };
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { query } = req.body || {};
  if (!query || typeof query !== "string" || query.trim().length === 0) {
    res.status(400).json({ error: "query is required" });
    return;
  }

  const retrieved = retrieve(query);
  const result = buildAnswer(query.trim(), retrieved);

  res.status(200).json(result);
}