import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[]
}

export default function Projects({projects}: Props) {
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
      className='flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className=' h-[90%]  relative w-[90%]  flex overflow-x-scroll cursor-pointer overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40 '>
        {projects?.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-30  md:p-44 h-screen'>
            <motion.img 
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{
                duration: 1.2
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              src={urlFor(project.image).url()} alt="" 
              className='h-36 w-60 sm:h-48 sm:w-[360px] xl:h-64 xl:w-[480px]'
            />

            <div className='space-y-5 px-0 md-px-40 max-w-6xl'>

              <a href={project.linkToBuild} target='_blank' className=' italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse'>
                <h1>Clique aqui para ver o projeto</h1>
              </a>
              <h4 className=' m-0 text-3xl md:text-4xl font-semibold text-center'>
                <span className='text-lg md:text-xl underline decoration-[#8257e5]/50'>
                  Project {i + 1} of {projects.length}:{" "}{project?.title}
                </span> 
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((techonology) => (
                  <img
                    className="h-10 w-10"
                    key={techonology._id}
                    src={urlFor(techonology.image).url()}
                   />
                ))}
              </div>

              <p className='text-xs md:text-sm xl:text-lg px-5 text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%]  bg-[#8257e5]/10 left-0 h-[400px]  -skew-y-12'>

      </div>
    </motion.div>
  )
}