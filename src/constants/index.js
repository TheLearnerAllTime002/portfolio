const icon = (name) => `/assets/logos/${name}`;
const simpleIcon = (slug, color = "currentColor") => `https://cdn.simpleicons.org/${slug}/${color}`;

export const projectCategories = [
  "All",
  "AI/ML",
  "Web",
  "Research",
];

export const myProjects = [
  {
    id: 1,
    category: "AI/ML",
    title: "AI Video Factory Using Gemini API",
    description: "A pipeline that transforms ideas into animated stories with AI-generated scripts, voiceovers and rendered video.",
    subDescription: [
      "Gemini Pro API for dynamic story generation and character consistency.",
      "Google Cloud Text-to-Speech for natural voice synthesis.",
      "Asynchronous workflows for parallel processing and MoviePy rendering at 30fps.",
    ],
    href: "https://colab.research.google.com/drive/1GuA9x5kSY23anvk3ZF0WLAgbR5pBKW1Q?usp=sharing",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "/assets/projects/aivideo.png",
    tags: [
      { id: 1, name: "Python", path: icon("python.svg") },
      { id: 2, name: "Gemini", path: simpleIcon("googlegemini", "8E75B2") },
    ],
  },
  {
    id: 2,
    category: "Research",
    title: "Flappy Bird AI Using Deep Q-Network",
    description: "An autonomous Flappy Bird agent trained with a Deep Q-Network, learning gameplay through reinforcement learning and reaching scores above 30 without human input.",
    subDescription: [
      "Implemented experience replay and target networks to improve training stability and convergence.",
      "Built the agent and game environment with Python, PyTorch, reinforcement learning and Pygame.",
    ],
    href: "https://github.com/TheLearnerAllTime002/Flappy-Bird-DQN",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: icon("python.svg") },
      { id: 2, name: "PyTorch", path: simpleIcon("pytorch", "EE4C2C") },
      { id: 3, name: "Reinforcement Learning", path: icon("reinforcement-learning.svg") },
      { id: 4, name: "Pygame", path: icon("pygame.svg") },
    ],
  },
  {
    id: 10,
    category: "Research",
    title: "PMSM Thermal Prediction — Physics-Informed LSTM",
    description: "Research work on long-horizon prediction of permanent-magnet synchronous motor stator winding temperature.",
    subDescription: [
      "Developed during a summer research internship with the IEEE SMC Student Branch Chapter at KGEC.",
      "Combined LSTM forecasting with physics-informed, energy-constrained residual modelling.",
      "Evaluated long-horizon forecasts over 500 steps.",
    ],
    href: "https://github.com/TheLearnerAllTime002/PMSM-Stator-Winding-Temperature-Prediction",
    timelineBadge: { label: "Research · May–Aug 2026", target: "experience-research" },
    caseStudy: {
      problem: "Long-horizon PMSM stator winding temperature forecasts can drift and become physically implausible over hundreds of steps.",
      approach: "Developed a physics-informed LSTM and used energy-constrained residual modelling with long-horizon error analysis.",
      result: "Achieved 0.0396°C MAE and 0.99998 R²; improved 500-step forecasting stability by 72.94%.",
    },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: icon("python.svg") },
      { id: 2, name: "TensorFlow", path: icon("TensorFlow.svg") },
    ],
  },
  {
    id: 3,
    category: "Web",
    title: "El-Profesor AI",
    description: "A Money Heist-inspired AI chatbot interface with character personas and customisation features.",
    subDescription: [
      "Switch between character personas with dynamic system prompts.",
      "DeepThink mode for long-context reasoning and a command palette for fast navigation.",
      "Conversation export and optional XP-based gamification.",
    ],
    href: "https://el-profesor-ai.vercel.app/",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "/assets/projects/elprofessor.png",
    tags: [
      { id: 1, name: "Next.js", path: icon("nextjs.svg") },
      { id: 2, name: "React", path: icon("react.svg") },
      { id: 3, name: "Tailwind CSS", path: icon("tailwindcss.svg") },
    ],
  },
  {
    id: 4,
    category: "AI/ML",
    title: "MediGPT — AI Medical Assistant with RAG",
    description: "An experimental medical chatbot using retrieval augmented generation and Gemini to explore grounded responses.",
    subDescription: [
      "RAG-powered medical knowledge base with semantic retrieval.",
      "Built with Flask, LangChain, Gemini and Python.",
      "Responsive interface with dark and light themes.",
    ],
    href: "https://github.com/TheLearnerAllTime002/MediGPT",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "/assets/projects/medigpt.png",
    tags: [
      { id: 1, name: "Flask", path: icon("flask.svg") },
      { id: 2, name: "LangChain", path: icon("langchain.svg") },
      { id: 3, name: "Gemini", path: simpleIcon("googlegemini", "8E75B2") },
      { id: 4, name: "Python", path: icon("python.svg") },
    ],
  },
  {
    id: 5,
    category: "AI/ML",
    title: "Digital Face Recognition Attendance System",
    description: "An AI-powered attendance system that automates attendance tracking for 50+ users, reducing manual work and proxy attendance with 95% face recognition accuracy.",
    subDescription: [
      "Integrated real-time face detection and recognition with a secure attendance database.",
      "Stores attendance records efficiently using SQLite.",
      "Built with Python, OpenCV and Flask.",
    ],
    href: "https://github.com/TheLearnerAllTime002/Digital-Face-Recognition-Attendance-System",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: icon("python.svg") },
      { id: 2, name: "OpenCV", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { id: 3, name: "Flask", path: icon("flask.svg") },
      { id: 4, name: "SQLite", path: icon("sqlite.svg") },
    ],
  },
  {
    id: 6,
    category: "AI/ML",
    title: "Human Eye Disease Prediction System",
    description: "A deep learning system that classifies retinal OCT scans into CNV, DME, Drusen and Normal categories.",
    subDescription: [
      "Built with TensorFlow and Keras, using a CNN and custom F1-score metric.",
      "The public repository reports approximately 98.5% classification accuracy.",
      "Includes a Streamlit interface for image analysis and visualisation.",
    ],
    href: "https://github.com/TheLearnerAllTime002/Human-Eye-Disease-Prediction-System",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    caseStudy: {
      problem: "Retinal OCT scans need reliable classification across CNV, DME, Drusen and Normal categories.",
      approach: "Trained a TensorFlow/Keras CNN with transfer learning and evaluated it with a custom F1-score metric across a dataset of 80,000+ scans.",
      result: "The public repository reports approximately 98.5% classification accuracy across four classes.",
    },
    logo: "",
    image: "/assets/projects/eye_prediction.png",
    tags: [
      { id: 1, name: "TensorFlow", path: icon("TensorFlow.svg") },
      { id: 2, name: "Python", path: icon("python.svg") },
      { id: 3, name: "Keras", path: icon("Keras.svg") },
      { id: 4, name: "Streamlit", path: icon("Streamlit.svg") },
    ],
  },
  {
    id: 7,
    category: "Web",
    title: "Yatra Saathi — Your Smart Travel Companion",
    description: "A travel planning platform that combines real-time weather data with recommendations to help travellers plan smarter.",
    subDescription: [
      "Weather insights and forecast pattern analysis.",
      "Responsive SVG charts for seven-day trends.",
      "Support for 13 Indian regional languages through Google Translate.",
      "Responsive layouts for mobile and desktop.",
    ],
    href: "https://yatra-saathi.vercel.app/",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    logo: "",
    image: "/assets/projects/yatrasaathi.png",
    tags: [
      { id: 1, name: "HTML5", path: icon("html5.svg") },
      { id: 2, name: "CSS3", path: icon("css3.svg") },
      { id: 3, name: "JavaScript", path: icon("javascript.svg") },
      { id: 4, name: "Tailwind CSS", path: icon("tailwindcss.svg") },
    ],
  },
  {
    id: 8,
    category: "Web",
    title: "Intervue AI — AI-Powered Interview Preparation Platform",
    description: "A full-stack AI career platform for interview practice, resume feedback, cover letters, learning roadmaps and job application tracking.",
    subDescription: [
      "Built six career preparation capabilities for 20+ users.",
      "Designed a five-service backend around an Express API gateway, MongoDB and Redis.",
      "Integrated Groq, LangChain and LangGraph for interview generation, response evaluation, resume analysis and recommendations.",
    ],
    href: "https://github.com/TheLearnerAllTime002/Intervue-AI",
    timelineBadge: { label: "ECE · 2023–27", target: "experience-education" },
    caseStudy: {
      problem: "Interview preparation, resume feedback and application tracking often live in separate tools, making progress difficult to manage.",
      approach: "Built six career workflows on a five-service backend with an Express API gateway, MongoDB and Redis; integrated Groq with LangChain and LangGraph for interview and resume workflows.",
      result: "Delivered a unified preparation platform with six capabilities for 20+ users, including mock interviews, ATS resume analysis, cover letters and roadmaps.",
    },
    logo: "",
    image: "/assets/projects/intervue.png",
    tags: [
      { id: 1, name: "React", path: icon("react.svg") },
      { id: 2, name: "JavaScript", path: icon("javascript.svg") },
      { id: 3, name: "Firebase", path: icon("firebase.svg") },
      { id: 4, name: "LangChain", path: icon("langchain.svg") },
    ],
  },
  {
    id: 9,
    category: "AI/ML",
    title: "AgriSync — AI-Powered Smart Agriculture Platform",
    description: "A precision agriculture platform that turns soil images and lab data into nutrient insights, crop recommendations and fertilizer plans.",
    subDescription: [
      "Combines Random Forest and MobileNetV2 models for soil nutrient prediction, crop recommendation and fertilizer estimation.",
      "Integrates Python model inference with a React and Node.js application.",
      "Includes multilingual guidance, field mapping, offline text-to-speech, analysis history and an AI agriculture assistant.",
      "Developed with a four-person team for Infosys Springboard Virtual Internship 7.0.",
    ],
    href: "https://github.com/Springboard-Internship-2026/AI-Powered-Soil-Analytics-System-For-Nutrient-Assessment-And-Intelligent-Crop-Advisory-OCT-2026/tree/main",
    timelineBadge: { label: "Infosys · Sept–Nov 2026", target: "experience-infosys" },
    logo: "",
    image: "/assets/projects/agrisync.png",
    tags: [
      { id: 1, name: "React", path: icon("react.svg") },
      { id: 2, name: "Python", path: icon("python.svg") },
      { id: 3, name: "TensorFlow", path: icon("TensorFlow.svg") },
      { id: 4, name: "Scikit-learn", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    ],
  },
];

