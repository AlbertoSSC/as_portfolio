import "@/styles/projects.styles.scss";

import React from "react";
import { Element } from "react-scroll";

import { ListItemButton } from "@mui/material";

import invoceImg from "@/assets/images/invoiceM.png";
import adoptAPetImg from "@/assets/images/Adopt_a_pet.png";
import apiImg from "@/assets/images/api.png";

export const ProjectsComponent: React.FC = () => {
  return (
    <>
      <Element id="projects-anchor" name="projects-anchor">
        <div className="projects-section-container">
          <div>
            <hr className="sections-hr" />
            <span className="sections-title">PROJECTS</span>

            <div className="projects-container">
              <ListItemButton
                href="https://adoption-store.vercel.app//"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "#2f385d3a" },
                  "&:active": { color: "white" },
                }}
                target="_blank"
                rel="noopener"
              >
                <div className="project-card-container">
                  <div className="text-container">
                    <h1 className="text-name">Adoption store</h1>
                    <h2>{"{ React · TypeScript }"} </h2>
                  </div>
                  <div className="img-container">
                    <img src={adoptAPetImg} alt="" />
                  </div>
                </div>
              </ListItemButton>

              <ListItemButton
                href="https://invoice-manager-eight.vercel.app/"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "#2f385d3a" },
                  "&:active": { color: "white" },
                }}
                target="_blank"
                rel="noopener"
              >
                <div className="project-card-container">
                  <div className="text-container">
                    <h1 className="text-name">Invoice manager</h1>
                    <h2>{"{ React · TypeScript }"} </h2>
                  </div>
                  <div className="img-container">
                    <img src={invoceImg} alt="" />
                  </div>
                </div>
              </ListItemButton>
              
              <ListItemButton
                href="https://api-lists.vercel.app/"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "#2f385d3a" },
                  "&:active": { color: "white" },
                }}
                target="_blank"
                rel="noopener"
              >
                <div className="project-card-container">
                  <div className="text-container">
                    <h1 className="text-name">API</h1>
                    <h2>{"{ React · TypeScript }"} </h2>
                  </div>
                  <div className="img-container">
                    <img src={apiImg} alt="" />
                  </div>
                </div>
              </ListItemButton>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};
