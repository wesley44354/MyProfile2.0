import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react';


type Props = {}

export default function BackgroundCircles({}: Props) {


  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <>
      {isMobile 
      ?
        <div 
        className='relative flex justify-center items-center'
      >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-[#8257e5] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20'/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
        </div>
      :
        <motion.div 
        initial={{
          opacity: 0
        }}
        animate={{
          scale: [1, 2, 3, 3, 1],
          opacity: [0,1, 0.2, 0.4, 0.8, 0.1, 1.0]
        }}
        transition={{
          duration: 2.5
        }}
        className='relative flex justify-center items-center'
      >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-[#8257e5] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20'/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
        </motion.div>
      }
    </>

  )
}