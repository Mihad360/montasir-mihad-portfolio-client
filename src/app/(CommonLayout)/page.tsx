// "use client";
import Banner from "@/pages/HomePages/Banner";
import FeaturedProjects from "@/pages/HomePages/FeaturedProjects";
import Skills from "@/pages/HomePages/Skill";
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
