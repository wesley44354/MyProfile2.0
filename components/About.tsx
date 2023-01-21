import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img 
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        className="-mb-28 md:-mb-20 flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 object-center md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className='space-y-10 px-0 md:px-10 '>
        <h4 className=' text-1xl sm:text-2xl md:text-4xl font-semibold '>Um pouco {" "}<span className='underline decoration-[#8257e5]/30'>sobre</span>{" "} mim:</h4>
        <p className='text-[10px] sm:text-sm md:text-base'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}