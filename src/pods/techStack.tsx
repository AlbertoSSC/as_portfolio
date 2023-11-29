import React from "react";

import htmlLogo from "@/assets/images/html-logo.svg";
import cssLogo from "@/assets/images/css-logo.svg";
import jsLogo from "@/assets/images/javascript-logo.svg";
import reactLogo from "@/assets/images/react-logo.svg";

export const TechStackComponent: React.FC = () => {
  return (
    <>
      <div className="techStack-container">
        <div className="techStack-item">
          <img src={htmlLogo} alt="" />
          <p>HTML</p>
        </div>
        <div className="techStack-item">
          <img src={cssLogo} alt="" />
          <p>CSS</p>
        </div>
        <div className="techStack-item">
          <img src={jsLogo} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="techStack-item">
          <img className="react-logo" src={reactLogo} alt="" />
          <p>React</p>
        </div>
      </div>
    </>
  );
};
