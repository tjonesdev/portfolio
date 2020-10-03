import React from "react";
export const LandingPage = props => {
  return (
    <section className='landing-page' aria-label='Landing Page'>
      {props.children}
      <div className='title-container' aria-label='Landing Page Container'>
        <h2 className='greeting' aria-label='Greeting'>
          {props.greeting}
        </h2>
        <h1 className='main-heading' aria-label='Main Heading'>
          <span className='i-am' aria-label='text-container'>
            <span className='i' aria-label='I'>
              I&nbsp;
            </span>
            <span className='am' aria-label='Am'>
              am
            </span>
          </span>
          <span className='name-container' aria-label='Name Container'>
            <span
              className='animation-block name-block'
              aria-hidden='true'></span>
            <span className='name' aria-label='Tracey'>
              Tracey
            </span>
          </span>
        </h1>
        <h2 className='sub-heading' aria-label='Sub Heading'>
          <span className='role-container' aria-label='Role Container'>
            <span
              className='animation-block role-block'
              aria-hidden='true'></span>
            <span className='role' aria-label='Web Developer'>
              {"<Web Developer />"}
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
};
