// Curated knowledge base used by the RAG demo in the AI Demos section.
// Each chunk is a short document that gets retrieved by keyword similarity.
// In a production RAG system, these would be embedded with a real embedding
// model and stored in a vector database (Pinecone, Weaviate, Chroma, etc.).

export const knowledgeBase = [
  {
    title: "About MD Hossin (Fardin)",
    topic: "bio",
    text: "MD Hossin, also known as Fardin, is a Computer Science undergraduate at Comilla University in Bangladesh, graduating in July 2026. He is a full-stack developer focused on the MERN stack and Next.js, with strong competitive programming skills (1200+ Codeforces rating, 1000+ problems solved).",
  },
  {
    title: "Stellar Tales — NASA Space Apps 2025",
    topic: "projects",
    text: "Stellar Tales is an interactive progressive web app (PWA) that teaches children about space weather concepts using real-time NASA APIs. It was built for the NASA International Space Apps Challenge 2025, where the team won Regional Champion and advanced to Global Finalist. Built with React, PWA, NASA APIs, and Chart.js for data visualization.",
  },
  {
    title: "SkillDev — AI-powered developer platform",
    topic: "projects",
    text: "SkillDev is a full-stack developer portfolio and collaboration platform featuring portfolio management, project and skill tracking, AI-powered career assistance, and developer discovery. The tech stack includes Next.js, Tailwind CSS, Express.js, PostgreSQL, Prisma ORM, JWT, Gemini AI, and LangChain for AI features.",
  },
  {
    title: "CF Recommender",
    topic: "projects",
    text: "CF Recommender is a research-based competitive programming recommender system built with Python, Flask, React.js, Scikit-learn, and Pandas. It uses Difficulty-Aware Truncated SVD for personalized Codeforces problem recommendations, tag-level weakness analysis, cold-start recommendations, and automated team formation.",
  },
  {
    title: "CashNex — Expense and Loan Tracker",
    topic: "projects",
    text: "CashNex is a Progressive Web Application for tracking personal expenses and loans with offline-first and mobile-friendly design. Built with Next.js, Tailwind CSS, and PWA technologies.",
  },
  {
    title: "Lost and Found Portal",
    topic: "projects",
    text: "The Lost and Found Portal is a campus-focused web application that lets users report, search, and recover lost items through image-based listings. Built with React.js, Node.js, Express.js, and MongoDB with secure user communication features.",
  },
  {
    title: "Frontend skills",
    topic: "skills",
    text: "Frontend stack: Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Vite. Builds responsive, accessible interfaces with modern component patterns and animations.",
  },
  {
    title: "Backend and database skills",
    topic: "skills",
    text: "Backend and database: Node.js, Express.js, REST APIs, MongoDB, MySQL, and PostgreSQL. Uses Prisma ORM for type-safe data access. Handles authentication with JWT and Bcrypt.",
  },
  {
    title: "AI and modern tech stack",
    topic: "skills",
    text: "AI and modern tech: LangChain, RAG (Retrieval Augmented Generation), Vector Databases, Gemini AI integration, and Scikit-learn for machine learning. Built the SkillDev AI career assistant and the CF Recommender ML pipeline.",
  },
  {
    title: "Competitive programming",
    topic: "competitive",
    text: "Competitive programming: 1200+ rating on Codeforces (Pupil), 1000+ problems solved across online judges. Strong in data structures and algorithms. Languages used: C++, Python, and JavaScript.",
  },
  {
    title: "NASA Space Apps Challenge 2025",
    topic: "achievements",
    text: "At the NASA International Space Apps Challenge 2025, MD Hossin and the Stellar Tales team won Regional Champion and advanced to Global Finalist, competing among the best teams worldwide.",
  },
  {
    title: "Competitions and contests",
    topic: "competitions",
    text: "Competed in ICPC Regional (2023, 2024), IUPC at Premier University (2024), IUPC at Comilla University (2023), IIUC Hackathon (2025), Solvio Hackathon (2025), and the MERN Stack Competition (2024).",
  },
  {
    title: "Leadership and extracurricular",
    topic: "leadership",
    text: "Served as Senior Vice President of Chattogram Welfare Student Association at CoU (2024-2025), Executive Member of CSE Society (2024-2025), Lead and Mentor of the National School Competitive Programming Contest (2025), and Lead of Publicity at Comilla University IT Society (2023-2024).",
  },
  {
    title: "Education at Comilla University",
    topic: "education",
    text: "B.Sc. in Computer Science and Engineering at Comilla University, Cumilla, Bangladesh. Graduating in July 2026. Strong academic standing through 7th semester.",
  },
];