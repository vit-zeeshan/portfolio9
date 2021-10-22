/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Joda",
  title: "Yo!, I'm Ahmed 👋",
  subTitle: emoji(
    "I am a passionate Back-end Developer 🚀 from Egypt 🇪🇬. having an experience of building Web and Mobile applications with JavaScript, Php, vue, NodeJS, TypeScript, flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CG0EJkxiq8V3x7-iFBOSYxH6Fr8IIVk4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmedjoda",
  linkedin: "https://www.linkedin.com/in/ahmed-joda-b1029920a",
  gmail: "ahmedjoda02@gmail.com",
  gitlab: "https://gitlab.com/ahmedjdoa",
  // facebook: "",
  // medium: "",
  stackoverflow: "https://stackoverflow.com/users/15415186/ahmed-joda",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACK-END STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Creating application backend in PHP, Laravel, Node, Express & Flask"
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
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      progressPercentage: "80%" //Insert relative proficiency in percentage
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
      role: "Back-end web Developer",
      company: "Const Tech",
      link: "https://www.const-tech.com.sa/",
      companylogo: require("./assets/images/const-tech.png"),
      date: "December 2020 – Present",
      // desc: "back-end php web Developer, we mainly use php, laravel in backend and vue and npm in front-end.",
      descBullets: [
        "php, laravel in backend",
        "vue and npm in front-end"
      ]
    },
    {
      role: "Senior Back-end web Developer",
      company: "Syscape",
      link: "https://syscape-space.com/",
      companylogo: require("./assets/images/syscape.png"),
      date: "June 2021 – Present",
      // desc: "back-end php web Developer, we mainly use php, laravel in backend and vue and npm in front-end.",
      descBullets: [
        "php, laravel in backend",
        "vue and npm in front-end"
      ]
    },
    {
      role: "Back-end web Developer",
      company: "Semseem",
      link: "https://semseem.com/",
      companylogo: require("./assets/images/semseem.png"),
      date: "September 2021 – October 2021",
      // desc: "back-end php web Developer, we mainly use php, laravel in backend and vue and npm in front-end.",
      descBullets: [
        "php, laravel in backend",
        "vue and npm in front-end"
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
      title: "SOTO",
      url: "https://www.youtube.com/watch?v=GJ825HreLJw",
      image: require("./assets/images/projects/soto.webp"),
      subtitle:
        "an adventure-Narrati video game developed by MIST team using Unreal Engine.",
      techs: ["c++", "unreal engine"]
    },
    {
      title: "Govoiceo",
      url: "https://govoiceo.com",
      image: require("./assets/images/projects/govoiceo.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Inayah",
      url: "https://dev.inayah.net/",
      image: require("./assets/images/projects/inayah.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Shrzzin",
      url: "https://shrzzin.com/",
      image: require("./assets/images/projects/shrzzin.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Dawah",
      url: "https://namasdawah.net/",
      image: require("./assets/images/projects/dawah.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Al Jabarti",
      url: "https://alj4rec.net",
      image: require("./assets/images/projects/jabarti.png"),
      subtitle: "",
      techs: ["php", "wordpress", "mysql"]
    },
    {
      title: "Equation",
      url: "https://equ.const-tech.biz/",
      image: require("./assets/images/projects/equation.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Amniti",
      url: "https://amniti.com/",
      image: require("./assets/images/projects/amniti.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Stars Ads Gate",
      url: "https://www.starsadsgate.com/",
      image: require("./assets/images/projects/starsadsgate.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Itqan",
      url: "https://th-qw.com/",
      image: require("./assets/images/projects/itqan.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Matjri",
      url: "https://mtajri.com/",
      image: require("./assets/images/projects/mtajri.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Agnamy",
      url: "http://sheep-s.com/",
      image: require("./assets/images/projects/sheep.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Roomacake",
      url: "https://roomacake.com/",
      image: require("./assets/images/projects/roomacake.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Alasaker Horse",
      url: "https://alasakerhorse.com/",
      image: require("./assets/images/projects/alasakerhorse.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Taif App",
      url: "https://taif-app.com/",
      image: require("./assets/images/projects/taif.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Semseem",
      url: "https://semseem.com/",
      image: require("./assets/images/projects/semseem.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
    },
    {
      title: "Tiybat",
      url: "https://tiybat.com/",
      image: require("./assets/images/projects/tiybat.png"),
      subtitle: "",
      techs: ["php", "laravel", "vue", "mysql"]
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
  email_address: "ahmedjoda02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ahmedjoda02", //Replace "twitter" with your twitter username without @
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
