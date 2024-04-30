'use client'
import React from 'react';
import { motion } from 'framer-motion';
import image from '../../public/about.svg'
import Image from 'next/image';

const About = () => {
  return (
    <div
      className='h-full bg-about'
    >
      <div className='flex flex-col md:flex-row px-6 items-center justify-center md:px-44'>
        <motion.div
        className='mt-20 '
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-white text-6xl font-bold my-6 mb-16 text-center'>About Us</h2>
          <p className="mb-3 text-lg md:text-xl text-gray-300">Welcome to Equilibrium, a compassionate space dedicated to supporting mental well-being and fostering understanding around mental health challenges.</p>
          <p className="text-gray-300 py-2">At Equilibrium, we believe that mental health is a fundamental aspect of overall wellness, deserving of attention, care, and destigmatization. Whether you're navigating your own mental health journey or seeking resources to support a loved one, our platform is designed to provide a wealth of information, guidance, and community connection.</p>
          <p className="text-gray-300 py-2">Our mission is to empower individuals with knowledge, tools, and encouragement to prioritize their mental wellness and seek the support they need. Through informative articles, expert insights, personal stories, and practical tips, we aim to break down barriers to mental health care and promote a culture of openness and acceptance.</p>
          <p className="text-gray-300 py-2">We understand that every person's experience with mental health is unique, and we strive to create a space that is inclusive, respectful, and supportive of all backgrounds and identities. Here, you'll find a diverse range of perspectives and resources to help you on your journey toward mental health and emotional well-being.</p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='px-auto mr-6 md:mr-0 hidden md:block'>
          <Image
            src={image}
            alt="image"
            width={500}
            height={500}
            className="mt-20 ml-20 mr-24 md:mr-0"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About;
