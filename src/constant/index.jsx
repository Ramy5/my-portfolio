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
    name: "Python (basics)",
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
    link: "https://github.com/Ramy5",
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
    name: "Comfy Store",
    description:
      "A dynamic online store designed to showcase the integration of React.js and Tailwind CSS. This web application mimics an online shopping experience, offering users the ability to browse a variety of products.",
    link: "https://github.com/Ramy5/comfy-store",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Google Clone",
    description:
      "The Google Clone project mimics Google's search engine with Next.js and Tailwind CSS. It uses Google's custom search API for results, fully responsive for easy searching across devices.",
    link: "https://github.com/Ramy5/Google-Clone",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "IMDb Clone",
    description:
      "IMDB Clone is a movie information web app, offering users the ability to search and explore films, including the latest releases, ratings, and reviews. Crafted as a replica of IMDB, this project is aimed at honing skills in Next.js 13 and Tailwind CSS 3.",
    link: "https://github.com/Ramy5/IMDb-Clone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Forkify Application",
    description:
      "Searching for recipes food, getting the results from API, displaying these results, bookmarking favorite recipes, using local storage to store them, using classes, modules, promises, async-await, parcel, project architecture, and more ;)",
    link: "https://github.com/Ramy5/Forkify-App",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Bankist Clone",
    description:
      "Simulate the bank, Transfer money from one account to another, Loan the money from the bank, Calculate and show the balance, and more!",
    link: "https://github.com/Ramy5/Bankist-Clone",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Mapty Clone",
    description:
      "Recording running and cycling workouts and displaying them on the map, getting information about the city, and getting weather data in the city by API.",
    link: "https://github.com/Ramy5/Mapty_App-Clone",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Natours Clone",
    description:
      "A Simple landing page by using Sass and Advanced css properties",
    link: "https://github.com/Ramy5/Natours-clone",
  },
];
