import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import React, { useEffect, useState } from "react";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(0);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      calculateSpace();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateSpace() {
    const height = window.innerHeight;
    const space = height * 0.007;
    setSpaceBetween(space);
  }
  return (
    <article className="flex flex-col bg-red-700 w-full rounded-lg items-center space-y-7 flex-shrink-0 xs:w-[360px] sm:w-[500px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929]  p-10 sm:p-10 xl:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">


      <img
        className="w-40 h-40 md:w-28 md:h-28 xl:w-[200px] xl:h-[200px] object-contain object-center"
        src={urlFor(experience?.companyImage).url()}
      />


      {/* {!isMobile && (
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="w-20 h-20 md:w-28 md:h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
        />
      )} */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spaceBetween + 'vh' }} >
        <div>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-light">
            {experience.jobTitle}
          </h4>
        </div>
        <div>
          <p className="font-bold text-md xs:text-xl sm:text-xl md:text-2xl mt-1">
            {experience.company}
          </p>
        </div>
        <div className="flex space-x-2 sm:space-x-2 sm:my-1  md:space-x-2 md:my-2 justify-center">
          {experience.technologies.map((technology) =>
            technology?.image != undefined ? (
              <img
                key={technology?._id}
                src={
                  technology?.image != undefined
                    ? urlFor(technology.image).url()
                    : ""
                }
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <></>
            )
          )}
        </div>
        <p className="uppercase text-sm sm:text-base md:text-1xl   py-1 sm:py-2 md:py-3 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Atual Trabalho"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-4 text-[10px] sm:text-xs md:text-sm xl:text-base h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#8257e5]/80 pr-5">
          {experience.points &&
            experience.points.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
