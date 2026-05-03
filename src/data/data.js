export const experiences = [
  {
    title: "Software Engineer",
    company: "Infilon Technologies - Ahmedabad",
    duration: "May 2025 - Present",
    description: [
      "Developed and enhanced a production-level React Native application by implementing multiple core features, including social functionalities (post, like, comment, share) and live location tracking.",
      "Implemented push notifications using Firebase Cloud Messaging (FCM) and configured native modules for Android and iOS, enabling real-time notification delivery across the application.",
      "Managed client-side data using multiple storage solutions (AsyncStorage, MMKV, SQL) and utilized Zustand and Redux for state management along with Axios for API integration.",
      "Optimized performance by reducing unnecessary re-renders and API calls, improving app responsiveness and overall user experience.",
    ],
    category: "Full-time",
    status: "Current",
  },
  {
    title: "Saurashtra Oil Website",
    company: "Freelance Work",
    duration: "Feb 2025 - March 2025",
    description: [
      "Developed a responsive React-based website for a groundnut oil manufacturing company, showcasing the brand, production process, and product offerings with a clean and minimalist design.",
    ],
    link: "https://saurashtraoil.com/",
    category: "Freelance",
    status: "Completed",
  },
  {
    title: "Trainee Software Engineer",
    company: "Sapphire Software Solutions - Ahmedabad",
    duration: "Nov 2024 - April 2025",
    description: [
      "Gained hands-on experience in web design through real-world projects, enhancing responsive UI/UX and applying industry best practices through continuous learning.",
      "Developed and maintained scalable MERN stack applications, leveraging Node.js and Express.js to build secure APIs and MongoDB to manage datasets with over 10,000 records in production.",
      "Built and integrated RESTful APIs using Node.js and Express.js, streamlining frontend-backend communication and reducing data processing time by up to 35%.",
    ],
    category: "Full-time",
    status: "Completed",
  },
  {
    title: "Web Developer Intern",
    company: "Alpha-e Barcode Solutions - Ahmedabad",
    duration: "Jan 2024 - Aug 2024",
    description: [
      "Built static and responsive websites using HTML5 and CSS3 with clean layouts and cross-browser compatibility.",
      "Developed dynamic features using JavaScript and optimized SQL databases, improving query efficiency by 30% through indexing and relational joins.",
      "Generated data-driven reports using SAP Crystal Reports and managed databases with SQL Server Management Studio, improving reporting workflows and data accessibility.",
    ],
    category: "Internship",
    status: "Completed",
  },
  {
    title: "Front-end Development Intern",
    company: "StackDot - Ahmedabad",
    duration: "May 2023 - Jun 2023",
    description: [
      "Learned to design and develop websites using HTML, CSS.",
      "Assisted under senior web developers in the design and development of websites using HTML, CSS, and JavaScript.",
    ],
    // link: "https://drive.google.com/file/d/1P-S0HE5uJVzzqUTZ_CjhFe6J3JjeCXdh/view?usp=drive_link",
    category: "Internship",
    status: "Completed",
  },
];

export const skills = [
  { name: "HTML", src: "/skills/html.png", category: "Frontend" },
  { name: "CSS", src: "/skills/css.png", category: "Frontend" },
  { name: "JavaScript", src: "/skills/javascript.png", category: "Frontend" },
  { name: "TypeScript", src: "/skills/ts.png", category: "Frontend" },
  { name: "React", src: "/skills/react.png", category: "Frontend" },
  { name: "React Native", src: "/skills/rn.png", category: "Mobile" },
  { name: "TailwindCSS", src: "/skills/tailwind.png", category: "Frontend" },
  { name: "Node.js", src: "/skills/node.png", category: "Backend" },
  { name: "Express.js", src: "/skills/express.png", category: "Backend" },
  { name: "MongoDB", src: "/skills/mongodb.png", category: "Database" },
  { name: "SQL", src: "/skills/sql.png", category: "Database" },
  { name: "SQL Server", src: "/skills/ssms.png", category: "Database" },
  { name: "Java", src: "/skills/java.png", category: "Backend" },
  { name: "REST APIs", src: "/skills/rest_api.png", category: "Backend" },
  { name: "Redux", src: "/skills/redux.png", category: "State Management" },
  { name: "Zustand", src: "/skills/zustand.svg", category: "State Management" },
  {
    name: "Android Studio",
    src: "/skills/android_studio.svg",
    category: "Tools",
  },
  { name: "Xcode", src: "/skills/xcode.png", category: "Tools" },
  { name: "Git", src: "/skills/git.png", category: "Tools" },
];

