import React from 'react';
import './Card.css';
import extLinkArrow from '../../images/white-arrow.png'

const Card = props => {
  //const alternatingColor = ['#fff', '#000'];
  return (
    <div>
      <hr />
      <p className="card-heading">Projects</p>

      <div className="flex">
        {props.projects.map((project, index) => {
          return (
            <div key={index} className="card-wrapper">
              <div className="card-details">
                <div className="card-left">
                  <img
                    src={project.imgUrl}
                    className="thumb-image"
                    alt="thumbnail"
                  />
                </div>
                <div className="card-right">
                  <h1>{project.title}</h1>
                  <p className="card-details-copy">{project.details}</p>
                  
                  <div className="card-language-wrapper">
                    {project.language1 ? <p className="card-language">{project.language1}</p> : null}
                    {project.language2 ? <p className="card-language">{project.language2}</p> : null}
                    {project.language3 ? <p className="card-language">{project.language3}</p> : null}
                    {project.language4 ? <p className="card-language">{project.language4}</p> : null}
                    {project.language5 ? <p className="card-language">{project.language5}</p> : null}
                  </div>
                 
                
                
                </div>
                <div className="card-link-wrapper">
                    {project.link ? <a className="card-link" href={project.link} target="_blank">
                      <img className="ext-link-arrow" src={extLinkArrow} alt="external link arrow"/>
                    </a> : null}
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
