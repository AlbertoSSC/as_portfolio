import "../styles/header.styles.scss";

import React from "react";

import { Element } from "react-scroll";

import githublogo from "@/assets/images/githublogo.svg";
import linkedinlogo from "@/assets/images/linkedinlogo.svg";

export const HeaderComponent: React.FC = () => {
  return (
    <>
      <Element id="home-header-anchor" name="home-header-anchor">
        <div className="introduction-container">
          <h2>Welcome! I'm</h2>
          <h1 className="text-name">Alberto S.</h1>
          <h1 className="text-frontend">Frontend developer</h1>
          <div className="rsss-container">
            <a
              href="https://github.com/AlbertoSSC/"
              target="_blank"
              rel="noopener"
            >
              <img src={githublogo} alt="github logo" width={42} />
            </a>
            <a
              href="https://linkedin.com/in/albertos2c"
              target="_blank"
              rel="noopener"
            >
              <img
                className="linkedin-logo"
                src={linkedinlogo}
                alt="linkedin logo"
                width={36}
              />
            </a>
          </div>
        </div>
      </Element>
    </>
  );
};
