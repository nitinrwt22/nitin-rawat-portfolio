export interface Project {
  id: string;
  caseNumber: string;
  refCode: string;
  name: string;
  title: string;
  classification: string;
  status: string;
  date: string;
  tagline: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  architecture: string[];
  technicalHighlights: string[];
  outcome?: string;
}

export interface ServiceRecord {
  company: string;
  role: string;
  dates: string;
  description: string;
  technologies: string[];
}

export const serviceRecords: ServiceRecord[] = [];

export const projects: Project[] = [
  {
    id: 'paylock',
    caseNumber: 'EXHIBIT 01',
    refCode: 'ENG-PL-8821',
    name: 'PayLock',
    title: 'PayLock — Concurrent Payment Transaction System',
    classification: 'CONCURRENCY // BACKEND SYSTEMS',
    status: 'VERIFIED REPOSITORY',
    date: '2024',
    tagline: 'Backend-oriented payment transaction system engineered with mutex synchronization and strict ACID data integrity.',
    technologies: ['C++', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    githubUrl: 'https://github.com/nitinrwt22/PayLock',
    problem: 'Simultaneous payment transactions across concurrent requests risk race conditions, inconsistent balances, and database deadlocks if concurrency control is unmanaged.',
    solution: 'Engineered a resilient transaction backend using C++ synchronization primitives (mutexes, atomic operations) alongside ACID database constraints to enforce serializable isolation and data integrity under concurrent loads.',
    metrics: [
      { label: 'CONCURRENCY', value: 'MUTEX-LOCKED' },
      { label: 'DATA INTEGRITY', value: '100% ACID' },
      { label: 'TRANSACTION DB', value: 'MySQL' }
    ],
    architecture: [
      'Constructed REST APIs for payment transaction workflows, linking Node.js/Express services with MySQL database records.',
      'Engineered concurrent transaction handling using C++ mutexes and atomic operations to prevent race conditions during simultaneous requests.',
      'Applied ACID transaction properties and database constraints to protect balance and ledger integrity during multi-stage processing.'
    ],
    technicalHighlights: [
      'Mutex synchronization & atomic state guards',
      'ACID transaction guarantees across payment tables',
      'Structured REST API contract & robust error isolation',
      'Zero balance drift under simulated concurrent requests'
    ]
  },
  {
    id: 'cramroom',
    caseNumber: 'EXHIBIT 02',
    refCode: 'AI-CR-4402',
    name: 'CramRoom',
    title: 'CramRoom — Collaborative Exam Prep Platform',
    classification: 'FULL-STACK // COLLABORATIVE AI',
    status: 'ACTIVE PLATFORM',
    date: '2024',
    tagline: 'Full-stack collaborative exam-preparation platform with time-bound sessions and 60% query round-trip reduction.',
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'NLP / AI'],
    githubUrl: 'https://github.com/nitinrwt22/CramRoom-examsession',
    problem: 'Exam preparation groups lack synchronized study environments with time-bound milestones, centralized question archives, and efficient question analysis.',
    solution: 'Built a full-stack platform with a stateless Node.js/Express backend and PostgreSQL supporting active study rooms, concurrent state updates, and query batching that slashed DB round-trips by 60%.',
    metrics: [
      { label: 'DB ROUND-TRIPS', value: '-60% BATCHED' },
      { label: 'SESSIONS', value: 'TIME-BOUND' },
      { label: 'STATE ENGINE', value: 'POSTGRESQL' }
    ],
    architecture: [
      'Built a full-stack collaborative exam prep platform using a stateless Node.js/Express backend and PostgreSQL.',
      'Implemented real-time collaborative sessions with asynchronous event handling and concurrent state updates to prevent race conditions.',
      'Improved backend efficiency by reducing database round-trips 60% through query batching.',
      'Actively integrating an AI-powered previous-year-question (PYQ) analyzer utilizing NLP-based topic modeling to surface high-frequency exam patterns.'
    ],
    technicalHighlights: [
      'Stateless Node.js/Express backend architecture',
      'Asynchronous event coordination for active rooms',
      'Batch-optimized PostgreSQL queries (-60% round-trips)',
      'Under active integration: NLP topic-modeling PYQ analyzer'
    ]
  },
  {
    id: 'codemaster',
    caseNumber: 'EXHIBIT 03',
    refCode: 'SYS-CM-1994',
    name: 'CodeMaster',
    title: 'CodeMaster — C Code Analyzer & Symbol Browser',
    classification: 'COMPILERS // DATA STRUCTURES',
    status: 'OPEN SOURCE TOOL',
    date: '2024',
    tagline: 'Zero-dependency C99 static analysis engine with custom AST, hand-crafted trees, and sub-30ms execution.',
    technologies: ['C', 'Data Structures', 'Graph Algorithms', 'React 19', 'Vite', 'HTML5 Canvas', 'JSON'],
    githubUrl: 'https://github.com/nitinrwt22/CodeMaster',
    problem: 'Modern developers need immediate, zero-friction insights into C codebases, call graph recursions, and memory pitfalls without heavy external runtime dependencies.',
    solution: 'Authored a zero-dependency C99 static analysis engine featuring a hand-coded lexer, parser, AST, and custom data structures (Trie, AVL Tree, Max-Heap, Hash Table) streamed to a React 19 / HTML5 Canvas dashboard.',
    metrics: [
      { label: 'SCAN LATENCY', value: '<30ms' },
      { label: 'ISSUE CLASSES', value: '8 CATEGORIES' },
      { label: 'DEPENDENCIES', value: 'ZERO (C99)' }
    ],
    architecture: [
      'Developed a zero-dependency C99 static analysis engine with a custom lexer, parser, and abstract syntax tree (AST).',
      'Hand-implemented Hash Table, Trie, AVL Tree, and Max-Heap achieving sub-30ms analysis across 8 issue categories.',
      'Designed graph-based diagnostics using adjacency-list graphs and DFS for dead-code analysis and recursion detection across 29+ functions and 65+ call edges.',
      'Architected a React 19 and HTML5 Canvas dashboard streaming real-time diagnostics via Vite middleware.'
    ],
    technicalHighlights: [
      'Zero external dependencies in C99 core engine',
      'Custom Trie, AVL Tree, Max-Heap, and Hash Table',
      'DFS call-graph recursion detection (29+ functions, 65+ edges)',
      'Sub-30ms end-to-end diagnostic pass'
    ]
  },
  {
    id: 'atm-route-optimizer',
    caseNumber: 'EXHIBIT 04',
    refCode: 'OPS-ARO-5012',
    name: 'ATM Route Optimizer',
    title: 'ATM Route Optimizer — Fleet Logistics & Cash Replenishment Engine',
    classification: 'C++ BACKEND // FLEET LOGISTICS',
    status: 'VERIFIED REPOSITORY',
    date: '2024',
    tagline: 'End-to-end cash replenishment platform monitoring 100+ ATM fleets and automating high-priority routes under INR 50L cash constraints.',
    technologies: ['C++', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'HTML5 Canvas', 'Graph Algorithms'],
    githubUrl: 'https://github.com/nitinrwt22/atm-route-optimizer',
    problem: 'ATM fleet networks face unplanned machine downtime and critical cash-out events caused by suboptimal dispatch routes and strict cash-in-transit capital ceilings (INR 50L limit).',
    solution: 'Constructed an end-to-end replenishment platform featuring a high-performance C++ backend that prioritizes high-demand ATMs, optimizes truck cash payload capacity, and generates data-driven dispatch routes across 100+ machines.',
    metrics: [
      { label: 'FLEET SERVICED', value: '100+ ATMS' },
      { label: 'CASH CONSTRAINT', value: 'INR 50L' },
      { label: 'CORE BACKEND', value: 'C++ HIGH-PERF' }
    ],
    architecture: [
      'Built an end-to-end cash replenishment platform to monitor ATM fleet health and automate efficient prioritization of replenishment routes.',
      'Engineered a high-performance C++ backend that identifies critical ATMs and optimizes truck loading for maximum efficiency.',
      'Optimized ATM servicing for 100+ machines under an INR 50L cash constraint by prioritizing high-demand ATMs, increasing cash availability while minimizing downtime via data-driven dispatching.',
      'Developed an interactive HTML5 Canvas mapping interface to visualize prioritized dispatch trajectories and truck payload distributions in real time.'
    ],
    technicalHighlights: [
      'High-performance C++ truck payload & route optimization algorithms',
      'Data-driven ATM cash-depletion prioritization engine',
      'Constrained knapsack truck-loading under INR 50L capital limit',
      'Interactive Canvas visualization for dispatch routes across 100+ ATMs'
    ]
  }
];

