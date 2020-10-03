import React from "react";
export const Project = props => {
  return (
    <a
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
      className='project-card'
      aria-label='Project Card'
      tabindex={props.isOverlay ? "-1" : "0"}>
      <div className='project-content' aria-label='Project Content'>
        <div className='project-overlay-container' aria-hidden='true'>
          <div className='project-overlay'></div>
        </div>
        <div className='project-thumbnail-container'>
          <div className='project-thumbnail'>
            <iframe
              src={props.link}
              className='project-iframe'
              frameborder='0'
              scrolling='no'
              style={{opacity: props.opacity}}></iframe>
          </div>
        </div>
        <div className='project-info' aria-label='Project Info'>
          <span className='project-view' aria-label='View Project'>
            View Project
          </span>
          <span className='project-title' aria-label='Project Title'>
            {props.title}
          </span>
        </div>
      </div>
    </a>
  );
};
export const Projects = props => {
  return (
    <section
      id='projects-section'
      className='projects section'
      aria-label='Projects Section'>
      <h3
        className='projects-header section-header'
        aria-label='Section Header'>
        Projects
      </h3>
      <div className='projects-container' aria-label='Projects Container'>
        {props.children}
      </div>
    </section>
  );
};
