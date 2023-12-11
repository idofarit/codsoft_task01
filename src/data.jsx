import { nanoid } from "nanoid";

import { MdOutlineDeveloperMode } from "react-icons/md";
import { GrAndroid } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "All Web Solution",
    icon: <MdOutlineDeveloperMode className="h-16 w-16 text-emerald-500" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus ipsum officiis quas nesciunt numquam!",
  },
  {
    id: nanoid(),
    title: "Android Developer",
    icon: <GrAndroid className="h-16 w-16 text-emerald-500" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore ea quisquam expedita sunt eaque!",
  },
  {
    id: nanoid(),
    title: "Complete Web Developer",
    icon: <CgWebsite className="h-16 w-16 text-emerald-500" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti temporibus sunt ex aut nobis.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.google.com/",
    github: "https://github.com/",
    title: "Project Sample 1",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.google.com/",
    github: "https://github.com/",
    title: "Project Sample 2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.google.com/",
    github: "https://github.com/",
    title: "Project Sample 3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
