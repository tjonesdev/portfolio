import React from "react";
export const Background = props => {
  return (
    <div className='background' aria-hidden='true'>
      <div className='bkg-box bkg-box--right'>
        <div className='bkg-el bkg-el--top'></div>
        <div className='bkg-el bkg-el--left'></div>
        <div className='bkg-el bkg-el--right'></div>
        <div className='bkg-el bkg-el--bottom'></div>
      </div>
      <div className='bkg-box bkg-box--left'>
        <div className='bkg-el bkg-el--top'></div>
        <div className='bkg-el bkg-el--left'></div>
        <div className='bkg-el bkg-el--right'></div>
        <div className='bkg-el bkg-el--bottom'></div>
      </div>
    </div>
  );
};
