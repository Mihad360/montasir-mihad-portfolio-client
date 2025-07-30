export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    brief:
      "A scalable full-stack e-commerce solution with modern design, payment integration, and admin tools.",
    description: [
      "Developed a responsive and user-friendly front end using React and Tailwind CSS, ensuring seamless navigation and fast load times.",
      "Integrated Stripe for secure payment processing and developed an intuitive admin dashboard for managing products, users, and orders.",
      "Focused on optimizing backend performance using Node.js and MongoDB, with secure authentication and efficient API design.",
    ],
    challenges: [
      {
        title: "Handling Secure Payments",
        description:
          "Integrating Stripe API required managing tokenization, edge cases, and payment status handling.",
      },
      {
        title: "Admin Access Control",
        description:
          "Creating a role-based access system that is both secure and flexible for future admin roles.",
      },
      {
        title: "Product Scalability",
        description:
          "Designing the database schema to support thousands of products with efficient querying.",
      },
    ],
    outcome:
      "Successfully launched with over 1,000 products managed via dashboard, and a checkout success rate of 98%.",
    keyFeatures: [
      "Fully responsive UI/UX",
      "Stripe payment gateway",
      "Role-based admin panel",
      "MongoDB aggregation for stats",
      "Real-time order tracking",
    ],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/example/ecommerce-client",
    githubServer: "https://github.com/example/ecommerce-server",
    liveUrl: "https://ecommerce-demo.vercel.app",
    durationInDays: 45,
    isGroupProject: true,
    team: 3,
    stars: 124,
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    brief:
      "An intelligent dashboard providing real-time AI-driven business insights and interactive data visualization.",
    description: [
      "Built with Next.js for frontend and Python backends for ML processing, focusing on real-time data handling and insights.",
      "Implemented TensorFlow models for predictive analytics and integrated D3.js for custom visualizations.",
      "Used PostgreSQL to manage large datasets and developed APIs to fetch live data based on user-selected KPIs.",
    ],
    challenges: [
      {
        title: "Real-Time Model Integration",
        description:
          "Integrating TensorFlow predictions on-the-fly without degrading performance was a key technical hurdle.",
      },
      {
        title: "Data Visualization Complexity",
        description:
          "Creating D3.js charts that respond dynamically to AI outputs required fine-tuned state management.",
      },
      {
        title: "Data Security",
        description:
          "Ensuring all analytics data was encrypted and handled securely during transmission and storage.",
      },
    ],
    outcome:
      "The dashboard enabled a 30% faster decision-making process for businesses with automated AI insights.",
    keyFeatures: [
      "AI-based predictive analytics",
      "D3.js custom charts",
      "Live KPI filtering",
      "Secure PostgreSQL data layer",
      "Admin interface for model retraining",
    ],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1665686301997-43fdbef3e9ff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    category: "AI/ML",
    status: "In Progress",
    githubClient: "https://github.com/example/ai-dashboard-client",
    githubServer: "https://github.com/example/ai-dashboard-server",
    liveUrl: "https://ai-dashboard-demo.vercel.app",
    durationInDays: 60,
    isGroupProject: true,
    team: 5,
    stars: 89,
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    brief:
      "A mobile-first cross-platform app that tracks fitness goals, nutrition, and wearable device data in real-time.",
    description: [
      "Designed a mobile app using React Native and Expo, with Firebase for backend and real-time database sync.",
      "Implemented workout plans, daily activity tracking, and goal-setting functionality with Redux for state control.",
      "Integrated wearable device APIs for live step tracking and health data collection with robust error handling.",
    ],
    challenges: [
      {
        title: "Cross-Platform Consistency",
        description:
          "Ensuring a smooth UI across iOS and Android required platform-specific component optimizations.",
      },
      {
        title: "Real-Time Sync",
        description:
          "Maintaining real-time sync between multiple devices with Firebase needed optimized listener setups.",
      },
      {
        title: "Wearable Device Integration",
        description:
          "Handling third-party health APIs required managing token lifecycles and permission prompts cleanly.",
      },
    ],
    outcome:
      "Over 5,000+ downloads and featured on a health blog for best user experience among fitness apps.",
    keyFeatures: [
      "Real-time activity sync",
      "Wearable API integration",
      "Firebase Authentication",
      "Goal and nutrition tracking",
      "Cross-platform via Expo",
    ],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    category: "Mobile",
    status: "Completed",
    githubClient: "https://github.com/example/fitness-client",
    githubServer: "https://github.com/example/fitness-server",
    liveUrl: "https://fitness-app-demo.com",
    durationInDays: 35,
    isGroupProject: false,
    team: 1,
    stars: 156,
    featured: false,
  },
];

export const technologyOptions = [
  { label: "All Technologies", value: "all" },
  { label: "React", value: "React" },
  { label: "Next.js", value: "Next.js" },
  { label: "Node.js", value: "Node.js" },
  { label: "Python", value: "Python" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "PostgreSQL", value: "PostgreSQL" },
  { label: "Firebase", value: "Firebase" },
  { label: "React Native", value: "React Native" },
];
