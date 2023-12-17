export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Glory Olusola';

const bio = [
  'As a Computer Science student and Software Engineer, I am passionate about using technology to solve real-world problems. With a strong foundation in Computer Science and Engineering principles and programming languages such as JavaScript, Python, TypeScript and PHP. I am constantly seeking opportunities to learn and apply my skills in new and innovative ways.',
  'In addition to my academic pursuits, I have completed internships and have work experience at technology companies and established startups, where I have gained valuable experience working on complex software projects. I am a team player who enjoys collaborating with others and sharing knowledge.',
  'I am excited to continue learning and growing as a software engineer, and I am eager to apply my skills and knowledge to tackle challenging problems and make a positive impact on the world.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'Invisible Technologies',
    role: 'Software and Automation Engineer',
    startDate: 'MAY 2021',
    endDate: 'JUN 2023',
    achievements: [
      'Designed and implemented custom business processes applications, achieving a 70% improvement in operational efficiency.',
      'Managed, and maintained Robotics Process Automation processes, contributing to a 150% increase in company MRR to $1million for a single quarter.',
      'Collaborate cross-functionally to deliver multiple key projects, demonstrating effective teamwork and contributing to significant business outcomes.',
      'Contributed in the implementation of an API service for executing Dockerized automation in Kubernetes (k8), enhancing system scalability and performance.',
      'Designed and implemented several selenium-based automation scripts, incorporating robust proxy-rotation, headless browser mechanisms, and efficient captcha solutions, resulting in 5x improvement in data scraping, screenshot retrieval efficiency and super fast and accurate deliverables',
      'Played a key role in the transition of the company’s core processes and automation orchestration services from a typescript-serverless architecture to a Python-based Django service, achieving 4x improvement in performance and a reduction in error rates.'
    ],
  },
  {
    company: 'Promenadeai',
    role: 'Software and QA Engineer',
    startDate: 'JUN 2021',
    endDate: 'JUN 2023',
    achievements: [
      'Spearheaded initiatives to enhance user experience by closely collaborating with the development team. Led the refinement and upgrade of the interface, resulting in a more intuitive and visually appealing volunteer application.',
      'Innovatively designed and implemented cutting-edge tracking and monitoring features for volunteers and organizers, providing a comprehensive tool to measure and analyze their respective impacts on the platform.',
      'Implemented a comprehensive testing strategy, encompassing unit, feature, integration, and browser tests. Identified and resolved issues systematically, leading to the development of a robust, reliable, and user-friendly application version.',
      'Played a key role in enhancing the scalability of the software, facilitating its seamless adaptation to the demands of new features and increased user loads. This contribution ensured the application’s performance remained optimal under varying conditions.',
    ],
  },
  {
    company: 'DevCareer Inc',
    role: 'Data Science Intern',
    startDate: 'AUG 2020',
    endDate: 'DEC 2020',
    achievements: [
      'Explored data science and machine learning using Python and SQL',
      'Built a stock market price predictive machine learning model.',
    ],
  },
  {
    company: 'Digit Info & Software Tech',
    role: 'Full-Stack Developer',
    startDate: 'SEP 2019',
    endDate: 'MAY 2021',
    achievements: [
      'Developed and maintained several frontend and backend services for both internal tools and external partner and customers services.',
      'Created a real-time inventory and custom business management applications using Nodejs, WebSocket, and Angular.',
      'Implemented and maintained backend services of hospital management systems using Laravel, Angular, Nodejs, Nestjs, MySQL, Linux and Windows Server.',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['Angular', 'React', 'Vue', 'Nodejs', 'Nextjs', 'Django', 'Flask', 'FastAPI', 'Laravel'],
  },
  {
    title: 'Storages/Databases',
    body: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'Redis'],
  },
  {
    title: 'Tooling',
    body: ['Linux', 'Git', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Selenium', 'Airflow'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Information Technology at University of Eastern Finland',
    endDate: 'MAY 2026',
    relevant: [
      'Introduction to Computing',
      'Programming I (Python)',
      'Computer Systems',
      'Discrete Structure',
      'Vector Analysis',
    ],
  },
  {
    title: 'SQI College of ICT, Ogbomoso',
    endDate: 'JULY 2023',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'International Cybersecurity Institute, ICSI',
    date: 'AUG 2020',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'Yoruba',
    level: 'PROFICIENT',
  },
  {
    name: 'Finnish',
    level: 'BEGINNER',
  },
];

const hobbies = ['Learning', 'Reading', 'Teaching', 'Football'];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
