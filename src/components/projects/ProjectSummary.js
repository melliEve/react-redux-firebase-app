import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summery">
      <div className="card-content grey-text text-darken-3">
        <h4>SummaryComponent</h4>
        <span className="card-title">{project.title}</span>
        <p>Posted by Melli</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}
export default ProjectSummary;