import { Timeline, TimelineCard } from "@/components/reUse/Timeline";
import React from "react";

function FeaturedProjects() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div className="">
          <TimelineCard
            title="Mountain Adventure"
            description="Explored the breathtaking peaks and valleys of the Swiss Alps. An unforgettable journey through pristine wilderness and stunning landscapes."
            imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            primaryAction="View Details"
            secondaryAction="Book Now"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="">
          <TimelineCard
            title="Ocean Expedition"
            description="Discovered the hidden treasures of the deep blue sea. Witnessed marine life in its natural habitat and experienced the serenity of endless waters."
            imageUrl="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            primaryAction="Explore"
            secondaryAction="Learn More"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="">
          <TimelineCard
            title="Desert Safari"
            description="Ventured into the vast golden dunes of the Sahara. Experienced the magic of desert sunsets and the silence of endless sand."
            imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop"
            primaryAction="Discover"
            secondaryAction="Gallery"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Timeline data={timelineData} />
    </div>
  );
}

export default FeaturedProjects;