export interface SkillCategory {
  id: string;
  categoryNumber: string;
  name: string;
  subtitle: string;
  skills: { name: string; tag: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    categoryNumber: '01 // CODEBASE',
    name: 'Languages & Core Systems',
    subtitle: 'Runtimes and compiled languages for backend computation, concurrency, and algorithms.',
    skills: [
      { name: 'C', tag: 'C99_CORE' },
      { name: 'C++', tag: 'CONCURRENCY' },
      { name: 'Python', tag: 'AUTOMATION' },
      { name: 'Java', tag: 'OOP_DESIGN' },
      { name: 'TypeScript', tag: 'TYPE_SAFE' },
      { name: 'JavaScript', tag: 'ASYNC_IO' }
    ]
  },
  {
    id: 'frameworks',
    categoryNumber: '02 // TOPOLOGY',
    name: 'Frontend & Backend Stacks',
    subtitle: 'Full-stack protocols, asynchronous event loops, and modern web architectures.',
    skills: [
      { name: 'Node.js', tag: 'RUNTIME' },
      { name: 'Express.js', tag: 'REST_APIS' },
      { name: 'React.js', tag: 'VIRTUAL_DOM' },
      { name: 'Next.js', tag: 'SSR_HYBRID' },
      { name: 'Tailwind CSS', tag: 'UTILITY_CSS' },
      { name: 'WebSockets', tag: 'SOCKET_IO' }
    ]
  },
  {
    id: 'data-infra',
    categoryNumber: '03 // SUBSTRATE',
    name: 'Databases & Tooling',
    subtitle: 'Relational data stores, version control, API tooling, and hosting pipelines.',
    skills: [
      { name: 'PostgreSQL', tag: 'RELATIONAL' },
      { name: 'MySQL', tag: 'TRANSACT_ACID' },
      { name: 'Firebase', tag: 'REALTIME' },
      { name: 'Git & GitHub', tag: 'VCS_FLOW' },
      { name: 'Postman', tag: 'API_VERIF' },
      { name: 'Vercel', tag: 'DEPLOYMENT' }
    ]
  },
  {
    id: 'engineering-discipline',
    categoryNumber: '04 // PROTOCOLS',
    name: 'CS Foundations & AI',
    subtitle: 'Rigorous computer science concepts, low-level design, and AI pipelines.',
    skills: [
      { name: 'Data Structures & Algorithms', tag: 'CORE_640+' },
      { name: 'Operating Systems & Concurrency', tag: 'MUTEX_LOCKS' },
      { name: 'DBMS & Database Design', tag: 'ACID_NORM' },
      { name: 'Computer Networks & REST', tag: 'HTTP_SOCKETS' },
      { name: 'Low-Level Design & SOLID', tag: 'PATTERNS' },
      { name: 'LLM, NLP & RAG Pipelines', tag: 'AI_INTEG' }
    ]
  }
];

