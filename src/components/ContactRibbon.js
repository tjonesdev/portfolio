import React from "react";
import {links} from "../index";
export const ContactRibbon = props => {
  return (
    <div className='contact-ribbon' aria-label='Contact Ribbon'>
      <button
        className='contact-ribbon-btn btn-ripple'
        aria-label='Contact Ribbon Button'
        aria-expanded={props.isRibbon ? "true" : "false"}
        aria-pressed={props.isRibbon ? "true" : "false"}
        aria-controls='contact-ribbon-items'
        onClick={props.toggleRibbon}>
        <div className='ripple' aria-hidden='true'></div>
        <i class='far fa-paper-plane' aria-hidden='true'></i>
      </button>
      <div
        className='contact-ribbon-bkg'
        style={{
          width: props.isRibbon ? "15.875em" : "0",
          backgroundColor: props.isRibbon ? "" : "transparent"
        }}
        aria-label='Contact Ribbon Container'>
        <ul
          id='contact-ribbon-items'
          style={{
            visibility: props.isRibbon ? "visible" : "hidden",
            opacity: props.isRibbon ? "1" : "0"
          }}
          className='contact-ribbon-items'
          aria-label='Contact Ribbon Items'>
          <li aria-label='Contact Ribbon Item'>
            <a
              className='contact-ribbon-link'
              aria-label='Contact Ribbon Link'
              href={`mailto:${links.email}`}
              tab-index={props.isRibbon ? "0" : "-1"}>
              <i class='far fa-envelope' aria-label='Email'></i>
            </a>
          </li>
          <li aria-label='Contact Ribbon Item'>
            <a
              className='contact-ribbon-link'
              aria-label='Contact Ribbon Link'
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
					<li aria-label='Contact Ribbon Item'>
						<a
							className='contact-ribbon-link'
							aria-label='Contact Ribbon Link'
							href={links.gitlab}
							target='_blank'
							rel='noopener noreferrer'
							tab-index={props.isRibbon ? '0' : '-1'}>
							<i class='fab fa-gitlab' aria-label='Gitlab'></i>
						</a>
					</li>
              href={links.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              tab-index={props.isRibbon ? "0" : "-1"}>
              <i class='fab fa-linkedin-in' aria-label='Linked-In'></i>
            </a>
          </li>
          <li aria-label='Contact Ribbon Item'>
            <a
              className='contact-ribbon-link'
              aria-label='Contact Ribbon Link'
              href={links.codepen}
              target='_blank'
              rel='noopener noreferrer'
              tab-index={props.isRibbon ? "0" : "-1"}>
              <i class='fab fa-codepen' aria-label='Codepen'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
