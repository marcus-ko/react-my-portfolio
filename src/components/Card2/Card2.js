import React from 'react';
import './Card2.css';
import extLinkArrow from '../../images/white-arrow.png'

/* We use props here to pass in data from useState on Home.js */
const Card2 = props => {
  //const alternatingColor = ['#fff', '#000'];
  return (
    <div className="card-container">
      {/* <hr /> */}
      <h1 className="card-heading">Experience</h1>

      <div className="flex">
        {props.projects.map((project, index) => {
          return (
            <div key={index} className="card-wrapper">
             <img
                    src={project.imgUrl}
                    className="thumb-image"
                    alt="thumbnail"
                  />
              <div className="card-details">
          
                  <div className="card-link-wrapper">
                    <h1>{project.title}</h1>
                    {project.link ? <a className="card-link" rel="noreferrer" href={project.link} target="_blank">
                      <img className="ext-link-arrow" src={extLinkArrow} alt="external link arrow"/>
                      </a> : null}
                  </div>
                  <p className="card-details-copy">{project.details}</p>
                  
                  <div className="card-language-wrapper">
                    {project.languages?.map((lang, index) => (
                      <p key={index} className="card-language">{lang}</p>
                    ))}
                  </div>
   
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card2;
