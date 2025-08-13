"use client";
import {
  motion,
  useInView,
  useAnimation,
  Variants,
  cubicBezier,
} from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Lens } from "./Lens";
import Link from "next/link";
import { ShimmerButton } from "./ShimmerButton";
import { Eye } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      ref={containerRef}
      className="w-full font-sans md:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-7xl mx-auto pt-16 px-4 md:px-8 lg:px-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-xl text-center md:text-4xl mb-4 text-white dark:text-white max-w-5xl"
          variants={itemVariants}
        >
          <span className="text-white font-bold">Featured</span>{" "}
          <span className="text-gray-500 font-medium">Projects</span>
        </motion.h2>
        <motion.p
          className="text-neutral-500 text-center dark:text-neutral-300 text-sm md:text-base "
          variants={itemVariants}
        >
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
            variants={itemVariants}
            custom={index}
            transition={{ delay: index * 0.1 }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-[40%] pb-[200px]">
              <motion.h3
                className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.title}
              </motion.h3>
            </div>
            <div className="relative w-full">
              <motion.h3
                className="md:hidden block text-2xl text-left font-bold text-neutral-500 dark:text-neutral-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const TimelineCard = ({
  title,
  description,
  imageUrl,
  liveLink,
  primaryAction,
  secondaryAction,
  id,
}: {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  primaryAction: string;
  secondaryAction: string;
  id: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const controls = useAnimation();

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: 15,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3, // Added delay to match banner animation timing
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: cubicBezier(0.25, 0.1, 0.25, 1),
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 1000 }}
      className="origin-center"
    >
      <Card className="relative w-full shadow-lg border border-white/20 overflow-hidden">
        <motion.div variants={imageVariants}>
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                width={500}
                height={300}
                className="w-full h-72 object-cover"
              />
            </Lens>
          </CardHeader>
        </motion.div>

        <motion.div variants={contentVariants}>
          <CardContent className="p-4">
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardContent>
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="px-6 pb-6 space-x-4 flex items-center"
        >
          <Link href={liveLink} target="_blank">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {primaryAction}
              </span>
            </ShimmerButton>
          </Link>
          <Link href={`/projects/${id}`}>
            <Button
              variant="secondary"
              className="border border-[#06B6D4] text-white hover:bg-[#06B6D4] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Eye /> {secondaryAction}
            </Button>
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  );
};
