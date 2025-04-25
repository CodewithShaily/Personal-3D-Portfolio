import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Stop,
  internstudio,
  jindal,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  medical,
  gun,
  github,
  leetcode,
  linkdin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Intern",
    company_name: "Internship Studio",
    icon: internstudio,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Completed a 4-week training covering data handling, visualization, manipulation tools, and machine learning algorithms.",
      "Learned about ANN, CNN, RNN, NLP, text analysis, and sentiment analysis.",
      "I Worked on the Implementation of PCA with ANN algorithm for Face Recognition as a project.",
      "Applied machine learning concepts to real-world data, enhancing practical skills in AI and deep learning.",
    ],
  },
  {
    title: "Web Developer and SAP MM Intern",
    company_name: "Jindal Power Ltd.",
    icon: jindal,
    iconBg: "#E6DEDD",
    date: "May 2024 - Jul 2024",
    points: [
      "Recreated Jindal Power Ltd.'s official website as a task, replicating its frontend and backend.",
      "Underwent training in the SAP MM module to understand procurement and materials management processes.",
      "Performed hands-on tasks in SAP software after completing the training.",
      "Gained experience in both web development and SAP MM through practical assignments.",
    ],
  },
  {
    title: "Back-end Intern",
    company_name: "1Stop",
    icon: Stop,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Completed a 3-week backend training from IIT Bhubaneswar, learning SQL, PostgreSQL, PHP, and Laravel",
      "Developed a Laravel Task Manager App using REST API and Postman.",
      "Built a Laravel BMS (Business Management System) as a major project.",
      "Created detailed project reports alongside development, gaining hands-on backend experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dive into my repositories and explore projects ranging from AI innovations to full-stack web applications",
    name: "GitHub",
    designation: "Open Source",
    
    image: github,
    profileLink: "https://github.com/CodewithShaily",
  },
  {
    testimonial:
      "I’m committed to networking, sharing knowledge, and creating impactful solutions.",
    name: "Linkedin",
    designation: "Networking",
    
    image: linkdin,
    profileLink: "https://www.linkedin.com/in/shailysaxena222/",
  },
  {
    testimonial:
      " Every algorithm mastered is a step toward excellence—problem-solving is my daily grind!",
    name: "Leetcode",
    designation: "Problem Solving",
    
    image: leetcode,
    profileLink: "https://leetcode.com/u/ShailyInTech/",
  },
];

const projects = [
  {
    name: "Threat Detection Surveillance System",
    description:
      "Detects weapons and violent movements through cameras. Captures a 10-second video and sends an alert to the registered authority via mail and SMS.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "AWS S3",
        color: "green-text-gradient",
      },
      {
        name: "PyQt5",
        color: "pink-text-gradient",
      },
    ],
    image: gun,
    source_code_link: "https://github.com/CodewithShaily/Nagar-rakshak/",
  },
  {
    name: "Medical Chatbot Generative AI",
    description:
      "A smart medical chatbot that provides accurate, symptom-based responses with personalized and context-aware interaction to enhance patient support and pre-diagnosis.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "GPT",
        color: "green-text-gradient",
      },
      {
        name: "Pinecone",
        color: "pink-text-gradient",
      },
    ],
    image: medical,
    source_code_link: "https://github.com/CodewithShaily/MediSync",
  },
  {
    name: "Tour and Travel Site",
    description:
      "A React-based travel website where every section, from Navbar to Footer, is a reusable component, with smooth navigation and dynamic sub-pages like a filterable photo gallery for an engaging user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/CodewithShaily/React-Tour-and-Travel-Site",
  },
];

export { services, technologies, experiences, testimonials, projects };
