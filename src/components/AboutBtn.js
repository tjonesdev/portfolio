import React from "react";
export const AboutBtn = props => {
  return (
    <button
      className='about-btn--close btn-ripple'
      onClick={props.toggleOverlay}
      aria-label='Close About Me Overlay'
      tabindex={props.isOverlay ? "0" : "-1"}>
      <div className='ripple' aria-hidden='true'></div>
      <span className='about-bar about-bar--left' aria-hidden='true'></span>
      <span className='about-bar about-bar--right' aria-hidden='true'></span>
    </button>
  );
};
