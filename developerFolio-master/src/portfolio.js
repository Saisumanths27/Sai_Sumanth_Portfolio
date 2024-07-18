/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Sumanth Suresh",
  title: "Hi all, I'm Sai Sumanth Suresh",
  subTitle: emoji(
    "I am a dedicated computer science graduate student at Illinois Tech, actively seeking spring 2025 internship opportunities. With a strong foundation in programming languages 💻, I excel in hands-on projects and collaborative team environments 🤝. My analytical and problem-solving skills 📊, coupled with a commitment to continuous learning 📚, drive me to leverage technology for solving real-world challenges 🌟."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1otQc2tGYJMOUbD42UsRtHEb717I0MGwb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Saisumanths27",
  linkedin: "https://www.linkedin.com/in/sai-sumanth-suresh/",
  gmail: "ssuresh21@hawk.iit.edu",
  instagram: "https://www.instagram.com/_sai_sumanth_16/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GRADUATE STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Illinois Institute of Technology",
      logo: require("./assets/images/Illinois.jpg"),
      subHeader: "Master of Computer Science",
      duration: "January 2024 - December 2025",
      descBullets: [
        "GPA :- 3.66",
        "coursework :- Advance Database Organization, Machine Leraning, Information Retrieval"
      ]
    },
    {
      schoolName: "The Oxford College of Engineering",
      logo: require("./assets/images/Oxford.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2019 - May 2023",
      descBullets: ["GPA :- 3.67",
         "Cousework :- Data Structures and Algorithms, Operation Systems, Cloud Computing"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Intern",
      company: "Visionet Systems",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Febuary 2023 – June 2023",
      descBullets: [
        "Supported front-end and back-end development for Anni Selke's e-commerce site, contributing to a 20% improvement in overall site performance",
        "Integrated interactive features, including Salesforce Commerce Cloud, resulting in 15% increase in user engagement metrics.",
        "Integrated interactive features, including Salesforce Commerce Cloud, resulting in 15% increase in user engagement metrics.",
        "Enhanced website functionality and user engagement by 25% through effective utilization of Salesforce Commerce Cloud."
      ]
    },
    {
      role: "Full-Stack Web Development Intern",
      company: "Prinston Smart Engineers",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "August 2022 – October 2022",
      descBullets: [
        "Gained practical skills in HTML, CSS, JavaScript, and MySQL, delving into web development intricacies.",
        "Designed and implemented the frontend and backend structure using HTML, CSS, JavaScript, and MySQL.",
        "Seamlessly integrated MySQL backend with frontend for an online food ordering system, resulting in a 25% increase in order processing efficiency.",
        "Established a reliable backend system, reducing system downtime by 30% and enhancing the overall user experience."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      projectName: "Web Crawler and Search Engine",
      projectDesc: "Created a web crawler using Scrapy, enabling customized web crawling with parameters like seed URL/domain, maximum pages, and maximum depth to effectively gather and index web data. Engineered advanced search functionalities with Scikit-learn and Flask including constructing an inverted index in pickle format, calculating TF-IDF and cosine similarity, processing HTTP requests, validating JSON queries, and returning top K ranked results.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Saisumanths27/CS-429-IR-PROJECT-A20561682-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Spotify Clone Project",
      projectDesc: "Developed a Spotify clone using React, implementing key features like user authentication, music playback, playlist management, and real-time search functionality. Integrated Spotify API to fetch and display dynamic music content, ensuring a seamless user experience with responsive design and efficient state management using Redux.",
    },
    {
      projectName: "AIML Based Behaviour Detection of Distracted Drivers",
      projectDesc: "Integrated Haar cascade and facial detection algorithms to monitor facial and head movements for distracted driving detection. Implemented YOLO CNN algorithm for mobile phone detection, enhancing driver safety with real-time alerts for distracted driving incidents.",
    }
  ],
  display: true // Set false to hide this section, defaults to true

};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about a job opening role or just want to say hi? My Inbox is open for all.",
  number: "+1(312)647-6526",
  email_address: "ssuresh21@hawk.iit.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
