'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from '../../public/brain-svgrepo-com.svg';
import img2 from '../../public/accessibility-svgrepo-com.svg';
import img3 from '../../public/yoga-svgrepo-com.svg';

const Benefits = () => {
  return (
    <section className="bg-bene h-full py-16 px-4 md:px-28 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0.1, y: 140 }} // Initial animation values
        whileInView={{ opacity: 1, y: 0 }} // Animation when component appears
        transition={{ duration: 0.8 }}
      >
       <div className="flex w-full items-center justify-center mb-20">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-cyan-800 via-cyan-800 to-cyan-800 bg-clip-text md:text-5xl text-3xl box-content font-extrabold text-transparent text-center select-none">
          Empowering Minds, Healing Hearts
        </span>
          <h1
              className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-gray-50 via-gray-50 to-gray-50 bg-clip-text md:text-5xl text-3xl font-extrabold text-transparent text-center select-auto">
             Empowering Minds, Healing Hearts
          </h1>
      </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8">
        <motion.div
          className="box p-6 md:p-10 text-center transition-all mb-12 md:mb-0 bg-white/30 border shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={img}
            alt="Mindfulness Icon"
            className="h-24 mx-auto mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-[#030718] mb-4">
            Mindfulness
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Enhance mindfulness: Our model suggests mindfulness practices tailored to your unique needs for inner peace.
          </p>
        </motion.div>

        <motion.div
          className="box p-6 md:p-10 text-center transition-all mb-12 md:mb-0 bg-white/30 border shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={img2}
            alt="Depression Icon"
            className="h-24 mx-auto mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-[#030718] mb-4">
            Cure Depression
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our model utilizes advanced techniques, providing personalized insights to aid in depression management and recovery.
          </p>
        </motion.div>

        <motion.div
          className="box p-6 md:p-10 text-center transition-all bg-white/30 border shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={img3}
            alt="Stress Reduction Icon"
            className="h-24 mx-auto mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-[#030718] mb-4">
            Reduce Stress
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our model offers personalized strategies to alleviate stress, promoting well-being and resilience in daily life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits;