export const allProjects = [
  {
    imageUrl: "project/building.jpg",
    title: "Habit Tracker App",
    description:
      "Developing a cross-platform mobile application using React Native for tracking daily habits with an intuitive and user-friendly UI styled using NativeWind. Integrated Supabase for authentication and habit analytics with charts.",
    url: "https://github.com/surajdudhatra02",
    tech: ["React Native", "NativeWind", "Supabase", "Zustand"],
    featured: true,
  },
  {
    imageUrl: "project/saurashtra_oil.jpg",
    title: "Saurashtra Groundnut Oil Website",
    description:
      "Developed a responsive website using Next.js for a groundnut oil manufacturing company, ensuring fast load times and SEO-friendly structure with modern UI components.",
    url: "https://saurashtraoil.com/",
    tech: ["Next.js", "React", "TailwindCSS"],
    featured: true,
  },
  {
    imageUrl: "project/The Pet Management.png",
    title: "Pet Management App",
    description:
      "A modern web application built with MERN stack for managing pet care and services",
    url: "https://github.com/surajdudhatra02/Pet-Management-App",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    featured: true,
  },
  {
    imageUrl: "project/My-Chat-App.png",
    title: "My Chat App",
    description:
      "Real-time chat application with modern UI and seamless communication features",
    url: "https://github.com/surajdudhatra02/My-Chat-App-using-MERN-Stack",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    featured: true,
  },
  {
    imageUrl: "project/MyDocument.jpg",
    title: "My Document",
    description:
      "Document management system with secure file handling and collaboration features",
    url: "https://github.com/surajdudhatra02/My-Document",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    featured: true,
  },
  {
    imageUrl: "project/Restaurant.jpg",
    title: "Restaurant Management System",
    description:
      "Complete restaurant management solution with order tracking and inventory",
    url: "https://github.com/surajdudhatra02/My-Restaurant-",
    tech: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    imageUrl: "project/My-Snake-Game.png",
    title: "My Snake Game",
    description:
      "Classic snake game with modern graphics and smooth gameplay mechanics",
    url: "https://github.com/surajdudhatra02/my-snake-game-using-python",
    tech: ["Python", "Pygame"],
  },
  {
    imageUrl: "project/My-Weather-App.png",
    title: "My Weather App",
    description:
      "Weather forecasting application with real-time data and beautiful interface",
    url: "https://github.com/surajdudhatra02/Weather-App-using-Python",
    tech: ["Python", "API Integration"],
  },
  {
    imageUrl: "project/todo.jpg",
    title: "To Do Website",
    description:
      "Task management web application with intuitive design and productivity features",
    url: "https://github.com/surajdudhatra02/My-To-Do",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    imageUrl: "project/qr-code.jpg",
    title: "QR Code Generator",
    description: "Dynamic QR code generation tool with customization options",
    url: "https://github.com/surajdudhatra02/QR-Code-Generator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    imageUrl: "project/calc.jpg",
    title: "Calculator",
    description:
      "Advanced calculator with scientific functions and elegant design",
    url: "https://github.com/surajdudhatra02/Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    imageUrl: "project/Task management.jpg",
    title: "Task Management System",
    description:
      "Comprehensive task tracking system with team collaboration features",
    url: "https://github.com/surajdudhatra02/Task-Generator-using-Node.js-",
    tech: ["JavaScript", "Node.js"],
  },
  {
    imageUrl: "project/profile.jpg",
    title: "Profile Generator",
    description:
      "Dynamic profile generation system with customizable templates",
    url: "",
    tech: ["JavaScript", "Node.js", "MongoDB"],
  },
];
