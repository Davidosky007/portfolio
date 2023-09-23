"use client";

import Image from 'next/image'
import React from 'react'
import davidImg from '@/public/david-dp.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
          <Image src={davidImg} alt={'David portrait'} width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full border-[0.35rem] object-contain border-white shadow-xl' />
          </motion.div>
          <motion.span className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className='mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
          <span className="font-bold">Hello, I am David.</span> a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">5 years</span> of experience. I enjoy
            building <span className="italic">sites & Mobile apps</span>. My focus is{" "}
        <span className="underline">React (Next.js) Node.js and Rails</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
          Contact me here <BsArrowRight
          className='opacity-70 group-hover:translate-x-1 transition'
          />
        </Link>
        <a className='group bg-white px-7 cursor-pointer py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10' href='/David_Bassey_CV.pdf' download={true}>
          Download CV <HiDownload
          className='opacity-60 group-hover:translate-y-1 transition'
          />
        </a>
        <a href="https://www.linkedin.com/in/david-bassey-akan/" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'>
          <BsLinkedin/>
        </a>
        <a href="https://github.com/Davidosky007" target='_blank' className='bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'>
          <FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  )
}
