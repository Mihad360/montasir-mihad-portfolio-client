export const projectsData = [
  {
    id: 1,
    title: "EasyBank",
    brief:
      "A modern digital banking platform with secure transactions, responsive design, and easy account management.",
    description: [
      "Built a sleek and responsive front end using React and Tailwind CSS, providing users with a smooth and intuitive banking experience.",
      "Implemented secure authentication, transaction management, and real-time account balance updates using Node.js and MongoDB.",
      "Focused on backend API optimization to ensure secure, fast, and reliable data processing for financial operations.",
    ],
    challenges: [
      {
        title: "Secure Financial Transactions",
        description:
          "Ensuring secure transfers and withdrawals with proper authentication and encryption.",
      },
      {
        title: "Real-time Data Updates",
        description:
          "Implementing instant updates for account balances and transaction history.",
      },
      {
        title: "User-Friendly Design",
        description:
          "Designing an interface that’s visually appealing while keeping accessibility and usability in mind.",
      },
    ],
    outcome:
      "Successfully launched with secure and responsive banking features, delivering smooth transactions and a great user experience.",
    keyFeatures: [
      "Responsive UI/UX",
      "Secure authentication system",
      "Real-time balance updates",
      "Transaction history tracking",
      "Optimized backend APIs",
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581093588401-17d6685f0f79?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/Mihad360/easy-banking-client",
    githubServer: "https://github.com/Mihad360/easy-banking-server",
    liveUrl: "https://easy-banking-client.vercel.app/",
    durationInDays: 40,
    isGroupProject: true,
    team: 3,
    stars: 112,
    featured: true,
  },
  {
    id: 2,
    title: "Task Manager",
    brief:
      "A productivity tool for organizing tasks with priority settings, deadlines, and real-time updates.",
    description: [
      "Developed a task management platform with React and Tailwind CSS for responsive and efficient user interaction.",
      "Integrated MongoDB for storing tasks with details like priority, deadlines, and completion status.",
      "Implemented drag-and-drop task management and filtering options for better workflow organization.",
    ],
    challenges: [
      {
        title: "Task Synchronization",
        description:
          "Keeping tasks synced in real time across multiple devices without performance drops.",
      },
      {
        title: "Advanced Filtering",
        description:
          "Building dynamic filters to sort tasks by deadlines, priority, and status.",
      },
      {
        title: "UI Simplicity",
        description:
          "Ensuring the interface stays clutter-free while adding powerful features.",
      },
    ],
    outcome:
      "Provided users with an easy-to-use task tracking tool, increasing productivity and workflow efficiency.",
    keyFeatures: [
      "Drag-and-drop task management",
      "Deadline and priority tracking",
      "Task filtering and sorting",
      "Responsive interface",
      "Secure authentication",
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202222206-fc2a2a1c9aab?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/Mihad360/task-manager-client",
    githubServer: "https://github.com/Mihad360/task-manager-server",
    liveUrl: "https://task-manager-client-nine-phi.vercel.app/",
    durationInDays: 30,
    isGroupProject: false,
    team: 1,
    stars: 98,
    featured: false,
  },
  {
    id: 3,
    title: "Finance Visualizer",
    brief:
      "A financial dashboard for tracking income, expenses, and budget with interactive visual charts.",
    description: [
      "Built a financial visualization tool using React and Tailwind CSS with real-time graph rendering.",
      "Integrated MongoDB and Node.js to store and manage user financial data securely.",
      "Used data visualization techniques with charts to help users analyze financial patterns.",
    ],
    challenges: [
      {
        title: "Data Accuracy",
        description:
          "Ensuring financial calculations remain precise during data aggregation and visualization.",
      },
      {
        title: "Dynamic Charts",
        description:
          "Making charts update instantly based on user inputs without lag.",
      },
      {
        title: "Security Concerns",
        description:
          "Protecting sensitive financial data with encryption and secure APIs.",
      },
    ],
    outcome:
      "Delivered an accurate and visually engaging financial tracker that simplifies money management for users.",
    keyFeatures: [
      "Interactive charts",
      "Expense and income tracking",
      "Budget setting",
      "Real-time updates",
      "Secure data storage",
    ],
    images: [
      "https://images.unsplash.com/photo-1581091215360-4ab9d87c7d0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/Mihad360/finance-equalizer-client",
    githubServer: "https://github.com/Mihad360/finance-equalizer-server",
    liveUrl: "https://finance-visualizer-client.vercel.app/",
    durationInDays: 35,
    isGroupProject: false,
    team: 1,
    stars: 87,
    featured: true,
  },
  {
    id: 4,
    title: "ShopHub",
    brief:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    description: [
      "Designed a responsive shopping platform using React and Tailwind CSS with an intuitive UI.",
      "Integrated MongoDB and Node.js backend for product management, order tracking, and secure payments.",
      "Focused on optimizing product search and filtering to improve customer experience.",
    ],
    challenges: [
      {
        title: "Inventory Management",
        description:
          "Ensuring accurate product availability updates in real time.",
      },
      {
        title: "Secure Checkout",
        description:
          "Implementing secure payment handling with proper validation.",
      },
      {
        title: "Performance Optimization",
        description:
          "Handling high traffic and large product databases without slowdowns.",
      },
    ],
    outcome:
      "Delivered a reliable and fast online store experience with secure transactions and real-time inventory updates.",
    keyFeatures: [
      "Product search and filtering",
      "Cart and checkout system",
      "Order tracking",
      "Responsive design",
      "Secure authentication",
    ],
    images: [
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589389939653-04f667d2f990?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598738866936-c142f9585197?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/Mihad360/shopping-hub",
    githubServer: "https://github.com/Mihad360/shopping-hub-server",
    liveUrl: "https://shopping-hub-mu.vercel.app/",
    durationInDays: 42,
    isGroupProject: true,
    team: 2,
    stars: 115,
    featured: true,
  },
  {
    id: 5,
    title: "ISSClub",
    brief:
      "An event and member management platform for clubs and organizations with role-based access.",
    description: [
      "Developed a full-stack club management platform using React and Tailwind CSS for an engaging interface.",
      "Integrated backend APIs for event creation, member registration, and communication tools.",
      "Implemented role-based access for admins, members, and event organizers.",
    ],
    challenges: [
      {
        title: "Role-Based Access Control",
        description:
          "Ensuring different user types have appropriate permissions.",
      },
      {
        title: "Event Management",
        description:
          "Building a system to manage events, RSVPs, and notifications in real time.",
      },
      {
        title: "User Engagement",
        description:
          "Creating interactive dashboards that encourage active participation.",
      },
    ],
    outcome:
      "Helped clubs streamline event organization and member communication, increasing engagement and participation.",
    keyFeatures: [
      "Role-based dashboards",
      "Event creation and management",
      "Member registration",
      "Notifications and alerts",
      "Secure authentication",
    ],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562072548-9e23e6a43e9a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091012184-5c69a1e8b7e6?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubClient: "https://github.com/Mihad360/fei-client",
    githubServer: "https://github.com/Mihad360/fei-server",
    liveUrl: "https://fei-client.vercel.app/",
    durationInDays: 50,
    isGroupProject: true,
    team: 4,
    stars: 130,
    featured: true,
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
