import React from 'react'
import Navbar from './components/navbar'
import Mainsection from './components/mainsection'
import Skills from './components/skills'
import Project from './components/projects'
import Footer from './components/footer'
import Themetoggle from '@/components/ui/themetoggle'

const page = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-black  overflow-hidden ' >
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative p-5'>
        <Themetoggle />
      <div className="max-w-screen mx-auto  ">
        <Navbar />
        <Mainsection />
        </div>
        <div className='h-10 xl:h-33 bg-gradient-to-t from-white dark:from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>

        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20 bg-white dark:bg-black ">
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  )
}

export default page