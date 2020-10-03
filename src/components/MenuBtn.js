import React from "react";
export const MenuBtn = props => {
  return (
    <button
      className={`menu-btn btn-ripple ${
        props.overlayType === "nav" ? "menu-btn--close" : "menu-btn--open"
      }`}
      style={{zIndex: props.overlayType === "about" ? "3" : ""}}
      onClick={props.toggleOverlay}
      aria-expanded={props.overlayType === "nav" ? "true" : "false"}
      aria-pressed={props.overlayType === "nav" ? "true" : "false"}
      aria-controls='menu-items'
      aria-label={props.overlayType === "nav" ? "Close Menu" : "Open Menu"}>
      <div className='ripple' aria-hidden='true'></div>
      <span className='menu-bar menu-bar--top' aria-hidden='true'></span>
      <span className='menu-bar menu-bar--middle' aria-hidden='true'></span>
      <span className='menu-bar menu-bar--bottom' aria-hidden='true'></span>
    </button>
  );
};
