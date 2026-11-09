export type ProjectCategory = "Projects" | "Writing" | "Experiments";

export type Project = {
  id: string;
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  details: string[];
  tags: string[];
  image: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "revamp",
    title: "Revamp",
    year: "2026",
    category: "Projects",
    description: "An EV battery management experience that brings live battery insights into a clearer, more useful interface.",
    details: [
      "A hackathon project exploring how battery telemetry can become more understandable and actionable.",
      "Built around a dashboard experience, with a focus on making complex system information approachable."
    ],
    tags: ["Next.js", "TypeScript", "PyBaMM", "Gemini API"],
    image: "/images/revamp.jpg",
    links: []
  },
  {
    id: "music-recommender",
    title: "Music Recommender",
    year: "2026",
    category: "Projects",
    description: "A personal recommendation experiment combining music discovery with algorithmic thinking.",
    details: [
      "An exploration of how mathematical ideas and recommendation logic can help surface music worth discovering.",
      "Replace this description with the exact approach, data sources, and results from the finished project."
    ],
    tags: ["Python", "Algorithms", "Music"],
    image: "/images/music.jpg",
    links: []
  },
  {
    id: "connection-tracker",
    title: "Connection Tracker",
    year: "2025",
    category: "Projects",
    description: "A lightweight tool for keeping track of conversations, people, and follow-ups.",
    details: [
      "A personal software project focused on turning scattered relationship context into something easier to maintain.",
      "Add a short explanation of the problem, your implementation, and what you learned."
    ],
    tags: ["JavaScript", "React"],
    image: "/images/connections.jpg",
    links: []
  },
  {
    id: "notes",
    title: "Notes on building",
    year: "2026",
    category: "Writing",
    description: "Short reflections on making things, learning in public, and following curiosity.",
    details: ["A place for essays, observations, and ideas that are still taking shape."],
    tags: ["Writing", "Reflection"],
    image: "/images/writing.jpg",
    links: []
  },
  {
    id: "small-experiments",
    title: "Small experiments",
    year: "2026",
    category: "Experiments",
    description: "A collection of small prototypes, sketches, and ideas worth exploring.",
    details: ["Use this space for small things that don't need a full project write-up."],
    tags: ["Prototypes", "Learning"],
    image: "/images/experiments.jpg",
    links: []
  }
];
