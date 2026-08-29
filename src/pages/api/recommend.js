// CF problem recommender — takes a topic the user wants to practice and returns
// a learning path: foundational concepts, related Codeforces tags, and a
// suggested progression. In a production system this would call the
// Codeforces API and rank unsolved problems by difficulty.

const topicMap = {
  dp: {
    keywords: ["dp", "dynamic programming", "memoization"],
    tags: ["dp"],
    prerequisites: ["recursion", "arrays"],
    subtopics: [
      "1D DP (Fibonacci, Climbing Stairs)",
      "Knapsack (0/1, unbounded)",
      "LCS / LIS",
      "Bitmask DP",
      "Digit DP",
      "DP on trees",
    ],
  },
  graph: {
    keywords: ["graph", "bfs", "dfs", "tree"],
    tags: ["graphs", "trees"],
    prerequisites: ["recursion", "queues", "stacks"],
    subtopics: [
      "BFS / DFS traversal",
      "Connected components",
      "Topological sort",
      "Shortest paths (Dijkstra, Floyd-Warshall, Bellman-Ford)",
      "Minimum spanning tree (Kruskal, Prim)",
      "Union-Find / DSU",
    ],
  },
  greedy: {
    keywords: ["greedy", "interval"],
    tags: ["greedy"],
    prerequisites: ["sorting"],
    subtopics: [
      "Sorting-based greedy",
      "Activity selection / interval scheduling",
      "Exchange arguments",
      "Huffman coding",
    ],
  },
  math: {
    keywords: ["math", "number theory", "combinatorics"],
    tags: ["math"],
    prerequisites: ["modular arithmetic"],
    subtopics: [
      "Modular exponentiation",
      "Modular inverse / Fermat",
      "Sieve of Eratosthenes",
      "Combinatorics (nCr, inclusion-exclusion)",
      "Prime factorization",
    ],
  },
  string: {
    keywords: ["string", "trie", "kmp", "z-algorithm"],
    tags: ["strings"],
    prerequisites: ["arrays", "hashing"],
    subtopics: [
      "Hashing / rolling hash",
      "KMP pattern matching",
      "Z-algorithm",
      "Trie",
      "Suffix array / automaton",
    ],
  },
  segment: {
    keywords: ["segment tree", "fenwick", "binary indexed"],
    tags: ["data structures"],
    prerequisites: ["arrays", "recursion"],
    subtopics: [
      "Fenwick tree (Binary Indexed Tree)",
      "Segment tree (range sum, range max)",
      "Lazy propagation",
      "Sparse table (RMQ)",
    ],
  },
  binary: {
    keywords: ["binary search", "two pointers"],
    tags: ["binary search"],
    prerequisites: ["arrays", "sorting"],
    subtopics: [
      "Standard binary search",
      "Search on answer",
      "Two pointers technique",
      "Binary search on prefix/suffix",
    ],
  },
};

function detectTopic(query) {
  const q = query.toLowerCase();
  for (const [key, info] of Object.entries(topicMap)) {
    for (const kw of info.keywords) {
      if (q.includes(kw)) return { key, info };
    }
  }
  return null;
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { topic } = req.body || {};
  if (!topic || typeof topic !== "string" || topic.trim().length === 0) {
    res.status(400).json({ error: "topic is required" });
    return;
  }

  const detected = detectTopic(topic);
  if (!detected) {
    res.status(200).json({
      topic: topic.trim(),
      detected: null,
      message:
        "I can build a study path for these competitive programming topics: DP, graph, greedy, math/number theory, strings, segment tree / Fenwick, or binary search / two pointers.",
    });
    return;
  }

  const { key, info } = detected;

  // Recommend 5 Codeforces problem slugs the user can search on the platform.
  // These are well-known entry points per topic; in production this would
  // query the Codeforces API for unsolved problems in that tag.
  const problemsByTopic = {
    dp: ["282B (Painting Eggs)", "489B (BerSU Ball)", "1354C2 (Square Pursuit)", "1530C (Pursuit)", "1324E (Sleeping Schedule)"],
    graph: ["276B (Little Girl and Queries)", "520B (Two Buttons)", "1197D (Yet Another Subarray Problem)", "1454E (Solo mid)", "1592D (Hemose in ICPC ?)"],
    greedy: ["160A (Twins)", "1037B (Reachable Cities)", "1485B (Replace and Keep Sorted)", "1537C (Challenging Cliffs)", "1671B (Convex Points?)"],
    math: ["1A (Theatre Square)", "282A (Bit++)", "1281B (Blocks)", "1554A (Cherry)", "1542B (Plus and Multiply)"],
    string: ["1B (Spreadsheet)", "1108B (Dividing Number)", "1582C (Meme Problem)", "1462B (Last Year's Substring)", "1616B (Mirror in the String)"],
    segment: ["339D (Xenia and Bit Operations)", "61E (Enemy is weak)", "1547F (Array Stability)", "1638E (Colorful Operations)", "1691E (Number Groups)"],
    binary: ["706B (Interesting drink)", "1011B (Planning The Expedition)", "1195C (Basketball Exercise)", "1200C (Playlist)", "1660C (Get an Even String)"],
  };

  res.status(200).json({
    topic: topic.trim(),
    detected: key,
    tags: info.tags,
    prerequisites: info.prerequisites,
    subtopics: info.subtopics,
    suggestedProblems: problemsByTopic[key] || [],
    note:
      "These are well-known starting points — for personalized problem recommendations, see the CF Recommender project in the Projects section.",
  });
}