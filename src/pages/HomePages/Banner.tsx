"use client";

import { AnimatedGradientText } from "@/components/reUse/AnimatedGradientText";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MdOutlineRoundaboutRight } from "react-icons/md";

const Banner = () => {
  const text = "SCROLL TO EXPLORE -";
  const letters = text.split("");
  return (
    <div className="relative overflow-hidden">
      <p
        className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl z-10 pointer-events-none tracking-wide font-extrabold blur-xs"
        style={{
          WebkitTextStroke: "3px gray", // thicker stroke for more gap
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
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] h-12 w-96 cursor-pointer">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                <MdOutlineRoundaboutRight className="font-medium text-lg" />
                <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <AnimatedGradientText className="text-base font-medium">
                  About Me
                </AnimatedGradientText>
                <ChevronRight
                  className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>
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
