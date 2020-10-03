import React from "react";
export const About = props => {
  return (
    <section
      id='about-section'
      className='about section'
      aria-label='About Me Section'
      aria-hidden={props.overlayType === "about" ? "false" : "true"}>
      <h3 className='about-header section-header' aria-label='Section Header'>
        About Me
      </h3>
      <p>
        I'm a web developer, born and raised in beautiful St. Louis, MO,
        passionate about learning and exploring new technologies. I strive to
        glean something new from each application I create, and I'm always
        searching for the next project to move forward with.
      </p>
      <p>
        Although I specialize in front-end technologies, I'm excited to get my
        feet wet with full stack as well! I care enormously about making
        responsive, accessibility-centric designs that are beautiful and
        innovative.
      </p>
      <p>
        I am always searching for my next opportunity, so drop me a line if
        you're interested in collaborating with me!
      </p>
    </section>
  );
};
