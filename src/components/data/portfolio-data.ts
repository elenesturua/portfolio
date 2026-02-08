// Chess pieces for navigation
export const CHESS_PIECES = {
  rook: "♜",
  knight: "♞",
  bishop: "♝",
  queen: "♛",
  king: "♚",
  pawn: "♟",
} as const;

// Navigation squares configuration
export interface NavSquare {
  id: string;
  piece: string;
  label: string;
  notation: string;
  panelId: string;
}

export const NAV_SQUARES: NavSquare[] = [
  { id: "about", piece: CHESS_PIECES.bishop, label: "About Me", notation: "a1", panelId: "about" },
  { id: "experience", piece: CHESS_PIECES.rook, label: "Experience", notation: "b1", panelId: "experience" },
  { id: "projects", piece: CHESS_PIECES.knight, label: "Projects", notation: "c1", panelId: "projects" },
  { id: "skills", piece: CHESS_PIECES.bishop, label: "Skills", notation: "d1", panelId: "skills" },
  { id: "education", piece: CHESS_PIECES.queen, label: "Education", notation: "a2", panelId: "education" },
  { id: "research", piece: CHESS_PIECES.pawn, label: "Research", notation: "b2", panelId: "research" },
  { id: "hackathons", piece: CHESS_PIECES.king, label: "Hackathons", notation: "c2", panelId: "hackathons" },
  { id: "contact", piece: CHESS_PIECES.rook, label: "Contact", notation: "d2", panelId: "contact" },
];

// Move notation for history bar
export const MOVE_NOTATIONS: Record<string, string> = {
  about: "1. ♝a1 — About Me",
  experience: "2. ♜b1 — Experience",
  projects: "3. ♞c1 — Projects",
  skills: "4. ♝d1 — Skills",
  education: "5. ♛a2 — Education",
  research: "6. ♟b2 — Research",
  hackathons: "7. ♚c2 — Hackathons",
  contact: "8. ♜d2 — Contact",
};

// Experience data
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  description: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Software Engineering Intern",
    company: "Busy Family AI — Pre-Seed Startup",
    location: "Remote",
    dateRange: "Dec 2025 → Present",
    description: [
      "Architected and deployed a scalable session management backend using Kotlin, AWS Lambda, and DynamoDB, implementing token-based authentication to secure 100+ daily sessions.",
      "Integrated ElevenLabs audio voiceover capabilities into the platform, enabling AI-generated spoken daily briefs and recipe walkthroughs for a hands-free user experience.",
      "Identified and resolved a critical session reentry UX issue where conversation context appeared lost despite Redis-backed state persistence — redesigned the frontend recovery flow to restore seamless session continuity for 50+ daily active users.",
      "Optimized data synchronization by integrating Google Calendar webhooks with vector embeddings, reducing sync latency from hours to <100ms to enable real-time semantic search capabilities.",
    ],
  },
  {
    id: "exp-2",
    role: "DASIL Mentor (Data Analysis and Social Inquiry Lab)",
    company: "Grinnell College",
    location: "Grinnell, IA",
    dateRange: "Aug 2025 → Present",
    description: [
      "Mentor students across disciplines in using R, Stata, and SQL for data wrangling, visualization, and statistical modeling, helping them translate raw data into actionable insights.",
      "Collaborate with faculty and peers on applied research projects involving public health, political science, and economics datasets.",
      "Translated a full semester of Stata-based econometrics problem sets into R, improving accessibility and reproducibility for R-based workflows.",
    ],
  },
  {
    id: "exp-3",
    role: "Language Tutor — Georgian",
    company: "Grinnell's Center for Languages and Intercultural Communication",
    location: "Grinnell, IA",
    dateRange: "Jan 2026 → Present",
    description: [
      "Designed and teaching an A1-level Georgian language course with structured curriculum covering the 33-letter script, vocabulary, and cultural context.",
      "Built a companion web platform (KartvelLingo) with interactive quizzes and gamified learning flows to supplement in-class instruction.",
      "Lead two weekly discussion-based classes emphasizing active language use, pronunciation, and conversational practice.",
    ],
  },
  {
    id: "exp-4",
    role: "Course Mentor — Object-Oriented & Imperative Programming (Java, C)",
    company: "CS Department, Grinnell College",
    location: "Grinnell, IA",
    dateRange: "Aug 2023 → May 2024",
    description: [
      "Developed custom problem sets for 25+ students in Java and C through weekly 1:1 debugging sessions, improving average assignment scores by 15% through targeted review of data structures and memory management.",
      "Designed and led weekly group sessions for 15+ students, improving midterm exam performance by 20% on algorithm design questions.",
    ],
  },
];

