import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import React, { useEffect, useState } from "react";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {isMobile ? (
        <>
          <div className="flex flex-row items-center">
            {socials?.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
              />
            ))}
          </div>

          <div className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
              url="#contact"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Contact
            </p>
          </div>
        </>
      ) : (
        <>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-row items-center"
          >
            {socials?.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
              url="#contact"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Contact
            </p>
          </motion.div>
        </>
      )}
    </header>
  );
}
