"use client";
import { Timeline, TimelineCard } from "@/components/reUse/Timeline";
import { useGetProjectsQuery } from "@/lib/redux/api/projectApi";
import Loading from "@/shared/Loading";
import { IProject } from "@/utils/types/project.types";
import React from "react";

function FeaturedProjects() {
  const { data: allProjects, isLoading } = useGetProjectsQuery(undefined);
  const projects = allProjects?.data;

  // Filter featured projects, take max 3
  const featuredProjects = projects
    ?.filter((p: IProject) => p.featured === true)
    ?.slice(0, 3);

  // Map them to timelineData
  const timelineData =
    featuredProjects?.map((project: IProject) => ({
      title: project?.title || "",
      content: (
        <TimelineCard
          id={project?._id}
          title={project?.title}
          description={project?.brief}
          imageUrl={project?.images?.[0]}
          liveLink={project?.liveUrl}
          primaryAction="Live Site"
          secondaryAction="View Details"
        />
      ),
    })) || [];

  return (
    <div className="max-w-5xl mx-auto">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : timelineData.length > 0 ? (
        <Timeline data={timelineData} />
      ) : (
        <p className="text-center text-gray-500">
          No featured projects available.
        </p>
      )}
    </div>
  );
}

export default FeaturedProjects;
