import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'glory0x.me',
    description: 'My Portfolio Website',
    github: 'https://github.com/goldenglorys/glory0x.me',
    live: 'https://glory0x-me.vercel.app/',
    stack: 'React + TypeScript + SASS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'MyVoluntier.com',
    description: 'A social platform for volunteers and event organizers to connect',
    github: '',
    live: 'https://myvoluntier.com',
    stack: 'Laravel + MySQL',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Decentralized e-Commerce',
    description: 'A decentralized e-commerce DApp for buying and selling products.',
    github: 'https://github.com/goldenglorys/decentralized-ecommerce',
    live: 'https://dapp-ecom.netlify.app/',
    stack: 'React + JavaScript + Solidity + IPFS + Truffle',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'PayCoins library',
    description: 'A nodejs library wrapper around paycoins platform API',
    github: 'https://github.com/goldenglorys/paycoins-node',
    live: 'https://www.npmjs.com/package/paycoins-node/v/0.0.1',
    stack: 'JavaScript',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'KoboCredit API Service',
    description: 'A loan service management platform.',
    github: 'https://github.com/goldenglorys/kobocredit-api',
    live: '',
    stack: 'Python + Django + PostgesSQL',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'CRUD API for Managing Customize System',
    description: 'A simple API implementation with various consumable endpoints',
    github: 'https://github.com/goldenglorys/eden-api',
    live: '',
    stack: 'Laravel + openAPI Spec',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'TypeScript Express API Service',
    description: 'An implementation of a full-fledge typescript API service',
    github: 'https://github.com/goldenglorys/ts-node-template',
    live: '',
    stack: 'TypeScript + Mongoose + ExpressJS + Logging +',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Image Fusion (RGB-HSI Converter)',
    description: 'Converting RGB to HSI image spectrum',
    github: 'https://github.com/goldenglorys/rgb-to-hsi',
    live: '',
    stack: 'Python + Numpy + OpenCV',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Stock Market Price Prediction ',
    description: 'A machine learning algorithm for predicting stock prices.',
    github: 'https://github.com/goldenglorys/jupyter-notebok-payloads/blob/master/stock_price_prediction_using_LSTM.ipynb',
    live: '',
    stack: 'Python + Jupyter Notebook',
    isPrivate: false,
    isLive: false,
  },
];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Glory Olusola's Projects" />
      <div className="group portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
