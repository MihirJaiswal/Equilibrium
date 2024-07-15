'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import heroImg from '../../public/hero.png';

const Hero = () => {
  return (
    <div className='bg-herob mt-4'>
      <section className="bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex flex-col md:flex-row justify-center items-center gap-2">
          <motion.div // Wrap with motion.div for animation
            initial={{ opacity: 0.1, y: 140 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation when component appears
            transition={{ duration: 0.8 }} // Animation duration
            className="flex flex-col justify-center gap-8"
          >
            <h1 className="font-semibold text-gray-100 text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">
              Unlock Inner Harmony: Stress, Anxiety, Healing
            </h1>
            <p className="leading-[30px] tracking-[2%] md:font-normal text-[20px] text-gray-400">
              Your Path to Stress Prediction, Anxiety Assessment, and Mindful Healing!
            </p>
            <motion.button // Wrap with motion.button for animation
              whileHover={{ scale: 1.05 }} // Animation on hover
              whileTap={{ scale: 0.95 }} // Animation when tapped
              className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link href="/chatbot">Get Started</Link>
              </span>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }} // Initial animation values
            whileInView={{ scale: 1, opacity: 1 }} // Animation when component appears
            whileHover={{ scale: 1.1 }} // Scale up on hover
            transition={{ duration: 0.8 }} // Animation duration
            className='flex items-center justify-center'
          >
            <Image
              src={heroImg}
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
