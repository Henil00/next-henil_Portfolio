import React from 'react'
import { SiReact,SiTypescript,SiVisualstudio,SiChatbot} from "react-icons/si";
import Title from './title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';


const Project = () => {
    const projects = [
        {
            title:"Todo List",
            tech:[SiReact,SiTypescript,SiVisualstudio],
            Link:"https://github.com/Henil00",
            cover:"/git-activity.png",
            background:"bg-purple-500"
        },
        {
            title:"Chat Web Application",
            tech:[SiChatbot,SiTypescript,SiVisualstudio],
            Link:"https://github.com/Henil00",
            cover:"/git-profile.png",
            background:"bg-orange-500"
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