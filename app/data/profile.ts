export const profile = {
  name: "Damien Christian",
  badge: "Front-end engineer + Applied AI",
  headline: "Front-end engineer bridging product delivery and applied AI.",
  summary:
    "Front-end engineer shipping responsive, accessible web and cross-platform apps with React, React Native, and TypeScript. Comfortable across the stack with Node.js, Express, and MongoDB while building design systems, PWAs, and performance-first UX. Trained in AI and computer vision and excited to merge product engineering with applied AI.",
  location: "Arlington Heights, IL",
  email: "damienchristian987@gmail.com",
  linkedin: "https://www.linkedin.com/in/damienchristian",
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    name: "Compiler",
    category: "Systems",
    summary:
      "Implemented a compiler in Dart for a statically typed, Dart-like language with functions, conditionals, and loops.",
    tagline:
      "Hand-crafted compiler with semantic analysis and MASM assembly generation.",
    stack: ["Dart", "MASM", "Parser combinators"],
    outcomes: [
      "Built hand-written lexer and recursive-descent parser that produce a typed AST with clear diagnostics.",
      "Implemented semantic analysis with scoped symbol tables and static type checking across arithmetic and logical operations.",
      "Lowered AST to assembly with function prologues, stack frame layout, and control flow instructions.",
    ],
    vibe: "midnight",
  },
  {
    name: "Emotion-Aware Recommendation",
    category: "Applied AI",
    summary:
      "Crafted a Furhat robot experience that blends emotion detection with collaborative filtering to boost engagement.",
    tagline:
      "Real-time vision and recommender pipelines personalize content by mood.",
    stack: ["Python", "OpenCV", "Collaborative filtering", "Furhat"],
    outcomes: [
      "Built live face detection, landmark tracking, and emotion classification to drive personalized outputs.",
      "Combined emotion-aware content filtering with collaborative filtering for movies, music, and points of interest.",
      "Increased user engagement by 30 percent during lab evaluations.",
    ],
    vibe: "evergreen",
  },
  {
    name: "Distributed Sorting and Graph Processing",
    category: "Parallel Computing",
    summary:
      "Designed MPI-based sorting and graph traversals with balanced workloads and reproducible benchmarks.",
    tagline:
      "Parallel pipelines for k-way merges and BFS across distributed clusters.",
    stack: ["Python", "mpi4py", "OpenMPI", "NumPy"],
    outcomes: [
      "Implemented block and uneven partitioning using MPI_Scatterv and Gather operations.",
      "Optimized distributed k-way merge and BFS frontier expansion with batched message passing.",
      "Delivered automated benchmark harnesses validating correctness against single-threaded baselines.",
    ],
    vibe: "sunrise",
  },
];

export const experiences = [
  {
    role: "Research Assistant",
    company: "Purdue University Northwest",
    timeframe: "Aug 2024 - Dec 2024",
    location: "Hammond, IN",
    summary:
      "Developed and evaluated transfer learning pipelines for object detection and segmentation experiments.",
    highlights: [
      "Fine-tuned YOLO and ResNet architectures with custom data preparation and annotation tooling.",
      "Built repeatable evaluation scripts to accelerate experimentation and publication readiness.",
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    role: "Front-End Developer",
    company: "Ciright Enterprise Pvt. Ltd.",
    timeframe: "Jun 2022 - Dec 2023",
    location: "Ahmedabad, India",
    summary:
      "Shipped responsive web and cross-platform mobile apps from Figma handoff to production.",
    highlights: [
      "Implemented SPA features, reusable components, and client-side state management in React and Redux.",
      "Optimized UX performance with code splitting, memoization, and efficient rendering while integrating REST APIs and AWS-hosted assets.",
    ],
    stack: ["React", "React Native", "Redux", "Tailwind CSS"],
  },
];

export const education = [
  {
    institution: "Purdue University Northwest",
    degree: "M.S. Computer Science",
    timeframe: "Jan 2024 - Dec 2025",
    note: "Researching computer vision and applied ML.",
  },
  {
    institution: "Vellore Institute of Technology Bhopal University",
    degree: "B.Tech. Computer Science and Engineering",
    timeframe: "Jul 2018 - May 2022",
    note: "Focus on software engineering and distributed systems.",
  },
];

export const focusAreas = [
  {
    title: "Languages",
    blurb:
      "Comfortable moving from prototypes to production with scripting, typed, and systems languages.",
    tags: [
      "JavaScript ES6",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Python",
      "Java",
      "Dart",
      "C",
    ],
  },
  {
    title: "Frontend ecosystems",
    blurb:
      "React and Next.js specialist delivering responsive, accessible UX across web and mobile.",
    tags: [
      "React 18",
      "Next.js",
      "Redux",
      "Context API",
      "Tailwind CSS",
      "React Router",
      "Testing Library",
      "Jest",
    ],
  },
  {
    title: "Performance and accessibility",
    blurb:
      "Obsessed with Core Web Vitals, inclusive patterns, and techniques that keep experiences fast.",
    tags: [
      "Core Web Vitals",
      "Lazy loading",
      "Memoization",
      "WCAG 2.1",
      "WCAG 2.2",
      "Semantic HTML",
    ],
  },
  {
    title: "Security mindset",
    blurb:
      "Baking in guardrails early through secure patterns, policies, and validation.",
    tags: ["CSP", "XSS prevention", "Input validation"],
  },
  {
    title: "Tooling and DevOps",
    blurb:
      "Reliable build pipelines and automation that keep releases calm and predictable.",
    tags: [
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
      "Babel",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "GitHub Actions",
    ],
  },
  {
    title: "Backend and APIs",
    blurb:
      "Comfortable shaping RESTful services and data flows that support front-end delivery.",
    tags: ["Node.js", "Express", "RESTful API", "MongoDB"],
  },
  {
    title: "Mobile surfaces",
    blurb:
      "Building cross-platform experiences with smooth native interactions.",
    tags: ["React Native", "Flutter", "Android Studio"],
  },
  {
    title: "Applied AI",
    blurb:
      "Bringing computer vision and ML models into user-facing products with human-in-the-loop feedback.",
    tags: ["TensorFlow", "PyTorch", "HF Transformers", "Computer vision"],
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "damienchristian987@gmail.com",
    href: "mailto:damienchristian987@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/damienchristian",
    href: "https://www.linkedin.com/in/damienchristian",
  },
];
