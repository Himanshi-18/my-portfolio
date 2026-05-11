import Aarohan from "../assets/images/aarohan-project.png";
import GirlsFlavour from "../assets/images/girlsflavour-project.png";
import GeminiClone from "../assets/images/gemini.png";

const projects = [
  {
    title: "Aarohan – Event & Community",
    type: "Professional",
    status: "Live",
    featured: true,
    description:
      "Built responsive, production-ready UI sections from Figma using React and TypeScript. Focused on reusable components, accessibility, and performance.",
    contribution: [
      "Built responsive page sections",
      "Implemented animations and sliders",
      "Matched UI with Figma design",
    ],
    image: Aarohan,
    tech: ["React", "TypeScript", "Chakra UI", "Framer Motion"],
    live: "https://aarohanindia.com/",
    github: null,
  },
  {
    title: "Girls Flavour – AI E-commerce",
    type: "Professional",
    status: "Live",
    featured: true,
    description:
      "Improved product workflows and responsive frontend for e-commerce modules, integrating APIs and optimizing UI interactions.",
    contribution: [
      "Developed wardrobe UI module",
      "Fixed frontend UI issues",
      "Handled testing and responsive improvements",
    ],
    image: GirlsFlavour,
    tech: ["WordPress", "PHP", "JavaScript", "AJAX"],
    live: "https://girlsflavour.com/",
    github: null,
  },
  {
    title: "Gemini Clone — AI Chat App",
    type: "Personal",
    status: "Live",
    featured: true,
    description:
      "Crafted a responsive AI chat interface with dynamic components and Firebase-backed state. Prioritized UX and fast rendering.",
    contribution: ["Created chat-style interface", "Built responsive layout"],
    image: GeminiClone,
    tech: ["React", "MUI"],
    live: "https://gemini-clone-web-app.netlify.app/",
    github: "https://github.com/Himanshi-18/Gemini-Clone",
  },
  {
    title: "CRM Dashboard",
    type: "Professional",
    status: "In Progress",
    description:
      "Built reusable dashboard UI components, filters, lead detail screens, opportunity flows, and responsive layouts for a CRM product.",
    contribution: [
      "Created reusable dashboard components",
      "Implemented filters and detail screens",
      "Worked on lead and opportunity flows",
    ],
    image: Aarohan,
    tech: ["React", "MUI", "JavaScript"],
    live: null,
    github: null,
  },
];

export default projects;
