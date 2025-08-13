"use client";
import Banner from "@/components/HomePages/Banner";
import FeaturedProjects from "@/components/HomePages/FeaturedProjects";
import Skills from "@/components/HomePages/Skill";
import React from "react";

const MainPage = () => {
  return (
    <div className="">
      <Banner />
      <FeaturedProjects />
      <Skills/>
    </div>
  );
};

export default MainPage;