// Projects data
export interface Project {
  id: string;
  name: string;
  piece: string;
  tech: string[];
  description: string;
  badge?: string;
  links?: { label: string; url: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "BubbledIn",
    piece: CHESS_PIECES.knight,
    tech: ["React", "NextJS", "WebRTC", "Firebase", "Gemini AI"],
    description:
      "Architected a WebRTC system serving 300+ concurrent users with spatial audio, achieving <100ms latency for real-time spatial audio interactions. Integrated Gemini AI speech-to-text generating searchable summaries that reduced post-meeting review time by 60%.",
    links: [{ label: "Live Demo", url: "https://bubbled-in.vercel.app" }],
  },
  {
    id: "proj-2",
    name: "KartvelLingo",
    piece: CHESS_PIECES.queen,
    tech: ["React", "TypeScript", "Vite"],
    description:
      "Designed and developed an interactive web application to teach the Georgian alphabet, vocabulary, and history. Built reusable, modular components to support scalable lesson expansion and gamified quizzes for improved engagement. Features 33-letter script introduction, guided learning flows, and progress tracking.",
    links: [{ label: "Live Demo", url: "https://kartvellingovercel.vercel.app" }],
  },
  {
    id: "proj-3",
    name: "What's In Town AI",
    piece: CHESS_PIECES.bishop,
    tech: ["TypeScript", "React", "Gemini AI", "Google Maps API", "Firebase"],
    description:
      "Built a full-stack web application that generates optimized itineraries using Gemini AI and Google Maps API. Filters 1,000+ venues by location, age, group size, and budget. Achieved a 75% reduction in planning time. Added interactive features such as itinerary editing and plan sharing via email.",
    links: [{ label: "Live Demo", url: "https://whats-in-town.vercel.app" }],
  },
  {
    id: "proj-4",
    name: "Clearly",
    piece: CHESS_PIECES.rook,
    tech: ["Django", "OpenCV", "Gemini AI", "Google Maps API"],
    description:
      "Built Django app with OpenCV achieving 90-95% accuracy in pH strip analysis, reducing per-test cost from $5 to $0.10 while processing 200+ pilot images. Architected end-to-end pipeline integrating image processing, Gemini AI inference, and Google Maps API for location-based water safety recommendations.",
    badge: "🏆 HackMIT 2025 Winner",
    links: [{ label: "GitHub", url: "https://github.com/nsdti/Clearly" }],
  },
  {
    id: "proj-5",
    name: "CheckMaze",
    piece: CHESS_PIECES.king,
    tech: ["C#", "Unity"],
    description:
      "A 3D game created in Unity. Chess-based game presenting progressively challenging levels, requiring players to use a limited set of chess pieces and strategic pathfinding to reach an endpoint.",
    links: [{ label: "Play", url: "https://3rooks.itch.io/checkmaze" }],
  },
  {
    id: "proj-6",
    name: "TermiMix",
    piece: CHESS_PIECES.pawn,
    tech: ["C", "POSIX Threads", "TCP Sockets", "SDL2"],
    description:
      "Engineered multi-threaded music streaming server in C handling 10+ concurrent clients with mutex-based synchronization, achieving zero race conditions across 1,000+ stress test sessions. Designed thread-safe producer-consumer pipeline, maintaining <5ms buffer latency under high contention.",
    links: [{ label: "GitHub", url: "https://github.com/elenesturua/threadLibrary" }],
  },
  {
    id: "proj-7",
    name: "Only Go Frogward",
    piece: "🐸",
    tech: ["C#", "Unity"],
    description:
      "Unity-based 2D platformer where players guide a frog through five increasingly challenging levels. Each level introduces unique obstacles, requiring strategic jumps on lily pads to reach a portal. A fun test of timing and skill.",
    links: [{ label: "Play", url: "https://elenesturua.itch.io/only-go-frogward" }],
  },
];

