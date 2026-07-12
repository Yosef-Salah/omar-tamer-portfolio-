import { ContactInfo, Project, Skill, Education, Training } from './types';

export const contactInfo: ContactInfo = {
  name: "Omar Tamer",
  location: "Alexandria, Egypt",
  email: "omartamer5535002@gmail.com",
  phone: "+201211534665",
  linkedin: "https://linkedin.com/in/omar-t",
  github: "https://github.com/omar-tamer33",
  servicenowResume: "https://nowlearning.servicenow.com", // standard profile placeholder
  summary: "Passionate developer with expertise in Android mobile development using Kotlin and Firebase, and hands-on experience in ServiceNow development. Skilled in building scalable mobile apps and automating enterprise workflows. Committed to delivering efficient, high-quality solutions across both mobile and IT service management domains."
};

export const education: Education = {
  institution: "Egyptian E-Learning University",
  fieldOfStudy: "Information Technology",
  degree: "Bachelor of Information Technology",
  gpa: "Very Good (GPA: 3.03/4.0)",
  duration: "Sept 2021 – Apr 2025",
  details: [
    "Graduation project: padellex - Grade: A+"
  ]
};

export const projects: Project[] = [
  {
    id: "padellex",
    title: "Padellex",
    category: "android",
    subtitle: "Graduation Project - Grade: A+",
    bullets: [
      "Built a comprehensive Kotlin/Android application using MVVM, Dagger Hilt, Retrofit and Coroutines",
      "Integrated Firebase (Auth, Realtime Database, Storage) and Cloudinary for media hosting",
      "Enabled padel players to book court slots and manage reservations, profiles, and real-time chat"
    ],
    githubUrl: "https://github.com/omar-tamer33/padellex",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "Retrofit", "Coroutines", "Firebase", "Cloudinary"],
    featured: true
  },
  {
    id: "facility-issue",
    title: "Facility Issue Reporting System",
    category: "servicenow",
    subtitle: "ServiceNow Automation App",
    bullets: [
      "Automated facility issue reporting, escalation, and resolution with Flow Designer and SLA.",
      "Smart assignment of issues to groups and technicians based on priority, skill, and availability, including sensor-triggered issues.",
      "Role-based access, employee self-service portal, and dashboards for management visibility."
    ],
    githubUrl: "https://github.com/omar-tamer33/facility-issue-reporting",
    tags: ["ServiceNow", "Flow Designer", "SLA", "ITSM", "Service Portal", "Dashboards", "Automation"],
    featured: true
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce App",
    category: "android",
    subtitle: "Clean Architecture Design",
    bullets: [
      "Developed a scalable e-commerce application using Kotlin and Jetpack Compose",
      "Followed Clean Architecture principles for clear separation between layers",
      "Integrated REST APIs and utilized DataStore for managing user preferences"
    ],
    githubUrl: "https://github.com/omar-tamer33/ecommerce-clean-architecture",
    tags: ["Kotlin", "Jetpack Compose", "Clean Architecture", "RESTful APIs", "DataStore", "MVVM"],
    featured: false
  },
  {
    id: "equipment-request",
    title: "IT Equipment Request Automation",
    category: "servicenow",
    subtitle: "ServiceNow Custom App",
    bullets: [
      "Built a custom ServiceNow app to automate IT equipment requests with approval and fulfillment workflows",
      "Implemented Flow Designer, Client Scripts, and Business Rules for approvals, cost calculation, and manager assignment",
      "Enforced secure access with ACLs and exposed an Inbound Scripted REST API for external integrations"
    ],
    githubUrl: "https://github.com/omar-tamer33/it-equipment-automation",
    tags: ["ServiceNow", "Client Scripts", "Business Rules", "ACLs", "Inbound REST API", "Flow Designer"],
    featured: true
  },
  {
    id: "news-app",
    title: "News App",
    category: "android",
    subtitle: "Real-time Content App",
    bullets: [
      "Developed a News application with real-time content fetching",
      "Ensured scalability and efficiency in the app's architecture"
    ],
    githubUrl: "https://github.com/omar-tamer33/news-app",
    tags: ["Kotlin", "Android Studio", "REST APIs", "MVVM", "Retrofit", "Material 3"],
    featured: false
  }
];

