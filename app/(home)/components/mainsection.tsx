import Movingborderbtn  from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./title";

const Mainsection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          {"Hi, I'm Henil 👋"}
          <br />{" "}
          <span className="underline underline-offset-8 decoration-purple-500">
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
            <div className="w-32 h-32 rounded-2xl bg-purple-500 "></div>
            <div className="w-32 h-32 rounded-full bg-orange-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-orange-500"></div>
            <div className="w-32 h-32 rounded-full bg-purple-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <Movingborderbtn borderRadius="0.5rem" className="p-3 font-semibold">
          <p>Avaliable for work 💻</p>
        </Movingborderbtn>
        </div>
        
      </div>
    </div>
  );
};

export default Mainsection;
