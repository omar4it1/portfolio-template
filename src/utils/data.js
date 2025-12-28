import {
    Code2,
    GraduationCap,
    Briefcase,
    User,
    Phone,
    Mail,
    MapPin,
    Icon,
    Heart,
    Coffee,
    BookOpen,
} from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import auto1_group_logo from "../assets/images/auto1_group_logo.jpeg";
import brilliantgamezlabs_logo from "../assets/images/brilliantgamezlabs_logo.jpeg";
export const icons = {
    code: Code2,
    graduationCap: GraduationCap,
    briefcase: Briefcase,
    user: User,
    phone: Phone,
    mail: Mail,
    mapPin: MapPin,
    github: BsGithub,
    linkedin: BsLinkedin,
    twitter: BsTwitter,
};
export const HERO_DATA = {
  title: "Staff Software Engineer",
  animatedLines: [
    "Building apps",
    "that scale",
    "better",
  ],
  description:
    "Staff-level backend engineer with extensive experience in Go, Java, and cloud-native systems. Expert in microservices, Kubernetes, event-driven architecture, and CI/CD. Known for delivering reliable MVPs, improving code quality through testing and DDD, mentoring teams, and building scalable systems across fintech, payments, and platform engineering.",
};

export const SKILLS_CATEGORY = [
    {
        title: "Programming Languages",
        icons: Code2,
        description: "Technologies I use for building the client-side of applications.",
        skills: [
            { name: "Golang", level: 88, proficiency: "Expert" },
            { name: "Java (Spring framework, JPA, Cloud, Data, Spring security)", level: 85, proficiency: "Expert" },
            { name: "Kotlin", level: 85, proficiency: "Expert" },
            { name: "Javascript (jQuery, VueJS, Angular, Rect.js)", level: 85, proficiency: "Expert" },
            { name: "Python (Flask, Django), C/C++", level: 85, proficiency: "Expert" },
        ],
    },
    {
        title: "Software Development",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "Object Oriented Design", level: 90, proficiency: "Intermediate" },
            { name: "Microservices Architecture", level: 75, proficiency: "Intermediate" },
            { name: "Event Driven Architecture", level: 75, proficiency: "Intermediate" },
            { name: "TDD", level: 50, proficiency: "Expert" },
            { name: "Domain Driven Design", level: 90, proficiency: "Intermediate" },
            { name: "Design patterns", level: 75, proficiency: "Intermediate" },
            { name: "Agile methodologies (Scrum, Kanban)", level: 75, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Version Control & CI/CD",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "Git", level: 90, proficiency: "Intermediate" },
            { name: "Jenkins", level: 75, proficiency: "Intermediate" },
            { name: "TravisCI,", level: 75, proficiency: "Intermediate" },
            { name: "Github", level: 90, proficiency: "Expert" },
            { name: "Actions", level: 90, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Tools and Technologies",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "Docker", level: 90, proficiency: "Intermediate" },
            { name: "Kubernetes", level: 75, proficiency: "Intermediate" },
            { name: "HELM", level: 75, proficiency: "Intermediate" },
            { name: "Prometheus", level: 50, proficiency: "Expert" },
            { name: "Terraform", level: 90, proficiency: "Intermediate" },
            { name: "Vault", level: 75, proficiency: "Intermediate" },
            { name: "Pact", level: 75, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Cloud Platform",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "Amazon Web Services(EC2, RDS, ECS, S3, etc.)", level: 90, proficiency: "Intermediate" },
            { name: "Microsoft Azure", level: 75, proficiency: "Intermediate" },
            { name: "GCP", level: 75, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Databases",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "RDBMS(Postgres, Mysql, Oracle, CockroachDB)", level: 90, proficiency: "Intermediate" },
            { name: "Nosql(Redis, Mongodb, Elasticsearch, Cassandra)", level: 75, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Messaging Queue",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "RabbitMQ", level: 90, proficiency: "Intermediate" },
            { name: "Kafka (stream)", level: 75, proficiency: "Intermediate" },
            { name: "NATS (jetstream)", level: 75, proficiency: "Intermediate" },
        ],
    },
];
export const TECH_STACK = [
    "Golang",
    "JavaScript",
    "Grpc",
    "AWS(EC2, S3, ECS, Lambda)",
    "ECS",
    "Terraform",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "Vault",
    "Java 11(Spring framework)",
    "Postgres",
    "CockroachDB",
    "NATS",
    "Docker",
    "kubernetes",
    "EDA",
    "Microservices",
    "Java 8",
    "Python",
    "Javascript(VueJS)",
    "GraphQL",
    "Keycloak",
    "Java(Spring Boot, Spring Cloud, Spring Data, Spring Security)",

];
export const STATS = [
    {number: "50+", label: "Projects Completed" },
    {number: "18", label: "Years of Experience" },
    {number: "100+", label: "Happy Clients" },
    {number: "15", label: "Certifications" },
];
export const PROJECTS = [
    {
        id: 1,
        title: "Portfolio Website",
        image: auto1_group_logo,
        description: "A personal portfolio website to showcase my projects and skills.",
        techStack: ["React", "Tailwind CSS"],
        link: "https://yourportfolio.com",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        image: brilliantgamezlabs_logo,
        description: "An e-commerce platform for buying and selling products online.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://yourecommerceplatform.com",
    },
    {
        id: 3,
        title: "Blog Application",
        image: auto1_group_logo,
        description: "A blogging application where users can create and share blog posts.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://yourblogapplication.com",

    }
];
export const WORK_EXPERIENCE = [
    {
        year: "06/2025 - Present",
        title: "Staff Software Engineer",
        company: "IONOS SE",
        icon: Code2,
        color: "bg-blue-500",
        position: "Frontend Developer",
        duration: "Jan 2022 - Present",
        description: "Developed and maintained web applications using React.js and Redux. Collaborated with cross-functional teams to define, design, and ship new features. Optimized applications for maximum speed and scalability.",
        responsibilities: [
            "Developed and maintained web applications using React.js and Redux.",
            "Collaborated with cross-functional teams to define, design, and ship new features.",
            "Optimized applications for maximum speed and scalability.",
        ],
    },
    {
        year: "05/2024 - 05/2025",
        title: "Senior Software Engineer",
        company: "Freelance",
        icon: Code2,
        color: "bg-purple-500",
        position: "Senior Software Engineer",
        duration: "May 2024 - May 2025",
        description: "Mentored a team of 5 developers, promoting clean code practices, Domain-Driven Design (DDD), and Event-Driven Architecture (EDA) to enhance code quality and maintainability. ● Designed a scalable modular monolith with Event-Driven Architecture (EDA), Serverless architecture, designed RESTful APIs, and integrated third-party services. ● Implemented a robust CI/CD pipeline, integrated SonarQube for code quality analysis, and incorporated integration and end-to-end testing into the pipeline. ● Set up Observability & Monitoring using OpenTelemetry, Prometheus, and Grafana to enhance system reliability and performance insights. ● Optimized cloud infrastructure costs by analyzing resource usage and proposing cost-efficient strategies.",
        responsibilities: [
            "Mentored a team of 5 developers, promoting clean code practices, Domain-Driven Design (DDD), and Event-Driven Architecture (EDA) to enhance code quality and maintainability..",
            "Designed a scalable modular monolith with Event-Driven Architecture (EDA), Serverless architecture, designed RESTful APIs, and integrated third-party services.",
            "Implemented a robust CI/CD pipeline, integrated SonarQube for code quality analysis, and incorporated integration and end-to-end testing into the pipeline.",
            "Set up Observability & Monitoring using OpenTelemetry, Prometheus, and Grafana to enhance system reliability and performance insights.",
            "Optimized cloud infrastructure costs by analyzing resource usage and proposing cost-efficient strategies.",
        ],
        Technologies: "Golang, Grpc, AWS, ECS, Terraform, Kafka, Redis, PostgreSQL, Vault",
    },
    {
        year: "04/2022 - 03/2024",
        title: "Senior Software Engineer",
        company: "Form3 Technologies",
        icon: Code2,
        color: "bg-green-500",
        position: "Senior Software Engineer",
        duration: "Apr 2022 - Mar 2024",
        description: "● Collaborated closely with Business Analysts and the development team to design and implement a robust cross-currency outbound payments system, including comprehensive performance testing to ensure efficiency and reliability. ● Proactively identified and implemented strategic improvements in the testing suite, achieving a significant reduction in test runtime by up to 20%, thereby enhancing efficiency and productivity. ● Developed and deployed advanced monitoring dashboards and alert systems, significantly enhancing real-time oversight and support for on-call engineers, leading to faster issue resolution and improved system reliability.",
        responsibilities: [
            "Collaborated closely with Business Analysts and the development team to design and implement a robust cross-currency outbound payments system, including comprehensive performance testing to ensure efficiency and reliability.",
            "Proactively identified and implemented strategic improvements in the testing suite, achieving a significant reduction in test runtime by up to 20%, thereby enhancing efficiency and productivity.",
            "Developed and deployed advanced monitoring dashboards and alert systems, significantly enhancing real-time oversight and support for on-call engineers, leading to faster issue resolution and improved system reliability.",
        ],
    },
    {
        year: "11/2020 - 03/2022",
        title: "Senior Software Engineer",
        company: "Unfold Gaming, Berlin Germany",
        icon: Code2,
        color: "bg-purple-500",
        position: "Senior Software Engineer",
        duration: "Nov 2020 - Mar 2022",
        description: "● Engaged in-depth with domain experts to gain a comprehensive understanding of product specifications, leading to the successful identification and resolution of critical issues, thereby enhancing product quality and performance. ● Spearheaded the overhaul of legacy codebases, aligning them with modern development standards. This strategic refactoring resulted in a 50% reduction in effort required for onboarding new games, concurrently slashing operating costs and significantly boosting system functionality. ● Led the backend development of three of the company's most complex games, showcasing advanced technical acumen. Simultaneously, I enhanced the testing framework, enabling robust support for new features, thereby ensuring seamless integration and optimal performance.",
        responsibilities: [
            "Engaged in-depth with domain experts to gain a comprehensive understanding of product specifications, leading to the successful identification and resolution of critical issues, thereby enhancing product quality and performance.",
            "Spearheaded the overhaul of legacy codebases, aligning them with modern development standards. This strategic refactoring resulted in a 50% reduction in effort required for onboarding new games, concurrently slashing operating costs and significantly boosting system functionality.",
            "Led the backend development of three of the company's most complex games, showcasing advanced technical acumen. Simultaneously, I enhanced the testing framework, enabling robust support for new features, thereby ensuring seamless integration and optimal performance.",
        ],
    },
    {
        year: "08/2019 - 09/2020",
        title: "Senior Software Engineer",
        company: "Smava GmbH, Berlin Germany",
        website: "https://www.smava.de/",
        icon: Code2,
        color: "bg-purple-500",
        position: "Senior Software Engineer",
        duration: "Aug 2019 - Sep 2020",
        description: "● Revamped and modularized the offer page, optimizing its presentation time, which directly contributed to a notable 30% increase in customer retention by enhancing user experience and engagement. ● Successfully integrated a sophisticated third-party Video Identification system to streamline the checkout process, markedly enhancing the customer experience and increasing transactional efficiency.",
        responsibilities: [
            "Revamped and modularized the offer page, optimizing its presentation time, which directly contributed to a notable 30% increase in customer retention by enhancing user experience and engagement.",
            "Successfully integrated a sophisticated third-party Video Identification system to streamline the checkout process, markedly enhancing the customer experience and increasing transactional efficiency.",
        ],
    },
    {
        year: "06/2018 - 07/2019",
        title: "Senior Software Engineer",
        company: "Auto1 Group GmbH, Berlin Germany",
        website: "https://www.auto1-group.com/",
        icon: Code2,
        color: "bg-purple-500",
        position: "Senior Software Engineer",
        duration: "Jun 2018 - Jul 2019",
        description: "Orchestrated the design and implementation of specialized refund microservices, significantly streamlining the processing of car refund transactions, thereby improving operational efficiency and customer satisfaction.Successfully unified legacy and contemporary search microservices, achieving a substantial reduction in the maintenance costs of the search module while ensuring seamless functionality and system reliability.Advanced the user interface by enhancing search filters and refining the relevance algorithm on car search pages, leading to a more intuitive and efficient user experience, and thereby increasing user engagement and satisfaction.",
        responsibilities: [
            "Orchestrated the design and implementation of specialized refund microservices, significantly streamlining the processing of car refund transactions, thereby improving operational efficiency and customer satisfaction.",
            "Successfully unified legacy and contemporary search microservices, achieving a substantial reduction in the maintenance costs of the search module while ensuring seamless functionality and system reliability.",
            "Advanced the user interface by enhancing search filters and refining the relevance algorithm on car search pages, leading to a more intuitive and efficient user experience, and thereby increasing user engagement and satisfaction.",
        ],
    },
    {
        year: "03/2017 - 06/2018",
        title: "Lead Software Engineer",
        company: "Emaratech FZ LLC, Dubai UAE (https://www.emaratech.ae/)",
        icon: Code2,
        color: "bg-purple-500",
        position: "Lead Software Engineer",
        duration: "Mar 2017 - Jun 2018",
        description: "Actively managed the application's technology platform, overseeing the project pipeline and strategically setting development priorities to align with organizational goals, thereby ensuring timely delivery and optimal resource allocation.Collaborated with a team of engineers to design highly efficient database queries and robust schemas, significantly enhancing the analytics reporting capabilities, leading to more insightful data-driven decision-making processes.Innovatively designed and refined algorithms tailored to customer specifications and feedback, delivering solutions that significantly improved process efficiency and met diverse customer needs effectively.",
        responsibilities: [
            "Actively managed the application's technology platform, overseeing the project pipeline and strategically setting development priorities to align with organizational goals, thereby ensuring timely delivery and optimal resource allocation.",
            "Collaborated with a team of engineers to design highly efficient database queries and robust schemas, significantly enhancing the analytics reporting capabilities, leading to more insightful data-driven decision-making processes.",
            "Innovatively designed and refined algorithms tailored to customer specifications and feedback, delivering solutions that significantly improved process efficiency and met diverse customer needs effectively.",
        ],
    },
    {
        year: "02/2015 - 03/2017",
        title: "Solution Architect",
        company: "Vodworks PS Limited, Lahore Pakistan. (http://www.vodworks.com/)",
        icon: Code2,
        color: "bg-purple-500",
        logo: brilliantgamezlabs_logo,
        position: "Solution Architect",
        duration: "Feb 2015 - Mar 2017",
        description: "Expertly managed and executed sophisticated customization and configuration projects for a Video-on-Demand (VOD) solution, ensuring tailor-made functionalities that met specific client needs and enhanced user experience.Orchestrated and led comprehensive technical workshops and educational sessions for junior software engineers, fostering skill development and knowledge transfer, and contributing to the overall team's technical proficiency and growth.Skillfully presented detailed roadmaps and technology infrastructure plans to customers, showcasing in-depth expertise in APIs, platform infrastructure, security, and integration capabilities, thereby enhancing customer understanding and trust in our solutions.",
        responsibilities: [
            "Expertly managed and executed sophisticated customization and configuration projects for a Video-on-Demand (VOD) solution, ensuring tailor-made functionalities that met specific client needs and enhanced user experience.",
            "Orchestrated and led comprehensive technical workshops and educational sessions for junior software engineers, fostering skill development and knowledge transfer, and contributing to the overall team's technical proficiency and growth.",
            "Skillfully presented detailed roadmaps and technology infrastructure plans to customers, showcasing in-depth expertise in APIs, platform infrastructure, security, and integration capabilities, thereby enhancing customer understanding and trust in our solutions.",
        ],
    },
    {
        year: "03/2009 – 02/2015",
        title: "Principal Software Engineer",
        company: "NorthBay Solutions Solutions (CDocs), Lahore Pakistan. (https://www.northbaysolutions.net/)",
        icon: Code2,
        color: "bg-purple-500",
        position: "Principal Software Engineer",
        duration: "Mar 2009 - Feb 2015",
        description: "Collaborated closely with the business team to identify and pursue project leads, accurately estimate efforts, and successfully secure new projects, contributing to the company's business growth and project portfolio expansion.Teamed up with software developers and testers to architect and create robust solutions, ensuring they met clients' critical requirements for functionality, scalability, and performance, resulting in high client satisfaction and system reliability.Led key software development initiatives as the subject matter expert, serving as the primary liaison between the technical team and project management staff, ensuring seamless communication and alignment of project goals and timelines.Implemented a rigorous peer code review process to effectively distribute error-checking responsibilities significantly enhancing the debugging process and improving the overall quality and reliability of the codebase.",
        responsibilities: [
            "Collaborated closely with the business team to identify and pursue project leads, accurately estimate efforts, and successfully secure new projects, contributing to the company's business growth and project portfolio expansion.",
            "Teamed up with software developers and testers to architect and create robust solutions, ensuring they met clients' critical requirements for functionality, scalability, and performance, resulting in high client satisfaction and system reliability.",
            "Led key software development initiatives as the subject matter expert, serving as the primary liaison between the technical team and project management staff, ensuring seamless communication and alignment of project goals and timelines.",
            "Implemented a rigorous peer code review process to effectively distribute error-checking responsibilities significantly enhancing the debugging process and improving the overall quality and reliability of the codebase.",
        ],
    },
];
export const PASSIONS = [
    {
        Icon: Heart,
        title: "Uesr Experience",
        description: "Developed and maintained web applications using React.js and Redux.",
    },
   {
        Icon: BookOpen,
        title: "Continuous Learning",
        description: "Developed and maintained web applications using React.js and Redux.",
    },
    {
        Icon: Coffee,
        title: "Problem Solving",
        description: "Developed and maintained web applications using React.js and Redux.",
    },
];
export const EDUCATION = [
    {
        institution: "University of Punjab, Lahore, Pakistan.",
        degree: "M.Sc. (Computer Science)",
        duration: "",
        details: [  
            "Graduated with Honors, achieving a GPA of 3.8/4.0.",
            "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.",
            "Active member of the Computer Science Club, organizing coding workshops and hackathons.",
        ],
    },
];
export const LANGUAGES = [
    {
        English: "Fluent C1",
        Urdu:   "Native", 
        Hindi: "Native",
        German: "intermediate - B1",
    }
]
export const CONTACT_INFO = [
    {
        label: "Phone",
        value: "+123 456 7890",
        icon: Phone
    },
    {
        label: "Email",
        value: "email@example.com",
        icon: Mail
    },
    {
        label: "Address",
        value: "123 Main St, Anytown, USA",
        icon: MapPin
    }
];
export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: BsGithub,
        url: "https://github.com",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://linkedin.com",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Twitter",
        icon: BsTwitter,
        url: "https://twitter.com/",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:alex@example.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    }
];
