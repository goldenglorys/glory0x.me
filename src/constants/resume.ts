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
      'Designed custom business processes applications to address complex business operations, scale in any angle, solve pain points challenges and optimize their workflows efficiently.',
      'Created, managed, and maintained Robotics Process Automation processes operated by machines helping businesses solve complex problems and scale very fast towards achieving fast delivery outcomes.',
    ],
  },
  {
    company: 'Promenadeai',
    role: 'Software and QA Engineer',
    startDate: 'JUN 2021',
    endDate: 'JUN 2023',
    achievements: [
      'Played a pivotal role in enhancing the user experience by closely collaborating with the development team to refine and upgrade the interface & user experience of volunteer application.',
      'Build state of art tracking and monitoring features for both volunteers and organizers to measure their impacts.',
      'Conducted rigorous testing, including unit, feature, integration, and browser tests, to identify and rectify issues, resulting in a more robust and user-friendly version of the application.',
      'Contributed to scalability enhancements, enabling the software to adapt to the high demands of new features and increased user loads.',
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
