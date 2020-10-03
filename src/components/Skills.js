import React from "react";
export const Skills = props => {
  return (
    <section
      id='skills-section'
      className='skills section'
      aria-label='Skills Section'>
      <h3 className='skills-header section-header' aria-label='Section Header'>
        Skills
      </h3>
      <div className='skills-container' aria-label='Skills Container'>
        <ul aria-label='Skills List'>
          <li aria-label='Skill Item'>JavaScript</li>
          <li aria-label='Skill Item'>D3</li>
          <li aria-label='Skill Item'>React</li>
          <li aria-label='Skill Item'>Redux</li>
          <li aria-label='Skill Item'>Git</li>
          <li aria-label='Skill Item'>Web Design</li>
          <li aria-label='Skill Item'>Material UI</li>
        </ul>
      </div>
    </section>
  );
};
