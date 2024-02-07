import {
  meta,
  shopify,
  starbucks,
  tesla,
  alexon,
  octopus,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  pug,
  daisyui,
  reactquery,
  formik,
  gulp,
  jest,
  python,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: pug,
    name: "pug js",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: daisyui,
    name: "Daisy-UI",
    type: "Frontend",
  },
  {
    imageUrl: reactquery,
    name: "React-query",
    type: "Frontend",
  },
  {
    imageUrl: formik,
    name: "Formik",
    type: "Version Control",
  },
  {
    imageUrl: gulp,
    name: "Gulp",
    type: "Version Control",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: (
      <a href="https://alexon.online/" target="_blank">
        ALEXON INCORP
      </a>
    ),
    icon: alexon,
    iconBg: "#accbe1",
    date: "Oct 2023 - Present",
    points: [
      "Engineered an accounting ERP with React.js, Tailwind CSS, React Query, React Table, and TypeScript for a superior user experience.",
      "Applied SOLID principles for scalable and maintainable accounting code.",
      "Implemented a modular design system with Atom Design for streamlined development and visual consistency.",
      "Leveraged React Query for efficient data fetching in accounting-related front-end components.",
      "Seamlessly integrated React Table for enhanced data presentation and manipulation in the accounting ERP.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Octopus",
    icon: octopus,
    iconBg: "#060012",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Developed and maintained front-end components for shop e-commerce and landing page projects using React.js and Next.js in a remote part-time role.",
      "Applied JavaScript expertise for dynamic functionality and improved interactivity.",
      "Ensured visually appealing and user-friendly interfaces with responsive design principles.",
      "Collaborated remotely with cross-functional teams for effective project alignment.",
      "Contributed to cutting-edge features and performance enhancements in a part-time capacity.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ramy5/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
