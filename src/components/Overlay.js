import React from "react";
export const Overlay = props => {
  return (
    <div
      className={`overlay ${
        props.overlayType === "nav" ? "nav-overlay" : "about-overlay"
      }`}
      style={{display: props.isOverlay ? "flex" : "none"}}
      aria-label={
        props.overlayType === "nav"
          ? "Navigation Overlay"
          : props.overlayType === "about"
          ? "About Me Overlay"
          : ""
      }
      aria-hidden={props.isOverlay ? "false" : "true"}
      role='dialog'>
      <div className='overlay-animate--container'>
        <span className='overlay-animate'></span>
      </div>
      <div className='overlay-content' aria-label='Overlay Content'>
        {props.children}
      </div>
    </div>
  );
};
