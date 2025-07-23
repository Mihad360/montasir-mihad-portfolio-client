"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useAnimation,
  Variants,
} from "motion/react";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Lens } from "./Lens";
import { div } from "framer-motion/client";
import AnimateButton from "./AnimateButton";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div ref={containerRef} className="w-full font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-5xl">
          Featured Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt- md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-[40%]">
              {/* <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div> */}
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>
            <div className="relative w-full">
              <h3 className="md:hidden block text-2xl text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        {/* <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-white/20 rounded-full"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

// Timeline Card Component with Lens
export const TimelineCard = ({
  title,
  description,
  imageUrl,
  primaryAction,
  secondaryAction,
}: {
  title: string;
  description: string;
  imageUrl: string;
  primaryAction: string;
  secondaryAction: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
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
        <motion.div variants={contentVariants}>
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
          className="px-6 pb-6 space-x-4 flex "
        >
          <AnimateButton
            icon={<ExternalLink className="text-gray-500 w-5" />}
            text="Live Link"
            className="text-base font-medium w-20"
          ></AnimateButton>
          <Link href="/about">
            <Button
              variant="secondary"
              className="border border-[#06B6D4] text-white hover:bg-[#06B6D4] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Eye /> See Details
            </Button>
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  );
};
