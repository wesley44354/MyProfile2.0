import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import React, { useEffect, useState } from "react";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center">
          <h3 className="absolute top-24 uppercase text-center ml-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
            Experience
          </h3>

          <div className="h-[70%] flex space-x-5  p-5 mt-32 justify-center self-center">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>

          {/* <div className="h-[90%] w-full flex space-x-5 overflow-x-scroll p-5 mt-32 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div> */}
        </div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
          <h3 className="absolute top-24 ml-6 uppercase  tracking-[20px] text-gray-500 text-2xl">
            Experience
          </h3>


          <div className="h-[80%] flex space-x-5 p-5 mt-32 justify-center self-center">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>

          {/* <div className="h-[80%] w-full flex space-x-5 overflow-x-scroll p-5 mt-32   snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div> */}
        </motion.div>
      )}
    </>
  );
}