export const mySocials = [
  { name: "WhatsApp", href: "https://wa.me/918777684358", icon: "/assets/socials/whatsApp.svg" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/arjun-mitra-2761a9260/", icon: "/assets/socials/linkedIn.svg" },
  { name: "Instagram", href: "https://www.instagram.com/thelearneralltime/", icon: "/assets/socials/instagram.svg" },
  { name: "GitHub", href: "https://github.com/TheLearnerAllTime002", icon: "/assets/socials/GitHub.svg" },
];

export const experiences = [
  {
    id: "experience-education",
    title: "Engineering Student",
    job: "St. Thomas' College of Engineering & Technology",
    date: "Sept 2023 — Jul 2027",
    contents: [
      "Pursuing a B.Tech in Electronics and Communication Engineering with exposure to embedded systems, IoT, VLSI and networking.",
      "Building programming experience in C, C++ and Python, with Arduino and ESP32 projects.",
    ],
  },
  {
    id: "experience-ieee-ies",
    title: "Chair",
    job: "IEEE IES Student Chapter, STCET",
    date: "Apr 2025 — Present",
    contents: [
      "Lead workshops, mentor technical projects and grow the community around IoT, embedded systems, cloud computing and VLSI.",
      "Developed leadership, public speaking and project management skills.",
    ],
  },
  {
    id: "experience-bsnl",
    title: "Industrial Trainee",
    job: "BSNL India — Telecom Technology",
    date: "Jul 2025 — Aug 2025",
    contents: [
      "Completed hands-on training in networking, broadband systems, optical fibre communication and 4G/5G technologies.",
    ],
  },
  {
    id: "experience-ieee-chair",
    title: "Chairperson",
    job: "IEEE Student Branch, STCET",
    date: "Jan 2026 — Present",
    contents: [
      "Lead the student branch, supporting technical growth and industry–academia engagement.",
      "Represented the branch at IEEE Student Congress 2K25 and 2K26 under the IEEE Kolkata Section.",
    ],
  },
  {
    id: "experience-cocurricular",
    title: "Student Member",
    job: "Co-Curricular Activities Cell, STCET",
    date: "Jan 2026 — Present",
    contents: [
      "Selected to contribute to planning academic and co-curricular initiatives for student development.",
    ],
  },
  {
    id: "experience-gdg",
    title: "GenAI and MLOps Lead",
    job: "GDG on Campus, STCET",
    date: "Mar 2026 — Aug 2026",
    contents: [
      "Organized hands-on sessions on Generative AI, LLMs and modern AI technologies.",
      "Mentored students and promoted AI-focused learning initiatives.",
    ],
  },
  {
    id: "experience-research",
    title: "Summer Research Intern",
    job: "IEEE SMC Student Branch Chapter, KGEC",
    date: "May 2026 — Aug 2026",
    contents: [
      "Developed a physics-informed LSTM for PMSM thermal prediction, achieving 0.0396°C MAE and 0.99998 R².",
      "Improved 500-step forecasting stability by 72.94% with energy-constrained residual modelling and long-horizon error analysis.",
    ],
  },
  {
    id: "experience-google",
    title: "Google Student Ambassador",
    job: "Campus Ambassador",
    date: "Jul 2026 — Nov 2026",
    contents: [
      "Selected to promote AI adoption through technical initiatives and workshops.",
      "Organized developer events and learning sessions to grow AI awareness and student participation.",
    ],
  },
  {
    id: "experience-infosys",
    title: "AI/ML Intern",
    job: "Infosys Springboard Virtual Internship 7.0",
    date: "Sept 2026 — Nov 2026",
    contents: [
      "Collaborated in a four-person team to develop AgriSync, an AI-powered smart agriculture platform.",
      "Contributed to project development, ML integration and model development, as well as field map analysis and community features.",
    ],
  },
];

export const reviews = [
  { name: "Rahul Singh", username: "@rahul", body: "Congratulations to u and the team!", img: "https://robohash.org/jack" },
  { name: "Tanisha Ghosh", username: "@chillbabe", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://robohash.org/jill" },
  { name: "Sounak Mal", username: "@sonu", body: "Congratulations Arjun..", img: "https://robohash.org/john" },
  { name: "Surajit Singh", username: "@surajit", body: "Brilliant presentation! Proud of you, brother.", img: "https://robohash.org/alice" },
  { name: "Ruprekha Hait", username: "@rupu", body: "Proud of you, brother.", img: "https://robohash.org/bob" },
  { name: "Angana Mukhopadhyay", username: "@angana", body: "Congratulations, Arjun!", img: "https://robohash.org/charlie" },
  { name: "George Miloradovich", username: "@george", body: "Impressive work, Arjun! The use of Gemini Pro API and Google Cloud TTS to streamline the animation process is fascinating.", img: "https://robohash.org/dave" },
  { name: "Adrishikhar Chowdhury", username: "@mota", body: "So glad I found this. I have starred the repo.", img: "https://robohash.org/eve" },
];
