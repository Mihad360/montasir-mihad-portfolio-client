"use client";
import AnimateButton from "@/components/reUse/AnimateButton";
import { ChevronDown, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { AuroraText } from "@/components/reUse/AnimateText";

const Banner = () => {
  const text = "SCROLL TO EXPLORE -";
  const letters = text.split("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floating: Variants = {
    initial: { y: -10 },
    animate: {
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const spin: Variants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulse: Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      className="relative overflow-hidden pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl z-10 pointer-events-none tracking-wide font-extrabold "
        style={{
          WebkitTextStroke: "3px gray",
          color: "transparent",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Hello
      </motion.p>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] max-w-7xl mx-auto"></div>

      {/* Main Heading */}
      <div className="max-w-5xl mx-auto pt-48">
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="">
            <motion.h1 className="text-left relative z-10" variants={item}>
              <motion.span
                className="tracking-wide font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                  I&apos;m <AuroraText>Montasir Mihad</AuroraText>
                </span>
              </motion.span>
            </motion.h1>

            <motion.h1
              className="relative z-10 pb-5 flex items-center justify-between"
              variants={item}
            >
              <motion.span
                className="text-white text-7xl font-bold"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Creating Solutions for <br /> Development Process
              </motion.span>

              <motion.div
                className="relative w-40 h-40 flex items-center justify-center"
              >
                {/* Spinning Circular Text */}
                <motion.div
                  className="absolute inset-0"
                  variants={spin}
                  initial="initial"
                  animate="animate"
                >
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      className="absolute text-white text-sm font-medium"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `rotate(${
                          (index * 360) / letters.length
                        }deg) translate(0, -80px)`,
                        transformOrigin: "0 0",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.05 + 0.5,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Center Arrow */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={pulse}
                  initial="initial"
                  animate="animate"
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.h1>

            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <AnimateButton
                icon={<Download className="text-gray-500 w-5" />}
                text="Download Resume"
                className="text-base font-medium w-40 py-2 z-30"
              ></AnimateButton>
              <motion.div
                className="ml-80 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                I transform ideas into impactful digital experiences, delivering
                innovative solutions that elevate brands and captivate audiences
                around the world.
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="md:hidden flex items-center justify-center">
        <motion.div
          className="relative w-48 h-48 flex items-center justify-center"
          variants={floating}
          initial="initial"
          animate="animate"
        >
          {/* Circular Spinning Text */}
          <motion.div
            className="absolute inset-0"
            variants={spin}
            initial="initial"
            animate="animate"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="absolute text-white text-sm font-medium tracking-wider"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${
                    (index * 360) / letters.length
                  }deg) translate(0, -85px)`,
                  transformOrigin: "0 0",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.5,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Center Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute bottom-0 left-0 md:block hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute bottom-[30%] left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute top-0 right-0 md:block hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
    </motion.div>
  );
};

export default Banner;
