import React from "react";
import Project from "./Project";
import "./projectsList.css";
import { projects } from "../img/data";

function ProjectsList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="c-title">Projects</h1>
        <p className="pl-desc"></p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            name={item.name}
            img={item.img}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
