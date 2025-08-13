export interface IProject {
  _id: string; // MongoDB ObjectId as string
  title: string;
  brief: string;
  description: string[]; // Array of description strings
  challenges: {
    title: string;
    description: string;
  }[]; // Array of challenge objects
  outcome: string;
  keyFeatures: string[]; // Array of key features
  images: string[]; // Array of image URLs
  technologies: string[]; // Array of tech names
  category: string; // e.g., "Full Stack"
  status: string; // e.g., "Completed"
  githubClient: string; // GitHub client repo URL
  githubServer: string; // GitHub server repo URL
  liveUrl: string; // Live project URL
  durationInDays: number;
  isGroupProject: boolean;
  team: number; // Team size
  stars: number; // Popularity
  featured: boolean; // Featured in portfolio
  addedDate: string; // ISO date string
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
