import React from 'react'
import { SiReact,SiTypescript,SiVisualstudio,SiTailwindcss,SiNextdotjs } from "react-icons/si";
import Title from './title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { SiSocketdotio } from "react-icons/si";



const Project = () => {
    const projects = [
        {
            title:"React-Socket-chat-app",
            tech:[SiReact,SiSocketdotio,SiTailwindcss],
            Link:"https://github.com/Henil00/react-socket-chat-app.git",
            cover:"/chat-app-image.png",
            background:"bg-teal-500"
        },
        {
            title:"E-com Store(Upcoming)",
            tech:[SiNextdotjs ,SiTypescript,SiVisualstudio],
            Link:"https://github.com/Henil00",
            cover:"/git-profile.png",
            background:"bg-amber-500"
        },
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Projects 👀" className='flex flex-col items-center justify-center rotate-6' />
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5 '>
            {projects.map((project,index)=>{
                return(
                    <Link href={`${project.Link}`} key={index}>
                        <div className={cn("p-2 rounded-md",project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='object-cover space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {project.tech.map((Icon,index)=>{
                                        return <Icon className='w-8 h-8' key={index}/>
                                    })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                )
            })}

        </div>

    </div>
  )
}

export default Project