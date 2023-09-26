import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
} from "@/Types";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 2,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 123,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 180,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/twitterClone.png",
    name: "Twitta",
    tools: ["Nuxt", "Prisma", "MongoDb", "Tailwind CSS"],
    liveLink: "https://twita.netlify.app/",
    githubLink: "https://github.com/iamBlissMedik/twitter-clone",
  },
  {
    id: 2,
    img: "/quizApp.png",
    name: "Quiz App",
    tools: ["Nuxt", "Tailwind CSS"],
    liveLink: "https://kwizappp.netlify.app/",
    githubLink: "https://github.com/iamBlissMedik/QuizAPP",
  },
  {
    id: 3,
    img: "/movieApp.png",
    name: "Movie Box",
    tools: ["Next", "Typescript", "Tailwind CSS"],
    liveLink: "https://hng-task-two-xi.vercel.app/",
    githubLink: "https://github.com/iamBlissMedik/hng-task-two",
  },
  {
    id: 4,
    img: "/imageGallery.png",
    name: "Image Gallery",
    tools: ["React", "Typescript", "Tailwind CSS"],
    liveLink: "https://hng-task-three-swart.vercel.app/",
    githubLink: "https://github.com/iamBlissMedik/hng-task-three",
  },
  {
    id: 5,
    img: "/contactApp.png",
    name: "Contact App",
    tools: ["Vue", "Tailwind CSS"],
    liveLink: "https://kontactapp.netlify.app/",
    githubLink: "https://github.com/iamBlissMedik/contact-appVue",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "ReactJS", level: 70 },
  { name: "NextJS", level: 75 },
  { name: "VueJS", level: 75 },
  { name: "NuxtJS", level: 75 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "AIT,Alagbado,Lagos" },
  { id: 2, title: "Phone", text: "+234-81-6398-5830" },
  { id: 3, title: "Email", text: "ellamsbliss@gmail.com" },
];

export { navLinks, projects, countUpItems, skills, contacts };