export const skills: Skill[] = [
  // Android Development
  { name: "Kotlin", category: "android", subCategory: "Languages" },
  { name: "Java", category: "android", subCategory: "Languages" },
  
  { name: "Firebase", category: "android", subCategory: "Technologies" },
  { name: "Retrofit", category: "android", subCategory: "Technologies" },
  { name: "Room Database", category: "android", subCategory: "Technologies" },
  { name: "Jetpack Compose", category: "android", subCategory: "Technologies" },
  { name: "Dagger Hilt", category: "android", subCategory: "Technologies" },
  
  { name: "MVVM", category: "android", subCategory: "Architecture & Patterns" },
  { name: "Clean Architecture", category: "android", subCategory: "Architecture & Patterns" },
  { name: "SOLID Principles", category: "android", subCategory: "Architecture & Patterns" },
  
  { name: "Android Studio", category: "android", subCategory: "Tools" },
  { name: "Git / GitHub", category: "android", subCategory: "Tools" },
  
  { name: "Dependency Injection", category: "android", subCategory: "Concepts" },
  { name: "Coroutines & Flows", category: "android", subCategory: "Concepts" },
  { name: "UI/UX Design", category: "android", subCategory: "Concepts" },
  { name: "RESTful APIs", category: "android", subCategory: "Concepts" },

  // ServiceNow Development
  { name: "ServiceNow Studio", category: "servicenow", subCategory: "Core Platforms" },
  { name: "App Engine Studio", category: "servicenow", subCategory: "Core Platforms" },
  { name: "ITSM", category: "servicenow", subCategory: "Core Platforms" },
  
  { name: "Service Portal Fundamentals", category: "servicenow", subCategory: "Key Skills" },
  { name: "Service Portal On-Demand", category: "servicenow", subCategory: "Key Skills" },
  { name: "Flow Designer Automation", category: "servicenow", subCategory: "Key Skills" },
  { name: "Reports & Dashboards", category: "servicenow", subCategory: "Key Skills" },
  { name: "ServiceNow Scripting", category: "servicenow", subCategory: "Key Skills" },

  // Soft Skills
  { name: "Communication Skills", category: "soft", subCategory: "Personal Strengths" },
  { name: "Teamwork & Collaboration", category: "soft", subCategory: "Personal Strengths" },
  { name: "Problem Solving", category: "soft", subCategory: "Personal Strengths" },
  { name: "Flexibility & Adaptability", category: "soft", subCategory: "Personal Strengths" },
  { name: "Critical Thinking", category: "soft", subCategory: "Personal Strengths" },
  { name: "Self-motivated", category: "soft", subCategory: "Personal Strengths" },
  { name: "Attention to Details", category: "soft", subCategory: "Personal Strengths" },

  // Languages
  { name: "Arabic (Native/Bilingual)", category: "languages", subCategory: "Languages" },
  { name: "English (Good - Professional Working Proficiency)", category: "languages", subCategory: "Languages" }
];

export const training: Training[] = [
  {
    id: "route-academy",
    title: "Android Mobile App Development Trainee",
    provider: "Route Academy",
    duration: "Nov 2024 – Apr 2025",
    bullets: [
      "Developed high-fidelity mobile applications for the Android platform.",
      "Gained expertise in soft skills, freelancing strategies, and workspace adaptability."
    ],
    category: "android"
  },
  {
    id: "azm-squad",
    title: "ServiceNow Developer Intern",
    provider: "AZM Squad",
    duration: "Oct 2025 – Jan 2026",
    bullets: [
      "Designed and developed custom ServiceNow applications using App Engine Studio and Flow Designer.",
      "Automated complex business workflows, integrated REST APIs, and customized Service Portal and Knowledge Management.",
      "Gained hands-on experience in ServiceNow scripting fundamentals and App Engine Studio configuration to build automation solutions."
    ],
    category: "servicenow"
  }
];
