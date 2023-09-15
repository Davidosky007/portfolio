"use client"
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'> After graduating with a degree in{" "}
        <span className="font-medium">Food Technology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        are{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Ruby on Rails, and MongoDB
        </span>
        . I am also familiar with TypeScript and Strapi. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.</p>
      <p><span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and Baking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">React Native</span>.</p>
    </motion.section>
  )
}
