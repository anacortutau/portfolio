import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component/dist-modules";

function Resume({ title, company, description, skills, date, name, school }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3 className="history">{name}</h3>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h5 className="vertical-timeline-element-company">{company}</h5>
        <h5 className="vertical-timeline-element-company">{school}</h5>
        <p id="description">{description}</p>
        <p className="skills">{skills}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Resume;
