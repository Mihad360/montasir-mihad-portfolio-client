"use client";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/IMG-20250331-WA0261.jpg";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa6";
import { ArrowRight, MailsIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { LiaLinkedin } from "react-icons/lia";

const AboutBanner = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex pt-28">
        <div className="w-[70%] mr-6">
          <motion.div
            className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] absolute top-16 left-10 z-0 md:block hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          />

          <div className="size-full items-center justify-center overflow-hidden pt-8 z-20">
            <div>
              <p className="text-[3.5rem] font-semibold">
                About Me<span className="">.</span>
              </p>
            </div>

            <div>
              <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
                A Full Stack developer with{" "}
                <ArrowRight className="text-[#06B6D4]" />
              </h2>
            </div>

            <div>
              <div className="mt-6">
                <p>
                  Over the past 2 years, I have been consistently practicing and
                  learning web development, starting from backend fundamentals
                  and gradually transitioning to crafting dynamic, responsive,
                  and user-focused front-end experiences. My journey began with
                  building solid server-side logic and working with databases,
                  which has given me a strong understanding of full-stack
                  workflows. I specialize in developing clean, efficient, and
                  accessible user interfaces, with a strong focus on performance
                  and modern design principles. I am always learning and
                  adapting to new technologies to stay productive and efficient
                  in real-world development environments.
                </p>
              </div>
            </div>

            <div>
              <div className="p-5 pl-0 space-x-4">
                <Button className="mt-[1.6rem] border border-white -rotate-12 text-xl rounded-2xl cursor-pointer hover:text-[#06B6D4] duration-200 transition ease-in-out">
                  <span className="text-[#06B6D4]">
                    <FaFacebook />
                  </span>{" "}
                  Facebook
                </Button>
                <Button className="mt-[1.6rem] border border-white rotate-12 text-xl rounded-2xl cursor-pointer hover:text-[#06B6D4] duration-200 transition ease-in-out">
                  <span className="text-[#06B6D4]">
                    <MailsIcon />
                  </span>{" "}
                  Mail Me
                </Button>
                <Button className="mt-[1.6rem] border border-white -rotate-12 text-xl rounded-2xl cursor-pointer hover:text-[#06B6D4] duration-200 transition ease-in-out">
                  <span className="text-[#06B6D4]">
                    <BsGithub />
                  </span>{" "}
                  Github
                </Button>
                <Button className="mt-[1.6rem] border border-white rotate-12 text-xl rounded-2xl cursor-pointer hover:text-[#06B6D4] duration-200 transition ease-in-out">
                  <span className="text-[#06B6D4]">
                    <LiaLinkedin />
                  </span>{" "}
                  LinkedIn
                </Button>
                {/* <Button className="mt-[1.6rem] border border-white -rotate-12 text-xl rounded-2xl cursor-pointer hover:text-[#06B6D4] duration-200 transition ease-in-out">
                  <span className="text-[#06B6D4]">
                    <GrProjects />
                  </span>{" "}
                  Projects
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <Image
            src={aboutImage}
            className="rounded-xl h-[450px] object-cover"
            alt="about image"
            width={1000}
            height={1200}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