// Skills data
export const SKILLS = {
  languages: ["Java", "C", "JS/TS", "Python", "Kotlin", "C#", "SQL", "R"],
  frameworks: ["React", "Next", "Node", "Django", "Unity", "OpenCV", "Angular", "AWS"],
  tools: ["Redis", "Linux", "Git", "Azure", "Firebase", "Docker", "HTML", "CSS"],
  data: ["Stata", "Scheme", "TCP", "WebRTC", "DynamoDB", "Lambda", "Gemini", "RStudio"],
} as const;

export const SKILLS_FLAT = [
  ...SKILLS.languages,
  ...SKILLS.frameworks,
  ...SKILLS.tools,
  ...SKILLS.data,
];

export interface HumanLanguage {
  name: string;
  level: string;
  flag: string;
}

export const HUMAN_LANGUAGES: HumanLanguage[] = [
  { name: "Georgian", level: "Native", flag: "🇬🇪" },
  { name: "English", level: "Fluent", flag: "🇺🇸" },
  { name: "Russian", level: "Fluent", flag: "🇷🇺" },
  { name: "Spanish", level: "Intermediate", flag: "🇪🇸" },
  { name: "Greek", level: "Elementary", flag: "🇬🇷" },
];

// Education data
export interface Education {
  institution: string;
  degree: string;
  minor: string;
  expectedDate: string;
  location: string;
  coursework: string[];
}

export const EDUCATION: Education = {
  institution: "Grinnell College",
  degree: "Bachelor of Arts in Computer Science and Economics",
  minor: "Statistics",
  expectedDate: "Expected May 2026",
  location: "Grinnell, IA",
  coursework: [
    "Operating Systems and Parallel Algorithms (C)",
    "Analysis of Algorithms (C++, Python)",
    "Software Design & Development",
    "Object-Oriented Programming (Java)",
    "Artificial Intelligence (Python)",
    "Data Science (R, SQL)",
    "Automata Formal Languages & Computational Complexity",
    "Elementary Number Theory",
    "Game Development (C#)",
  ],
};

// Research data
export interface Research {
  id: string;
  role: string;
  institution: string;
  dateRange: string;
  description: string[];
  isPublication?: boolean;
  publicationVenue?: string;
  publicationLink?: string;
}

export const RESEARCH: Research[] = [
  {
    id: "research-1",
    role: "Software Engineering Undergraduate Researcher",
    institution: "CS Department, Grinnell College",
    dateRange: "May 2025 → Dec 2025",
    description: [
      "Designed and served as lead author on a system for functional programming (Scheme) that automates grading via AST-based analysis, reducing instructor overhead from hours to minutes.",
      "Built Functional Programming AST (Abstract Syntax Tree) integration enabling automated algorithmic problem generation and solution validation, reducing instructor grading workload by 90%.",
      "Implemented backend analytics pipeline tracking granular user interactions and learning outcomes, powering data-driven instructor dashboards for performance insights.",
    ],
  },
  {
    id: "research-2",
    role: "Undergraduate Researcher — Inclusion of Minorities in CS",
    institution: "CS Department, Grinnell College",
    dateRange: "May 2024 → Aug 2024",
    description: [
      "Conducted mixed-methods research on barriers to minority participation in CS, analyzing survey data and conducting qualitative interviews with 10–15 respondents to identify key retention factors.",
      "Co-authored research paper on CS social well-being submitted to academic venues, contributing literature review and quantitative analysis sections.",
      "Designed mobile application prototype to improve social belonging among underrepresented CS students, translating research findings into actionable intervention tool.",
    ],
  },
  {
    id: "publication-1",
    role: "An Innovative Approach to Parsons Problems for Teaching and Learning Functional Programming",
    institution: "SIGCSE TS 2026",
    dateRange: "Lead co-author",
    description: [
      "Lead co-author on accepted paper exploring nested-block Parsons problems for functional programming instruction. To be presented at SIGCSE TS 2026.",
    ],
    isPublication: true,
    publicationVenue: "SIGCSE TS 2026",
    publicationLink: "https://sigcse2026.sigcse.org/details/sigcse-ts-2026-Papers/125/An-Innovative-Approach-to-Parsons-Problems-for-Teaching-and-Learning-Functional-Progr",
  },
];

