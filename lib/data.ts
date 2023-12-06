import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/afro-shop.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import tsgPreviewImg from "@/public/tsg-preview.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Code Reviewer | Microverse",
    location: "San Francisco, California",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Software Engineer | Turing",
    location: "Palo Alto, California, United States",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer | The skills Garage",
    location: "Toronto, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TSG MVP",
    description:
      "I worked as a full-stack developer on this startup project. Users can give register for different courses, manage course and other informations from their dashboard and make payment.",
    tags: ["React", "Node Js"],
    imageUrl: tsgPreviewImg,
    link: "https://tsg-frontend.vercel.app/"
  },
  {
    title: "Afro Shop",
    description:
      "Ecommerce Application. I worked as a full-stack developer on this project. It has features like filtering, Authentication, Authorization, sorting and Admin dashboard.",
    tags: ["React", "Node.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://afroshop-frontend.vercel.app/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
    link: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Ruby",
  "Ruby on Rails",
  "Strapi",
  "Svelte",
  "Framer Motion",
] as const;