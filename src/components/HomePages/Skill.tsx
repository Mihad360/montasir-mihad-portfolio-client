/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGetSkillsQuery } from "@/lib/redux/api/skillApi";
import Loading from "@/shared/Loading";
import { ISkill } from "@/utils/types/project.types";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  const { data: skillsData, isLoading } = useGetSkillsQuery(undefined);
  const skills = skillsData?.data;
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [chunkSize, setChunkSize] = useState(5); // Default to desktop size

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setShowContent(true), 300);

    const handleResize = () => {
      setChunkSize(window.innerWidth < 768 ? 3 : 5);
    };

    // Set initial size
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create skill chunks for responsive layout
  const skillChunks = [];
  for (let i = 0; i < skills?.length; i += chunkSize) {
    skillChunks.push(skills?.slice(i, i + chunkSize));
  }

  if (!isMounted || isLoading || !showContent) {
    return <Loading />;
  }

  return (
    <div className={`pb-12 ${theme === "dark" ? "" : "bg-gray-200"}`}>
      <h2
        className={`text-xl text-center md:text-4xl pt-12 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <span
          className={`${
            theme === "dark" ? "text-white" : "text-gray-900"
          } font-bold`}
        >
          Skills
        </span>{" "}
        <span
          className={`${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          } font-medium`}
        >
          & Expertise
        </span>
      </h2>

      <p
        className={`text-center text-sm md:text-base ${
          theme === "dark" ? "text-neutral-500" : "text-gray-600"
        }`}
      >
        I've been working on Aceternity for the past 2 years. Here's a timeline
        of my journey.
      </p>

      <div
        className={`relative py-5 pt-20 overflow-hidden flex items-center justify-center ${
          theme === "dark" ? "" : "bg-gray-200"
        }`}
      >
        {/* Desktop/Tab Marquee (rotated) - hidden on mobile */}
        {skills && skills.length > 0 && (
          <>
            {/* Mobile Marquee (straight, at top) */}
            <motion.div
              className="absolute w-full h-10 top-4 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`whitespace-nowrap flex items-center h-full border-t-2 border-b-2 ${
                  theme === "dark" ? "border-white/20" : "border-gray-500"
                }`}
              >
                {[...Array(2)]?.map((_, loopIndex) => (
                  <motion.div
                    key={`mobile-${loopIndex}`}
                    className="inline-flex items-center"
                    animate={{
                      x: ["0%", "-100%"],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {skills?.map((skill: ISkill, index: number) => (
                      <span
                        key={`mobile-${loopIndex}-${index}`}
                        className="mx-4 inline-flex items-center"
                      >
                        <span
                          className={`${
                            theme === "dark" ? "text-red-400" : "text-red-500"
                          }`}
                        >
                          •
                        </span>
                        <span
                          className={`ml-2 text-sm font-medium tracking-wider ${
                            theme === "dark" ? "text-white/70" : "text-gray-900"
                          }`}
                        >
                          {skill.name.toUpperCase()}
                        </span>
                      </span>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Desktop/Tablet Marquee (rotated) - hidden on mobile */}
            <motion.div
              className="absolute w-full h-12 -rotate-8 top-1/2 -translate-y-1/2 overflow-hidden hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`whitespace-nowrap flex items-center h-full border-t-2 border-b-2 ${
                  theme === "dark" ? "border-white/20" : "border-gray-500"
                }`}
              >
                {[...Array(4)]?.map((_, loopIndex) => (
                  <motion.div
                    key={`desktop-${loopIndex}`}
                    className="inline-flex items-center"
                    animate={{
                      x: ["0%", "-100%"],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {skills?.map((skill: ISkill, index: number) => (
                      <span
                        key={`desktop-${loopIndex}-${index}`}
                        className="mx-8 inline-flex items-center"
                      >
                        <span
                          className={`${
                            theme === "dark" ? "text-red-400" : "text-red-500"
                          }`}
                        >
                          •
                        </span>
                        <span
                          className={`ml-2 text-xl font-medium tracking-wider ${
                            theme === "dark" ? "text-white/70" : "text-gray-900"
                          }`}
                        >
                          {skill.name.toUpperCase()}
                        </span>
                      </span>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Skill Cards */}
        <div className="flex flex-col gap-8 z-10 mt-10 md:mt-0">
          {skillChunks?.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="flex gap-6 justify-center flex-wrap"
            >
              {chunk?.map((skill: ISkill, i: number) => (
                <Link href={skill.websiteLink} target="_blank" key={i}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group w-32 h-28 md:w-44 md:h-32 flex flex-col items-center justify-center 
                      shadow-lg overflow-hidden relative transition-all duration-300 ease-in-out 
                      cursor-pointer rounded-lg ${
                        theme === "dark"
                          ? "bg-[#1C1E22] hover:bg-[#181A1E] shadow-gray-800"
                          : "bg-gray-800 hover:bg-gray-900 shadow-gray-400"
                      }`}
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16"
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                      <span
                        className={`text-xs md:text-sm font-medium tracking-wide mt-1 transition-colors duration-300 ${
                          theme === "dark"
                            ? "text-[#06B6D4] group-hover:text-white"
                            : "text-[#06B6D4] group-hover:text-gray-100"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
