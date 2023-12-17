import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../assets/imgs/my-pic1.jpg';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! I'm <br /> Glory Olusola.
          </h1>
          <div className="my-pic">
            <img className="w-48 h-48 rounded-full" src={myPic} alt="my-avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a passionate<span className="highlight"> Software Engineer,{' '}aspiring Technologist</span> &{' '}
              <span className="highlight">currently a junior IT (Computer Science) major </span> 
              experienced in fullstack development, with a knack for problem-solving and a robust foundation in computer
              science principles, I have a deep interest in creating innovative solutions by leveraging IT capability. 
              I specializes in the integration layer that connects various components of a system together. 
              I am proficient in a range of programming languages, frameworks, and databases and I am also a strong advocate for open source and emerging technologies.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img className="w-16 h-16 rounded-full" src={myPic} alt="" />
        <div className="social">
          <a href="https://github.com/goldenglorys" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/glorydot0x" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>

          <a href="https://linkedin.com/in/glory-olusola" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>

          <a href="https://goldenglorys.github.io/me/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-file"></i> Résumé
            <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
