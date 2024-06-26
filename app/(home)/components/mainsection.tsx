"use client";
import Movingborderbtn  from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./title";

const pdf_url = "/Henil-Resume.pdf"

const Mainsection = () => {
  

    const downloadFile = (url: string) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName!);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          {"Hi, I'm Henil 👋"}
          <br />{" "}
          <span className="underline underline-offset-8 decoration-teal-500">
            I build things for the Web.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-900 dark:text-gray-300">
          {
            "Live in India, I'm a Fullstack developer passionate about building a morden web application that user must love."
          }
        </p>
        <Link
          href={"mailto:henil.glsbca20@gmail.com"}
          className="inline-block group">
         <Title text="Contact Me 📭" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-teal-500 "></div>
            <div className="w-32 h-32 rounded-full bg-amber-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-amber-500"></div>
            <div className="w-32 h-32 rounded-full bg-teal-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10" onClick={()=>{downloadFile(pdf_url)}}>
          <Movingborderbtn borderRadius="0.5rem" className="p-3 font-semibold">
          <p> Resume 💻</p>
        </Movingborderbtn>
        </div>
        
      </div>
    </div>
  );
};

export default Mainsection;
