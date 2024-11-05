import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: any[] = [];
    companyData = [
        {
            name: "Serrala",
            logo: "/assets/images/serrala-icon.svg",
            designation: "Software Engineer",
            from: "April 2023",
            to: "Present",
            work: [
                {
                    role: "Full Stack Developer",
                    techStack: ["Angular", "Node.js", "Express", "MongoDB", "k8s", "Kakfka"],
                    projects: [
                        "Developed a web application for a client to manage their business operations. The application was built using React, Node.js, Express, and MongoDB. The application was deployed on AWS.",
                        "Developed a web application for a client to manage their business operations. The application was built using React, Node.js, Express, and MongoDB. The application was deployed on AWS.",
                    ]
                }
            ]
        },
        {
            name: "udChalo",
            logo: "/assets/images/udchalo-icon.png",
            designation: "Senior Software Developer",
            from: "July 2020",
            to: "April 2023",
            work: [
                {
                    role: "Full Stack Developer",
                    techStack: ["Angular", "Node.js", "Koa.js", "DynamoBD", "AWS", "Typescript"],
                    projects: [
                        "Developed a web application for a client to manage their business operations. The application was built using React, Node.js, Express, and MongoDB. The application was deployed on AWS.",
                        "Developed a web application for a client to manage their business operations. The application was built using React, Node.js, Express, and MongoDB. The application was deployed on AWS.",
                    ]
                }
            ]
        }
    ];

    applications: any[] = [
      // { id: 'File Explorer', name: 'My PC', imgSrc: 'https://img.icons8.com/?size=100&id=20420&format=png&color=000000' },
      { id: 'Portfolio', name: 'Portfolio', imgSrc: 'assets/images/portfolio.png', displayInFooter: true },
      { id: 'Resume', name: ' Resume', imgSrc: 'assets/images/resume.png', displayInFooter: true },
      { id: 'Terminal', name: 'Terminal', imgSrc: 'assets/images/terminal.png', displayInFooter: true },
      { id: 'Linkedin', name: 'LinkedIn', imgSrc: 'assets/images/linkedin.png', link: 'https://www.linkedin.com/in/sagar-patil-57srp/' },
      { id: 'Chrome', name: 'Chrome', imgSrc: 'assets/images/chrome.png' },
      { id: 'Settings', name: 'Settings', imgSrc: 'assets/images/settings.png' },
      { id: 'Camera', name: 'Camera', imgSrc: 'assets/images/camera.png', displayInFooter: true },
      { id: 'Compiler', name: 'Compiler', imgSrc: 'assets/images/compiler.png', displayInFooter: true },
      { id: 'Calculator', name: 'Calculator', imgSrc: 'assets/images/calc.png' }
    ]

    skills: any = {
    frontend: [
        {
            name: 'Javascript',
            imgUrl: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000',
          },
      {
        name: 'Angular',
        imgUrl: 'https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000',
      },
      {
        name: 'CSS3',
        imgUrl: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
      },
      // Add more frontend skills as necessary
    ],
    backend: [
      {
        name: 'Node.js',
        imgUrl: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',
      },
      {
        name: 'Express.js',
        imgUrl: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000',
      },
      {
        name: 'Kafka',
        imgUrl: 'https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000',
      },
      {
        name: 'MongoDB',
        imgUrl: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
      },
      // Add more backend skills as necessary
    ],
    otherTech: [
      {
        name: 'AWS',
        imgUrl: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
      },
      {
        name: 'Kubernetes',
        imgUrl: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000',
      },
      {
        name: 'Flutter',
        imgUrl: 'https://img.icons8.com/?size=100&id=5pu47piHKg1I&format=png&color=000000',
      },
      {
        name: 'Typescript',
        imgUrl: 'https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000',
      },
      // Add more other tech skills as necessary
    ],
  };;

    achievements: any[] = [
        {
            title: 'Best Project Award',
            desc: 'Built Suraksha - 2nd highest revenue feature in udChalo',
        },
        {
            title: 'Beyond the limit Award',
            desc: 'Built flutter prototype of flight booking app',

        },
        {
            title: 'Bug Bash Winner Award (2X)',
            desc: 'Identified critical and highest no bugs in bug bash'
        },
        {
            title: 'Unnati Award',
            desc: 'Identified critical and highest no bugs in bug bash'
        }
    ];

    getApplications(isFooter: boolean = false) {
      if (isFooter) {
        return this.applications.filter(app => {
          return app.displayInFooter;
        });
      } else {
        return this.applications
      }
    }

    getCompanyData() {
        return this.companyData;
    }

    getSkills() {
        return this.skills;
    }

    getAchievements() {
        return this.achievements;
    }
}