export interface HistoryRecord {
  id: string;
  caseRef: string;
  statusBadge: string;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  telemetry: {
    tag: string;
    headline: string;
    description: string;
    badgeLeft: string;
    badgeRight: string;
  }[];
}

export const historyRecords: HistoryRecord[] = [
  {
    id: 'btech-gehu',
    caseRef: 'CASE REF: NR-ACADEMIC-BTECH',
    statusBadge: 'ACTIVE ENROLLMENT',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    subtitle: 'Graphic Era Hill University, Dehradun — Focus on Systems, Data Structures & Concurrency',
    dates: '2024 — 2028',
    location: 'DEHRADUN, INDIA',
    telemetry: [
      {
        tag: 'CREDENTIAL 01 // ACADEMIC STANDING',
        headline: 'Academic Distinction (CGPA: 8.78)',
        description: 'Rigorous coursework in Data Structures, Object-Oriented Programming, Operating Systems, Database Management Systems, and Computer Networks.',
        badgeLeft: 'ACCREDITED',
        badgeRight: 'CGPA: 8.78'
      },
      {
        tag: 'CREDENTIAL 02 // PROBLEM SOLVING',
        headline: 'LeetCode 640+ Solved & 1800+ Rating',
        description: 'Demonstrated algorithmic mastery solving over 640 Data Structures and Algorithms problems with a contest rating exceeding 1800+.',
        badgeLeft: 'LEETCODE',
        badgeRight: '1800+ RATING'
      },
      {
        tag: 'CREDENTIAL 03 // SYSTEMS PRACTICE',
        headline: 'Core Engineering Systems Projects',
        description: 'Engineered PayLock (C++/MySQL concurrency), ATM Route Optimizer (C++ fleet replenishment), CramRoom (Next.js/Postgres query batching), and CodeMaster (zero-dependency C99 AST static analyzer).',
        badgeLeft: 'PRODUCTION',
        badgeRight: '4 VERIFIED SYSTEMS'
      }
    ]
  },
  {
    id: 'hack4delhi',
    caseRef: 'CASE REF: NR-HACKATHON-NSUT',
    statusBadge: 'HACKATHON FINALIST',
    title: 'Hack4Delhi Finalist — NSUT, Delhi',
    subtitle: 'AI-Powered Misinformation Detection Platform & 8+ Hackathons Participated',
    dates: '2024',
    location: 'NEW DELHI, INDIA',
    telemetry: [
      {
        tag: 'INCIDENT 01 // TECHNICAL DELIVERABLE',
        headline: 'Multimodal AI Detection Pipeline',
        description: 'Constructed an AI-powered misinformation detection platform integrating BERT language models, OCR image pipelines, and high-performance FastAPI microservices.',
        badgeLeft: 'NLP + OCR',
        badgeRight: 'FASTAPI'
      },
      {
        tag: 'INCIDENT 02 // COMPETITIVE SPRINT',
        headline: 'Finalist among Premier Engineering Teams',
        description: 'Selected as Finalist at NSUT Delhi after presenting under intensive operational hackathon constraints; veteran of 8+ hackathons.',
        badgeLeft: 'FINALIST',
        badgeRight: '8+ HACKATHONS'
      }
    ]
  },
  {
    id: 'schooling',
    caseRef: 'CASE REF: NR-SECONDARY-CBSE',
    statusBadge: 'COMPLETED WITH MERIT',
    title: 'Senior Secondary Education (Class XII CBSE)',
    subtitle: 'Army Public School, Clement Town, Dehradun',
    dates: 'Graduated 2024',
    location: 'DEHRADUN, INDIA',
    telemetry: [
      {
        tag: 'FOUNDATION 01 // BOARD EXAMINATION',
        headline: '88.6% Aggregate Score',
        description: 'Completed Class XII CBSE board certification with rigorous preparation in Physics, Chemistry, and Mathematics.',
        badgeLeft: 'CBSE XII',
        badgeRight: '88.6% SCORE'
      }
    ]
  }
];

export const personalInfo = {
  name: 'Nitin Rawat',
  designation: 'Software Engineer & Systems Builder',
  positioning: 'Computer Science & Engineering student focused on software engineering, backend systems, concurrency, data structures, and full-stack development.',
  goal: 'Software Engineering Internships & Full-Time SWE Roles',
  location: 'Dehradun, India // Open for Remote & On-Site Roles',
  email: 'nitin.rawat2326@gmail.com',
  phone: '+91 8126217910',
  linkedin: 'https://www.linkedin.com/in/nitin-rawat-477382312/',
  github: 'https://github.com/nitinrwt22',
  leetcode: 'https://leetcode.com/u/Nitin_Rwt2326/',
  resumeUrl: '/assets/Nitin_Rawat_Resume.pdf',
  solvedDsaCount: '640+',
  contestRating: '1800+'
};