// Hackathons data
export interface Hackathon {
  id: string;
  name: string;
  year: string;
  icon: string;
  result: string;
  description: string;
  isWinner?: boolean;
}

export const HACKATHONS: Hackathon[] = [
  {
    id: "hack-1",
    name: "HackMIT 2025",
    year: "2025",
    icon: "🏆",
    result: "Winner",
    description: "Built Clearly — a Django + OpenCV web app that analyzes water quality from test strip photos using AI, delivering professional-grade results at a fraction of the cost.",
    isWinner: true,
  },
  {
    id: "hack-2",
    name: "HackHarvard 2025",
    year: "2025",
    icon: "🎯",
    result: "Participant",
    description: "Built BubbledIn — a real-time spatial audio collaboration platform using WebRTC, Firebase, and Gemini AI for immersive virtual networking.",
  },
  {
    id: "hack-3",
    name: "Google Maps Hackathon",
    year: "2025",
    icon: "🗺️",
    result: "Participant",
    description: "Built What's In Town AI — an AI-powered event planning tool with Maps integration.",
  },
  {
    id: "hack-4",
    name: "Hack WashU 2025",
    year: "2025",
    icon: "⚡",
    result: "Participant",
    description: "Built a co-availability scheduling AI personal assistant — an integrated meeting planner app that intelligently coordinates group schedules.",
  },
];

// About data
export const ABOUT = {
  bio: `I'm a senior at Grinnell College studying Computer Science and Economics with a minor in Statistics. Originally from Georgia 🇬🇪, I'm passionate about building things that make people's lives easier — whether that's AI-powered assistants for busy families, educational tools that help students learn to code, or games that make you think strategically.

I'm currently looking for entry-level software engineering positions — backend, frontend, or full-stack. When I'm not coding, you'll find me playing volleyball or pickleball, cooking a lot of peculiar recipes (one might say), playing chess (I know, you could not guess…), or trying to finish every book Murakami wrote.`,
  community: [
    "Member — Computer Science Education Policy Committee (SEPC)",
    "Member — Rewriting The Code (RTC)",
  ],
};

// Contact data
export const CONTACT = {
  email: "sturuael@grinnell.edu",
  linkedin: "https://linkedin.com/in/elenesturua",
  github: "https://github.com/elenesturua",
};

// Floating pieces for hero background
export const FLOATING_PIECES = [
  { piece: "♞", style: { top: "10%", left: "5%" }, delay: "0s" },
  { piece: "♝", style: { top: "30%", right: "10%" }, delay: "-5s", size: "3rem" },
  { piece: "♜", style: { bottom: "20%", left: "15%" }, delay: "-10s" },
  { piece: "♛", style: { top: "60%", right: "25%" }, delay: "-3s", size: "2.5rem" },
  { piece: "♟", style: { top: "15%", left: "60%" }, delay: "-8s", size: "2rem" },
  { piece: "♚", style: { bottom: "30%", right: "5%" }, delay: "-12s" },
];
