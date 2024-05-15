import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

import { SiLinkedin , SiGithub , SiInstagram } from "react-icons/si";

const Navbar = ({className}:{className?:string}) => {
    const socials = [
        {
            Link:"https://www.linkedin.com/in/henil-patel-9352361b9/",
            Label:"Linkdin",
            Icon:SiLinkedin
        },
        {
            Link:"https://github.com/Henil00",
            Label:"GitHub",
            Icon:SiGithub
        },
        {
            Link:"https://www.instagram.com/henil.exe/",
            Label:"Instagram",
            Icon:SiInstagram
        },
    ]


  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-purple-500 -rotate-2'>Henil 🧑‍💻</h1>

        
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{
                const Icon = social.Icon
                return <Link href={social.Link} key={index} aria-label={social.Label}>
                    <Icon className='w-5 h-5 hover:scale-150 transition-all' />

                </Link>

            })}
        </div>
    </nav>
  )
}

export default Navbar