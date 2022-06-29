import React from "react";
import "./resume.css";
import { timelineElements } from "../img/resume";
import "react-vertical-timeline-component/style.min.css";
import Resume from "./Resume";

function ResumeList() {
  return (
    <>
      <br />
      <h1 className="c-title">Resume</h1>
      <div className="timeline-container">
        <br />
        {timelineElements.map((element) => (
          <Resume
            key={element.id}
            name={element.name}
            title={element.title}
            company={element.company}
            school={element.school}
            description={element.description}
            skills={element.skills}
            date={element.date}
          />
        ))}
      </div>
    </>
  );
}

export default ResumeList;
