"use client"
import AnimateButton from "@/components/reUse/AnimateButton";
import { ChevronDown, Download } from "lucide-react";

const Banner = () => {
  const text = "SCROLL TO EXPLORE -";
  const letters = text.split("");
  return (
    <div className="relative overflow-hidden">
      <p
        className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl z-10 pointer-events-none tracking-wide font-extrabold blur-xs"
        style={{
          WebkitTextStroke: "3px gray",
          color: "transparent",
        }}
      >
        Hello
      </p>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] max-w-7xl mx-auto"></div>

      {/* Main Heading */}
      <div className="max-w-5xl mx-auto pt-52">
        <div className="">
          <div className="">
            <h1 className="text-left pb-4">
              I&apos;m{" "}
              <span className="text-[#06B6D4] tracking-wide font-semibold">
                Montasir Mihad
              </span>
            </h1>
            <h1 className=" relative z-10 pb-8 flex items-center justify-between">
              <span className="text-white text-7xl font-bold">
                Creating Solutions for <br /> Development Process
              </span>
              <div className="relative w-48 h-48">
                {/* Circular Text */}
                <div className="absolute inset-0 animate-spin-slow origin-center">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="absolute text-white text-sm font-medium"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `rotate(${
                          (index * 360) / letters.length
                        }deg) translate(0, -70px)`,
                        transformOrigin: "0 0",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </div>

                {/* Center Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
              </div>
            </h1>
            <div className="flex justify-between">
              <AnimateButton
                icon={<Download className="text-gray-500 w-5" />}
                text="Download Resume"
                className="text-base font-medium w-40 py-2"
              ></AnimateButton>
              <div className="ml-80 text-gray-400">
                I transform ideas into impactful digital experiences, delivering
                innovative solutions that elevate brands and captivate audiences
                around the world.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden items-center justify-center flex">
        <div className="relative w-48 h-48">
          {/* Circular Text */}
          <div className="absolute inset-0 animate-spin-slow origin-center">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="absolute text-white text-sm font-medium tracking-wider"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${
                    (index * 360) / letters.length
                  }deg) translate(0, -70px)`,
                  transformOrigin: "0 0",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>

          {/* Center Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
