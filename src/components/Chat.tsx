'use client'
import React, { useState } from 'react';
import OpenAI from 'openai';
import robot from '../../public/robot.svg';
import Image from 'next/image';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const openai = new OpenAI({
  apiKey:"example",
  dangerouslyAllowBrowser: true
});

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, cycleToggle] = useCycle(false, true);

  const handleUserInput = async () => {
    setIsLoading(true);
    setUserInput('');
    // Update chat history with the user input
    setChatHistory(prevChat => [
      ...prevChat,
      {
        role: 'user',
        content: userInput
      }
    ]);

    // Make API call using updated chat history
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        ...chatHistory, // Use updated chat history here
        { role: 'assistant', content: userInput }
      ],
      model: 'gpt-3.5-turbo-0301'
    });

    // Update chat history with the assistant's response
    setChatHistory(prevChat => [
      ...prevChat,
      {
        role: 'assistant',
        content: chatCompletion.choices[0].message.content
      }
    ]);

    // Clear user input and loading state
    setUserInput('');
    setIsLoading(false);
  };

  return (
    <div className='bg-herob h-screen flex flex-col justify-center items-center mt-12 md:mt-12'>
      <div className='w-full max-w-screen-md bg-mainb border border-gray-500 p-4 rounded-lg shadow-md'>
        <div className='mb-4'>
          <div className='flex items-center flex-row justify-center'>
            <h1 className='text-2xl md:text-4xl font-bold text-cyan-500 mb-2 text-center'>ChatBot Assistant</h1>
            <motion.div
             key="robot-div"
             initial={{ y: toggle ? 0 : 5 }}
             animate={{ y: toggle ? 5 : 0 }}
             transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
             <Image src={robot} alt='robot' className='w-8 h-8 md:w-12 md:h-12 m-2' /> 
             </motion.div>
          </div>
          <p className='text-gray-400 text-sm md:text-lg text-center'>
            Welcome to our chatbot. Ask your questions.
          </p>
        </div>
        <div className='mb-4' style={{ height: '400px', overflow: 'auto' }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={
                `${
                  message.role === 'user'
                    ? ' text-white text-right'
                    : 'bg-gray-200 text-black text-left'
                }`
              }
            >
              <div
                className={`rounded-full p-2 max-w-md mx-4 inline-block ${
                  message.role === 'user'
                    ? ' text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {message.role === 'user' ? 'You' : 'Equilibra'}
              </div>
              <div
                className={`max-w-md mx-4 my-2 inline block ${
                  message.role === 'user'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-200 text-black'
                } p-2 rounded-md`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className='flex'>
          <input
            type='text'
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className='flex-1 p-2 rounded-l-lg'
          />
          {isLoading ? (
            <div className='bg-cyan-500 text-white p-2 rounded-r-lg animate-pulse'>
              Loading
            </div>
          ) : (
            <button
              onClick={handleUserInput}
              className='bg-cyan-500 text-white p-2 rounded-r-lg hover:bg-cyan-600'
            >
              Ask
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
