import {GradeType} from "./enumType";
import {PortfolioData} from "../contract/data/portfolio";

export const userInfo = {
    first_name: 'Ali',
    last_name: 'Nadi',
    mobile: '09376264899',
    mobile_txt: '+98 937 626 4899',
    skill: 'FullStack Developer',
    experience_years: '+6 Years',
    clients: '+50',
    projects: '+32',
    about_txt: 'I\'m a full stack developer and I love creating mental ideas and solving challenges so I can learn and have more fun, and that makes me love programming, i\'m not scared from new study and education and when i join in group, i have feel good and i trying to have good relation with members and trying to best work with them'
}

export const socialNetworkUrls = {
    linkedIn: 'https://www.linkedin.com/in/ali-nadi-89517a101/',
    github: 'https://github.com/25alinadi',
    instagram: '',
    youtube: '',
    email: 'alinadi14@gmail.com',
}

export const skillsList = [
    {
        title: "Frontend Developer",
        cv: "https://alinadi.ir/files/frontend.pdf",
        items:[
            {title: "ReactJs", grade: GradeType.Expert},
            {title: "NextJs", grade: GradeType.Expert},
            {title: "TypeScript", grade: GradeType.Expert},
            {title: "PWA", grade: GradeType.Advance},
            {title: "HTML", grade: GradeType.Expert},
            {title: "CSS", grade: GradeType.Expert},
            {title: "Javascript", grade: GradeType.Expert},
            {title: "JQuery", grade: GradeType.Expert},
            {title: "Tailwind", grade: GradeType.Expert},
            {title: "Bootstrap", grade: GradeType.Expert},
        ]
    },
    {
        title: "Backend Developer",
        cv: "https://alinadi.ir/files/backend.pdf",
        items:[
            {title: "Python", grade: GradeType.Advance},
            {title: "Django", grade: GradeType.Expert},
            {title: "FastApi", grade: GradeType.IntermediateHigh},
            {title: "Flask", grade: GradeType.IntermediateHigh},
            {title: "PHP", grade: GradeType.Advance},
            {title: "Laravel", grade: GradeType.Advance},
        ]
    },
    {
        title: "Mobile Developer",
        cv: "https://alinadi.ir/files/mobile.pdf",
        items:[
            {title: "Dart", grade: GradeType.Advance},
            {title: "Flutter", grade: GradeType.Expert},
            {title: "Android", grade: GradeType.IntermediateHigh},
            {title: "Kotlin", grade: GradeType.IntermediateHigh},
        ]
    },
    {
        title: "Other",
        cv: null,
        items:[
            {title: "VueJs", grade: GradeType.IntermediateHigh},
            {title: "WordPress", grade: GradeType.Expert},
            {title: "WordPress Plugin", grade: GradeType.Expert},
            {title: "WordPress Template", grade: GradeType.Expert},
            {title: "Celery", grade: GradeType.IntermediateHigh},
            {title: "SQl/MySql", grade: GradeType.Advance},
            {title: "RabbitMq", grade: GradeType.IntermediateHigh},
            {title: "Redis", grade: GradeType.IntermediateHigh},
            {title: "Docker", grade: GradeType.Familiar},
        ]
    },
]

export const portfolioList:Array<PortfolioData> = [
    {
        title: 'ShatootMarket Website',
        cover: "https://alinadi.ir/project/shatoot/shatoot_cover.png",
        tags: ['Python', 'Django', 'ReactJs', 'nextJs', 'Tailwind', 'PWA', 'HTML', 'CSS', 'javascript', 'jQuery', 'Styled-Component'],
        linkUrl: "https://shatootmarket.com/",
        githubUrl: null
    }
]
