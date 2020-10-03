import React from "react";
import {links} from "../index";
export const Contact = props => {
  return (
    <section
      id='contact-section'
      className='contact section'
      aria-label='Contact Section'>
      <h3 className='contact-header section-header' aria-label='Section Header'>
        Contact
      </h3>
      <div className='contact-container' aria-label='Contact Container'>
        <div
          className='contact-text-container'
          aria-label='Contact Text Container'>
          <p>Interested in collaborating with me? I'd love to chat!</p>
        </div>
        <a
          className='contact-email btn-ripple'
          href={`mailto:${links.email}`}
          tabindex={props.isOverlay ? "-1" : "0"}
          aria-label='Email Link'>
          <div className='ripple' aria-hidden='true'></div>
          tracey.l.jones@outlook.com
        </a>
        <ul aria-label='Contact List' className='contact-list'>
          <li aria-label='Contact Item'>
            <a
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link btn-ripple'
              tabindex={props.isOverlay ? "-1" : "0"}
              aria-label='Contact Link'>
              <div className='ripple' aria-hidden='true'></div>
              <i class='fab fa-github' aria-label='Github'></i>
            </a>
          </li>
          <li aria-label='Contact Item'>
            <a
              href={links.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link contact-linkedin btn-ripple'
              tabindex={props.isOverlay ? "-1" : "0"}
              aria-label='Contact Link'>
              <div className='ripple' aria-hidden='true'></div>
              <i class='fab fa-linkedin-in' aria-label='Linked-In'></i>
            </a>
          </li>
          <li aria-label='Contact Item'>
            <a
              href={links.codepen}
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link btn-ripple'
              tabindex={props.isOverlay ? "-1" : "0"}
              aria-label='Contact Link'>
              <div className='ripple' aria-hidden='true'></div>
              <i class='fab fa-codepen' aria-label='Codepen'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
