// components/SkillMarquee.tsx
"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiApple,
  SiAngular,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "Figma", icon: SiFigma },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Apple", icon: SiApple },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
];

const Skills = () => {
  const skillChunks = [];
  for (let i = 0; i < skills.length; i += 5) {
    skillChunks.push(skills.slice(i, i + 5));
  }

  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      {/* Smooth Infinite Marquee */}
      <div className="absolute w-full h-12 -rotate-3 top-1/2 -translate-y-1/2 overflow-hidden">
        <div className="whitespace-nowrap flex items-center h-full border-t-2 border-b-2 border-white/20">
          {/* Double the content for seamless looping */}
          {[...Array(4)].map((_, loopIndex) => (
            <motion.div
              key={loopIndex}
              className="inline-flex items-center"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {skills.map((skill, index) => (
                <span key={`${loopIndex}-${index}`} className="mx-8 inline-flex items-center">
                  <span className="text-red-400">•</span>
                  <span className="ml-2 text-white/70 text-xl font-medium tracking-wider">
                    {skill.name.toUpperCase()}
                  </span>
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consistent Skill Circles */}
      <div className="flex flex-col gap-8 z-10">
        {skillChunks.map((chunk, chunkIndex) => (
          <motion.div 
            key={chunkIndex}
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: chunkIndex * 0.1 }}
          >
            {chunk.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-full w-24 h-24 flex flex-col items-center justify-center 
                          bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg overflow-hidden relative"
              >
                {/* Skill Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <skill.icon className="text-3xl text-white mb-1" />
                  <span className="text-xs font-medium text-white/90 tracking-wide mt-1">
                    {skill.name}
                  </span>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;