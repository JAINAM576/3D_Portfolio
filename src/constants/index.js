import {
  
    backend,
    creator,
    web,
    javascript,
    clan,
    html,
    css,
    reactjs,
    cpp,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    DS,
    meta,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fronted Developer",
      icon: creator,
    },
    {
      title: "Known Languages ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C",
      icon: clan,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },

  ];
  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2022-2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: " 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "If you want people to take your advice, you need to solve more problems than you create.",
      name: "Kent Beck",
      designation: "",
      company: "",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1345546877i/25211._UX200_CR0,50,200,200_.jpg",
    },
    {
      testimonial:
        "A code is like love, it has created with clear intentions at the beginning, but it can get complicated.",
      name: "Gerry Geek",
      designation: "",
      company: "",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1616643831i/20890212._UX200_CR0,0,200,200_.jpg",
    },
    {
      testimonial:
        "Hope for The Best Prepare for   ",
      name: "Benjamin Disraeli",
      designation: "Novel",
      company: "",
      image: "https://th.bing.com/th?id=OIP.9QxFSCKPu21TUdWtqMNm_wHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    },
  ];
  
  const projects = [
    {
      name: "Text-Utils",
      description:
        "Text-utils is a word counter and character counting utility that can be used to manipulate text in the way you want 1. It has multiple functionalities for text editing according to the user and has both light and dark modes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/JAINAM576/Text-Utils",
    },
    {
      name: "PWA Weather-App",
      description:
        "A Progressive Web App (PWA) is a web application that combines the best features of both websites and native mobile apps, providing an immersive user experience and the ability to work offline.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: " Openweatherapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/JAINAM576/Weather-PWA-app",
    },
    {
      name: "News-Monekey",
      description:
        "A news app delivers up-to-date and personalized news content from various sources, keeping users informed on the go.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NewsApi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/JAINAM576/News-Monkey",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };