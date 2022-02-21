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
				I'm a software engineer based in Kansas City, MO, passionate about
				learning and exploring new technologies. I strive to learn something new
				from each application I create, and I'm always searching for the next
				project to move forward with.
			</p>
			<p>
				Although I specialize in front-end technologies, I do have experience
				with PHP, and I am interested to learn additional languages as well! I
				care a lot about making responsive, accessibility-centric websites and
				applications that are beautiful and innovative. I prioritize the user
				experience above all else.
};
