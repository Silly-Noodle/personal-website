export type ProjectCategory = "Projects";

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
    image: "/images/revamp.png",
    links: [
      { label: "Devpost", href: "https://devpost.com/software/reamp" },
      {
        label: "Watch demo",
        href: "https://www.loom.com/share/93291af18bf344c69a9a546eca28857d?sid=d5204830-b15a-4d34-bd62-7626459607db"
      }
    ]
  }
  /*,
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
    title: "Connections Tracker",
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
  }*/
];
