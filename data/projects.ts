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
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  reducedMotionImage?: string;
  photo?: { src: string; width: number; height: number; caption: string };
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "medusa",
    title: "Medusa",
    year: "2026",
    category: "Projects",
    description: "A screen privacy concept inspired by Alt-Tab that uses physical AI to detect when someone looks over your shoulder and switches screens so you can play video games at work to your heart's content.",
    details: [
      "At Hack Western 13, we started with a familiar sound: footsteps in the hallway while a game is open. Could the laptop hear that cue for us, so to speak, and switch windows in time? The same idea applies at a clinic desk, where a passing glance can reveal a patient record.",
      "Getting the timing right meant teaching the laptop what counts as a look. Someone can glance sideways while facing the door, or walk straight past a screen without reading it. Medusa considers both head position and eye direction. After about half a second of sustained attention from someone other than the user, it brings a Google Doc to the front. The webcam images stay on the laptop.",
      "Our dashboard puts the laptop and Raspberry Pi camera views side by side. That made it easier to diagnose what each camera could actually see during a demo. It also let us stress the Pi while watching the timing live. In that test the control loop kept its 50 Hz schedule even as the vision process slowed down."
    ],
    tags: ["QNX", "Raspberry Pi", "Arduino", "CAD"],
    image: "/images/medusa-demo.webp",
    imageWidth: 630,
    imageHeight: 420,
    imageAlt: "Animated demonstration of Medusa",
    reducedMotionImage: "/images/medusa-demo-still.webp",
    photo: {
      src: "/images/medusa-gallery.webp",
      width: 840,
      height: 501,
      caption: "Medusa’s face-tracking dashboard showing the laptop and Raspberry Pi camera feeds."
    },
    links: [
      { label: "Devpost", href: "https://devpost.com/software/medusa-mdaqui?ref_content=user-portfolio&ref_feature=in_progress" },
      { label: "GitHub", href: "https://github.com/Leo-Zh9/Medusa" }
    ]
  },
  {
    id: "revamp",
    title: "Revamp",
    year: "2025",
    category: "Projects",
    description: "An EV battery management experience that brings live battery insights into a clearer, more useful interface.",
    details: [
      "An EV battery can outlive its time in a car. A retired pack could still store electricity for a building, but a fleet of used packs comes with an awkward question: how do you keep track of batteries that have aged in different ways?",
      "At Hack the 6ix, we built Revamp to explore that question. We used PyBaMM to simulate three EV batteries with different levels of wear, each containing 6,912 cells. Streaming their readings to a Raspberry Pi running QNX let us exercise the battery management system without needing three physical packs on a workbench.",
      "The Pi checks readings locally. In the simulation, excessive current or temperature can trigger a protective shutdown. The same readings travel to a FastAPI server and into MongoDB Atlas, where a fleet operator can follow changes on a live dashboard. Gemini uses those readings to help explain battery health.",
      "One integration decision shaped the demo. A binary TCP stream worked between the simulator and the Pi, but the socket connection from the Pi to our server proved unreliable. We switched that second connection to API requests so we could demonstrate the full path from a simulated cell to the dashboard."
    ],
    tags: ["PyBaMM", "QNX", "FastAPI", "Gemini API"],
    image: "/images/revamp.png",
    imageWidth: 333,
    imageHeight: 222,
    imageAlt: "Revamp project artwork",
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
