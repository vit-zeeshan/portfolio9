/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Almory",
  title: "Yo!, I'm Ahmed",
  subTitle: emoji(
    "I am a passionate backend engineer 🚀 from Egypt 🇪🇬. with more than 3 years experience delivering tech solutions, avid programmer and fast learner, obsessed with details and quality, always trying to improve development process and code quality, I love simple and elegant solutions for every problem."
  ),
  resumeLink:
    "https://drive.google.com/file/d/148xtF-Ufk3Rc2OqPNL-MNyIA5B8ap61U/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmedalmory/",
  linkedin: "https://www.linkedin.com/in/ahmedalmory/",
  gmail: "ahmedalmory02@gmail.com",
  gitlab: "https://gitlab.com/ahmedjdoa/",
  // facebook: "",
  // medium: "",
  stackoverflow: "https://stackoverflow.com/users/15415186/ahmed-almory/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Creating backend applications in PHP/Laravel, Python/Django and Node/Express"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL & MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Docker",
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
      schoolName: "Cairo Higher Institute",
      logo: require("./assets/images/chi.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2017 - August 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
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
      role: "Backend Engineer",
      company: "Const Tech",
      link: "https://www.const-tech.com.sa/",
      companylogo: require("./assets/images/const-tech.png"),
      date: "December 2020 – January 2022",
      descBullets: [
        "PHP/Laravel, Livewire",
        "Vue.js, Alpin.js",
        "Integration of, third party services such as Firebase/ AWS / Digital Ocean",
        "Deployment and Maintenance of applications to cPanel",
        "Mentoring and coaching for junior developers",
      ]
    },
    {
      role: "Senior Backend Engineer",
      company: "Syscape",
      link: "https://syscape-space.com/",
      companylogo: require("./assets/images/syscape.png"),
      date: "June 2021 – Present",
      descBullets: [
        "PHP/Laravel and Python/Django",
        "Integration of third party services such as Firebase/ AWS / Digital Ocean",
        "Deployment of applications using Docker",
        "Continuous Integration and Deployment using GitLab CI",
        "Continuous Deployment using Kubernetes",
        "Mentoring and coaching for junior developers",
        "Migration of legacy applications to modern technologies",
      ]
    },
    {
      role: "Backend Engineer",
      company: "Almusand",
      link: "https://almusand.com/",
      companylogo: require("./assets/images/almusand.png"),
      date: "September 2021 – October 2021",
      descBullets: [
        "PHP/Laravel",
        "Vue.js",
        "Integration of third party services"
      ]
    },
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Taif App",
      url: "https://taif-app.com/",
      image: require("./assets/images/projects/taif.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Semseem",
      url: "https://semseem.com/",
      image: require("./assets/images/projects/semseem.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Govoiceo",
      url: "https://govoiceo.com",
      image: require("./assets/images/projects/govoiceo.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Inayah",
      url: "https://dev.inayah.net/",
      image: require("./assets/images/projects/inayah.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Shrzzin",
      url: "https://shrzzin.com/",
      image: require("./assets/images/projects/shrzzin.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Dawah",
      url: "https://namasdawah.net/",
      image: require("./assets/images/projects/dawah.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Al Jabarti",
      url: "https://alj4rec.net",
      image: require("./assets/images/projects/jabarti.png"),
      subtitle: "",
      techs: ["PHP", "wordpress", "mysql"]
    },
    {
      title: "Equation",
      url: "https://equ.const-tech.biz/",
      image: require("./assets/images/projects/equation.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Amniti",
      url: "https://amniti.com/",
      image: require("./assets/images/projects/amniti.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Stars Ads Gate",
      url: "https://www.starsadsgate.com/",
      image: require("./assets/images/projects/starsadsgate.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Itqan",
      url: "https://th-qw.com/",
      image: require("./assets/images/projects/itqan.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Matjri",
      url: "https://mtajri.com/",
      image: require("./assets/images/projects/mtajri.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Agnamy",
      url: "http://sheep-s.com/",
      image: require("./assets/images/projects/sheep.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Roomacake",
      url: "https://roomacake.com/",
      image: require("./assets/images/projects/roomacake.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Alasaker Horse",
      url: "https://alasakerhorse.com/",
      image: require("./assets/images/projects/alasakerhorse.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },

    {
      title: "Tiybat",
      url: "https://tiybat.com/",
      image: require("./assets/images/projects/tiybat.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Maham",
      url: "https://maham.app/",
      image: require("./assets/images/projects/maham.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Qr",
      url: "https://qr-sa.net/",
      image: require("./assets/images/projects/qr.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Golden Cleaver",
      url: "http://sh.const-tech.biz/",
      image: require("./assets/images/projects/goldencleaver.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "Basima Droop",
      url: "https://basimadroop.com/",
      image: require("./assets/images/projects/basimadroop.png"),
      subtitle: "",
      techs: ["PHP", "Laravel", "Vue.js", "mysql"]
    },
    {
      title: "SOTO",
      url: "https://www.youtube.com/watch?v=GJ825HreLJw",
      image: require("./assets/images/projects/soto.webp"),
      subtitle:
        "an adventure-Narrati video game developed by MIST team using Unreal Engine.",
      techs: ["c++", "unreal engine"]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201211779758",
  email_address: "ahmedalmory02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ahmedalmory02", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
