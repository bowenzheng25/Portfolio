export const siteConfig = {
  name: "Bowen Zheng",
  title: "I optimize tools and processes for efficiency, quality, and cost-effectiveness",
  description: "Portfolio website of Bowen Zheng",
  accentColor: "#1d4ed8",
  social: {
    email: "bzheng2438@gmail.com",
    linkedin: "https://www.linkedin.com/in/bowen-zheng-ab7693171/",
    twitter: "https://x.com/bwnzhng2003",
    github: "https://github.com/Bowen-Zheng-2003",
  },
  aboutMe:
    "I'm a mechanical engineer with experience in CAD, prototyping, process automation, and engineering simulations. I'm passionate about leveraging these skills to develop better tools that bridge the physical and digital world.",
  skills: ["Solidworks", "FEA", "Python", "ML", "Computer Vision", "HTML", "CSS"],
  projects: [
    {
      name: "Nanopositioner",
      description: [
        "2-axis positioner with 25 mm of travel",
        "Closed-loop system using PID",
        "488 nm resolution"],
      link: "https://x.com/bwnzhng2003/status/1900252376201904129",
      skills: ["Flexure Design", "Embedded Systems", "Controls"],
    },
    {
      name: "Confocal Microscope",
      description: [
        "Creates surface map of sample with nanopositioner",
        "25 micron height resolution" ],
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Optomechanical Assembly", "Electronics & Wiring", "Controls"],
    },
    {
      name: "Raman Spectrometer",
      description: [
        "Identifies clear liquid samples",
        "Mounts vertically for solid powdered sample analysis"],
      link: "https://x.com/bwnzhng2003/status/1856378382319067221",
      skills: ["Spectroscopy", "Material Characterization", "Optical Assembly"],
    },
    {
      name: "Die Inspection Tool",
      description: [
        "3-axis automation tool for die inspection",
        "Reduces typical inspection time to 30 seconds",
        "CV & ML software identifies defects with 95% accuracy" ],
      link: "https://www.youtube.com/watch?v=kxjA8AVGvQM",
      skills: ["ML", "Computer Vision", "Rapid Prototyping", "Automation", "Python"],
    },
  ],
  experience: [
    {
      company: "Bruker",
      title: "Quality Engineer Intern",
      dateRange: "May 2024 - May 2025",
      bullets: [
        "Built motorized 3-axis automated die inspection tool",
        "Developed computer vision and ML based software for tracking and documenting die defects with 95% accuracy",
        "Created SOP to smoothly integrate die inspection tool into inspection line",
      ],
    },
    {
      company: "Wake Forest University School of Medicine",
      title: "Biomechanics Intern",
      dateRange: "May 2023 - Aug 2023",
      bullets: [
        "Developed computational human body models for car crash simulations, reducing physical testing costs and time",
        "Created and implemented a quality control algorithm to remove low-quality images from 10,000 CT scans",
        "Automated rib cage measurement pipeline for 2,250 CT scans, increasing processing efficiency and data accuracy",
        "Enhanced rib cage modeling accuracy through analysis of 24 CT and MRI scans",
      ],
    },
  ],
  education: [
    {
      school: "Columbia University",
      degree: "Bachelor of Science in Mechanical Engineering",
      dateRange: "2021-2025",
    },
    {
      school: "Tompkins Cortland Community College",
      degree: "Associates Degree in Math & Science",
      dateRange: "2017-2021",
    },
  ],
};
