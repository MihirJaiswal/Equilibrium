'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import robot from '../../public/robot.svg';
import axios from 'axios';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, cycleToggle] = useCycle(false, true);

  const handleUserInput = async () => {
    if (userInput.trim() === '') return;

    setIsLoading(true);
    setChatHistory(prevChat => [
      ...prevChat,
      { role: 'user', content: userInput }
    ]);

    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      const botMessage = response.data.value;

      setChatHistory(prevChat => [
        ...prevChat,
        { role: 'assistant', content: botMessage }
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setChatHistory(prevChat => [
        ...prevChat,
        { role: 'assistant', content: 'Sorry, something went wrong.' }
      ]);
    }

    setUserInput('');
    setIsLoading(false);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center p-4'>
      <div className='w-full max-w-2xl bg-white/70 border p-6 rounded-lg shadow-lg'>
        <div className='mb-6'>
          <div className='flex items-center justify-center'>
            <h1 className='text-xl md:text-4xl font-bold text-gray-800 mb-4'>
              ChatBot Assistant
            </h1>
            <motion.div
              key="robot-div"
              initial={{ y: toggle ? 0 : 5 }}
              animate={{ y: toggle ? 5 : 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <Image src={robot} alt='robot' className='w-12 h-12 md:w-16 md:h-16 ml-2' />
            </motion.div>
          </div>
          <p className='text-gray-600 text-center'>
            Welcome to our chatbot. Ask your questions.
          </p>
        </div>
        <div className='mb-4 overflow-y-auto' style={{ height: '400px' }}>
          {chatHistory.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`max-w-sm p-3 rounded-lg shadow ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex'>
          <input
            type='text'
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            className='flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none'
            placeholder='Type your message...'
          />
          {isLoading ? (
            <div className='bg-cyan-700 text-white p-2 rounded-r-lg animate-pulse'>
              Loading...
            </div>
          ) : (
            <button
              onClick={handleUserInput}
              className='bg-cyan-700 text-white p-2 rounded-r-lg hover:bg-blue-600'
            >
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
