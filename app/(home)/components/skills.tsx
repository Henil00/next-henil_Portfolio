"use client";
import React from 'react'
import Title from './title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiReact,SiJavascript,SiNextdotjs,SiCsswizardry,SiTypescript,SiTailwindcss,SiHtml5,SiNodedotjs,SiMongodb} from "react-icons/si";

const Skills = () => {
const skills = [
    {
        text:"HTML",
        Icon:SiHtml5
    },
    {
        text:"CSS",
        Icon:SiCsswizardry
    },
    {
        text:"JavaScript",
        Icon:SiJavascript
    },
    {
        text:"React",
        Icon:SiReact
    },
    {
        text:"NextJs",
        Icon:SiNextdotjs 
    },
    {
        text:"TypeScript",
        Icon:SiTypescript 
    },
    
    {
        text:"Tailwind",
        Icon:SiTailwindcss 
    },
    {
        text:"NodeJs",
        Icon:SiNodedotjs
    },
    {
        text:"MongoDB",
        Icon:SiMongodb 
    }

]

  return (
    <div className='max-w-5xl mx-auto px-8'>
       <Title text="Skills 🗡️" className='flex flex-col items-center justify-center -rotate-6' />
       <HoverEffect items={skills} />

    </div>
  )
}

export default Skills