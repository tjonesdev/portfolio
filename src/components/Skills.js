import React from 'react';
export const Skills = (props) => {
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
					<li aria-label='Skill Item'>SCSS</li>
					<li aria-label='Skill Item'>Tailwind</li>
					<li aria-label='Skill Item'>JavaScript</li>
					<li aria-label='Skill Item'>jQuery</li>
					<li aria-label='Skill Item'>React & Redux</li>
					<li aria-label='Skill Item'>Vue</li>
					<li aria-label='Skill Item'>WordPress</li>
					<li aria-label='Skill Item'>PHP</li>
					<li aria-label='Skill Item'>Laravel</li>
					<li aria-label='Skill Item'>Webpack</li>
					<li aria-label='Skill Item'>Git</li>
				</ul>
			</div>
		</section>
	);
};
