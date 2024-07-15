'use client'
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="h-full bg-about py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:px-44 space-y-12 md:space-y-0 md:space-x-12">
        <motion.div
          className="text-center md:text-left"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full items-center justify-center mb-4">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-cyan-800 via-cyan-800 to-cyan-800 bg-clip-text text-5xl box-content font-extrabold text-transparent text-center select-none">
          About Us
        </span>
          <h1
              className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-gray-50 via-gray-50 to-gray-50 bg-clip-text text-5xl font-extrabold text-transparent text-center select-auto">
              About Us
          </h1>
      </div>
          <p className="text-gray-300 py-2 leading-relaxed text-justify">
            At Equilibrium, we believe that mental health is a fundamental aspect of overall wellness, deserving of attention, care, and destigmatization. Whether you're navigating your own mental health journey or seeking resources to support a loved one, our platform is designed to provide a wealth of information, guidance, and community connection.
          </p>
          <p className="text-gray-300 py-2 leading-relaxed text-justify">
            Our mission is to empower individuals with knowledge, tools, and encouragement to prioritize their mental wellness and seek the support they need. Through informative articles, expert insights, personal stories, and practical tips, we aim to break down barriers to mental health care and promote a culture of openness and acceptance.
          </p>
          <p className="text-gray-300 py-2 leading-relaxed text-justify">
            We understand that every person's experience with mental health is unique, and we strive to create a space that is inclusive, respectful, and supportive of all backgrounds and identities. Here, you'll find a diverse range of perspectives and resources to help you on your journey toward mental health and emotional well-being.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
