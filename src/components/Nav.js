import React from "react";
export const Nav = props => {
  return (
    <nav
      aria-label='Main Menu'
      className='nav'
      aria-hidden={
        props.windowSize < 600 && props.overlayType === "nav"
          ? "false"
          : props.windowSize > 600 && props.overlayType !== "about"
          ? "false"
          : "true"
      }>
      {props.children}
      <ul id='menu-items' className='menu-items' aria-label='Menu Items'>
        <li aria-label='Menu Item' className='about-menu-item menu-item'>
          <a
            href='#about-section'
            className='nav-link about-btn--open btn-ripple'
            onClick={props.toggleOverlay}
            aria-expanded={props.overlayType === "about" ? "true" : "false"}
            tabindex={props.overlayType === "nav" ? "0" : "-1"}
            aria-label='Menu Link: Open About Section'>
            <div className='ripple' aria-hidden='true'></div>
            About
          </a>
          {props.windowSize < 600 ? (
            <i
              className='fas fa-long-arrow-alt-right about-btn--open-arrow'
              aria-hidden='true'></i>
          ) : (
            ""
          )}
        </li>
        <li aria-label='Menu Item' className='menu-item'>
          <a
            href='#skills-section'
            className='nav-link btn-ripple'
            aria-label='Menu Link'
            tabindex={props.overlayType === "nav" ? "0" : "-1"}
            onClick={props.toggleOverlay}>
            <div className='ripple' aria-hidden='true'></div>
            Skills
          </a>
        </li>
        <li aria-label='Menu Item' className='menu-item'>
          <a
            href='#projects-section'
            className='nav-link btn-ripple'
            aria-label='Menu Link'
            tabindex={props.overlayType === "nav" ? "0" : "-1"}
            onClick={props.toggleOverlay}>
            <div className='ripple' aria-hidden='true'></div>
            Projects
          </a>
        </li>
        <li aria-label='Menu Item' className='menu-item'>
          <a
            href='#contact-section'
            className='nav-link btn-ripple'
            aria-label='Menu Link'
            tabindex={props.overlayType === "nav" ? "0" : "-1"}
            onClick={props.toggleOverlay}>
            <div className='ripple' aria-hidden='true'></div>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
