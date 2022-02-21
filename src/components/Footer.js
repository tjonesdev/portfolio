import React from 'react';
export const Footer = (props) => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<footer>
			<span className='copyright' aria-label='Copyright'>
				&copy; {year} | Tracey Jones &#10084;
			</span>
		</footer>
	);
};
