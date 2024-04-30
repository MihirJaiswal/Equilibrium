'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

export function Bento() {
  return (
    <motion.div
    initial={{ opacity: 0.1, y: 140 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8}}
     className="mx-auto px-8 bg-cyantob h-full w-screen flex items-center justify-center md:mt-10">
      <div className="max-w-5xl ">
        <h1 className=" text-3xl pt-20 md:pb-20 text-center font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">Our AI models that make life easier</h1>
      <HoverEffect items={projects} />
    </div>
    </motion.div>
  );
}
export const projects = [
  {
    title: "Stress",
    description:
      "A model that predicts stress based on humidity, temperature and footstep",
    link: "/stress",
  },
  {
    title: "ChatBot",
    description:
      "A chat bot that provides solutions to common problems related to mensual health",
    link: "/chatbot",
  },
  {
    title: "Anxious Meter",
    description:
      "A mental health app that provides tips on how to deal with Anxiety",
    link: "/anx",
  },
  {
    title: "Sleep",
    description:
      "A AI model that predicts sleep quality based on sleep duration and time in bed",
    link: "/sleep",
  },
  
];
