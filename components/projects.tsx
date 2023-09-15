import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
      <SectionHeading> My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
             <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

function Project({
  title,
  description,
  tags,
  imageUrl,
  link
}) {
  return <div></div>
}