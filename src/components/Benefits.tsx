'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from '../../public/brain-svgrepo-com.svg';
import img2 from '../../public/accessibility-svgrepo-com.svg';
import img3 from '../../public/yoga-svgrepo-com.svg';

const Benefits = () => {
  return (
    <section className='bg-bene h-full'>
     <motion.div
            initial={{ opacity: 0.1, y: 140 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation when component appears
            transition={{ duration: 0.8}} >
     <h1 className="text-3xl  text-center md:font-bold leading-none tracking-tight text-[#030718] md:text-5xl lg:text-6xl mb-20 font-extrabold">Empowering Minds, Healing Hearts </h1>
     </motion.div>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <motion.div
          className="box p-4 md:p-20 text-center transition-all mb-16 md:mb-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img}
            alt=""
            className="h-24 mx-auto mb-4 font-bold text-gray-200"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Mindfullness</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
          Enhance mindfulness: Our model suggests mindfulness practices tailored to your unique needs for inner peace.
          </p>
        </motion.div>

        <motion.div
          className="box p-4 md:p-20 text-center transition-all  mb-16 md:mb-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img2}
            alt=""
            className="h-24 mx-auto mb-4"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Cure depression</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
          Our model utilizes advanced techniques, providing personalized insights to aid in depression management and recovery.
          </p>
        </motion.div>

        <motion.div
          className="box p-4 md:p-20 text-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img3}
            alt=""
            className="h-24 mx-auto mb-4"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Reduce Stress</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
           Our model offers personalized strategies to alleviate stress, promoting well-being and resilience in daily life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits;
