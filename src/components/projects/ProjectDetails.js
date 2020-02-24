import React from 'react';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';


const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Details - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>        </div>
        <div className="card-action gret lihten-4 grey-text">
          <div>Posted by Melli</div>
          <div>2nd September, 4am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;