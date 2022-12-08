export default {
    user: {
        name: "Oleksii",
        surname: "Popov",
        initials: "O.Y.",
        position: "Expert Software developer at TomTom",
        Website: {title: "oleksiipopov.com", url: "https://oleksiipopov.com"},
        LinkedIn: {title: "linkedin.com/in/oleksii-popov", url: "https://linkedin.com/in/oleksii-popov"},
        GitHub: {title: "github.com/AlexeyPopovUA", url: "https://github.com/AlexeyPopovUA"},
        Email: "alexejpopovua@gmail.com",
        Phone: "+31621548922"
    },
    intro: {
        title: "Intro",
        description: [
            "I'm a software developer, based in Netherlands, with more than 10 years of experience in web technologies and passioned about development of products that users love.",
            "I design and implement full stack solutions that combine frontend, cloud native and backend areas. My main focus is usually on architecture and development of high scale single page applications, UI libraries and SDK's. Implementation of CI/CD, hosting and distribution solutions is a second favourite type of tasks.",
            "I enjoy working with TypeScript and JavaScript across all stacks, so use them everywhere when possible. Maintaining projects in Java, PHP or any other language has never been a problem.",
            "I'm excited about application optimization for higher runtime and loading speed of existing projects as well as creation projects from the scratch.",
            //"I value result higher than a process. Also strongly believe that refactoring and security are 2 infinite processes, but not products",
            "Dreaming about an opportunity to build own distributed + remote + asynchronous + self-sufficient team around an awesome mind blowing project."
        ]
    },
    contacts: {
        Nationality: "Ukrainian and Dutch",
        "I speak": "English, Ukrainian, Russian, Dutch (A2)"
    },
    skills: [
        {
            name: "General",
            description: [
                "Architecture and development of high scale single page applications, UI libraries and SDK's, microservices and their infrastructure. Application optimization for higher runtime and loading speed and scalability",
                "Good knowledge of object-oriented principles, design patterns, data structures",
                "Leading development of high quality technical solutions, cross-team collaboration, technical interviews, mentorship, code refactoring and review, unit/integration tests. Defining the vision, development strategy and priorities for technologies in projects"
            ]
        },
        {
            name: "Programming languages",
            description:
                "Advanced knowledge of JavaScript, TypeScript, NodeJS, HTML, CSS, SCSS. Basic knowledge of Java SE, PHP"
        },
        {
            name: "Frameworks & libraries",
            description: "React/Redux/Saga, NodeJS, vanilla js, Serverless, Express JS, Storybook, whatever makes sense :)"
        },
        {
            name: "Testing",
            description: "Jest, Mocha, Selenium, Cucumber"
        },
        {
            name: "Other technologies",
            description: [
                "\"Infrastructure as a code\" with AWS CDK, SDK and Serverless",
                "Bundlers like Webpack and Grunt",
                "Log collectors like Kibana, Elastic, Sumologic, Scalyr, NewRelic",
                "Various CI/CD setups like TeamCity, Jenkins, self-written cloud solutions",
                "Static linters and platforms like ESList, prettify, SonarQube/Cloud",
                "CMS like Wordpress and Netlify",
                "Performance analysers like sitespeed.io and Lighthouse"
            ]
        }
    ],
    certificates: [
        {
            company: "Coursera Course Certificates",
            title: "Data structures: Measuring and Optimizing Performance",
            date: "November 2015",
            link: "https://www.coursera.org/account/accomplishments/verify/23F54S3MXLY7"
        },
        {
            company: "Coursera Course Certificates",
            title: "Object Oriented Programming in Java",
            date: "October 2015",
            link: "https://www.coursera.org/account/accomplishments/verify/Q43W5UTZT6VZ"
        },
        {
            company: "Udemy",
            title: "Introduction to TypeScript",
            date: "July 2015",
            link: "https://www.udemy.com/certificate/UC-71722OOL/"
        }
    ],
    experience: [
        {
            company: "TomTom (Amsterdam, Netherlands)",
            title: "Expert Software Developer",
            dateStart: "March 2021",
            dateEnd: "",
            description: [
                "Designed and developed the core part of a new route planning single page application - https://plan.tomtom.com (public beta). It is a React PWA with pre-rendering, lazy loading, localization, hot module reloading etc",
                "Started development of the new web SDK for TomTom public services and it's distribution infrastructure. ",
                "Implemented a microservice for authentication and it's infrastructure",
                "Supported and improved AWS CI/CD system for https://plan.tomtom.com",
                "Added feature branches support for a high concurrency automation testing infrastructure of https://plan.tomtom.com with feature branch matching between projects",
                "Implemented performance testing dashboard for the existing performance metric collection system"
            ],
            stack: "React, Redux, Thunk, Typescript, Docker, nodejs, scss, jest, AWS, aws-cdk, aws-sdk, sitespeed.io, Grafana, Storybook, Java, Selenium, GitHub actions"
        },
        {
            company: "TomTom (Amsterdam, Netherlands)",
            title: "Senior Software Developer",
            dateStart: "January 2019",
            dateEnd: "March 2021",
            description: [
                "Designed and developed significant part of a next generation mobile friendly Road Trips single page application with pre-rendering, server-side rendering, lazy loading, localization, hot module reloading etc. This project was cancelled :( , but re-born in a new route planning web app - https://plan.tomtom.com",
                "Implemented AWS CI/CD system with feature branches support for the web app",
                "Initiated and implemented basis of reusable UI and SDK npm libraries and their distribution infrastructure with feature branches support. That accelerated and simplified collaboration between mobile and web development teams",
                "Implemented high concurrency automation testing infrastructure for the web app that minimized execution time of Selenium java tests from 2 hours to 3 - 5 minutes. Also integrated it with existing CI/CD of the web app.",
                "Implemented POC of basic performance testing analysis for web app and infrastructure in AWS, which became a part of regular team workflow.",
                "Implemented microservices for logs proxying, runtime configuration delivery, CI/CD etc and their infrastructure",
                "Implemented POC of realtime technical log monitoring system which became a part of team workflow",
                "Developed a POC service with backend side map rendering"
            ],
            stack: "React, Redux, Saga, Typescript, Docker, nodejs, scss, jest, AWS, Serverless, aws-cdk, aws-sdk, sitespeed.io, Grafana, Storybook, Express JS, Java, Selenium"
        },
        {
            company: "Albelli (Amsterdam, Netherlands)",
            title: "Software developer / Senior software developer",
            dateStart: "April 2016",
            dateEnd: "December 2018",
            description: [
                "Participated in development and maintenance of online photo editors and hybrid mobile application",
                "Developed different tools for debugging, logging and fixing customer issues",
                "Set up code quality monitoring system"
            ],
            stack: "Vanilla js, typescript, scss, nodejs, google-closure-library, mocha, Java, Grunt, Selenium"
        },
        {
            company: "Insoft Global (Ukraine)",
            title: "JavaScript Developer",
            dateStart: "March 2013",
            dateEnd: "March 2016",
            description: [
                "Participated in front end and server side development of cloud management platforms, energy management and infrastructure management platforms.",
                "Implemented POC of a hybrid mobile application",
                "Code review, code refactoring, technical interviews, mentorship"
            ],
            stack: "Sencha ExtJS, scss, nodejs, Java"
        },
        {
            company: "Exadel",
            title: "JavaScript Developer",
            dateStart: "July 2012",
            dateEnd: "March 2013",
            description: "Participated in front end development of a Next Wave Logistics (e-commerce project)",
            stack: "Vanilla js, jquery, css etc."
        },
        {
            company: "Simple Solutions",
            title: "Junior PHP Developer",
            dateStart: "January 2012",
            dateEnd: "July 2012",
            description: [
                "Developed numerous websites using Wordpress and OpenCart. Implemented plugins, widgets and themes for Wordpress.",
                "Preliminary project analysis. Tasks estimation. User guides writing"
            ],
            stack: "PHP, MySQL, LAMP, WordPress,  Vanilla js, jquery, css etc."
        },
        {
            company: "Simple Solutions",
            title: "QA Engineer",
            dateStart: "August 2011",
            dateEnd: "January 2012",
            description: "Manual testing. Specification writing. UI prototyping"
        }
    ],
    education: [
        {
            company: "National Technical University Kharkiv Polytechnical Institute of Ukraine",
            title: "Master of Science (MSc)",
            date: "2009 - 2011",
            description: "Mechanical Engineering (Cryogenic technology)"
        },
        {
            company: "National Technical University Kharkiv Polytechnical Institute of Ukraine",
            title: "Bachelor of Science (BSc)",
            date: "2005 - 2009",
            description: "Mechanical Engineering (Cryogenic technology)"
        }
    ],
    additionalInfo: [
        {
            name: "Date of birth",
            description: "02-04-1988"
        },
        {
            name: "Marital status",
            description: "Married"
        },
        {
            name: "Children",
            description: "2"
        },
        {
            name: "Technical interests",
            description:
                "Static site generators. Infrastructure as a code. Isomorphic, progressive, full stack and highly loaded web applications.Design patterns. System design"
        },
        {
            name: "Hobbies",
            description: "Photography, travelling, hiking, programming, home lab (self-hosting)"
        }
    ],
    ownProjects: [
        {
            name: "Advanced Logger",
            description:
                "Open-source isomorphic javascript module for reporting data (logs) to remote log storages like SumoLogic and Loggly with support of different reporting strategies",
            links: [
                {
                    name: "Website",
                    icon: "",
                    link: "https://www.advancedlogger.com"
                },
                {
                    name: "GitHub",
                    icon: "",
                    link: "https://github.com/AlexeyPopovUA/advanced-logger"
                }
            ]
        },
        {
            name: "Hobby blog for my wife",
            description:
                "Static website generated by Gatsby JS, backed by Netlify CMS and Github as an identity provider and backend. Also AWS lambda for oAuth via GitHub",
            links: [
                {
                    name: "Website",
                    icon: "",
                    link: "https://www.zapiskimami.com"
                }
            ]
        }
    ]
};
