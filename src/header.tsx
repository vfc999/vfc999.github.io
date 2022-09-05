import React from 'react';
import './header.scss';

const Header = (props: {}) => {
  return (
    <div className='header'>
      <a href='/'>
        <img src={`${process.env.PUBLIC_URL}/logo.png`}></img>
      </a>
      <div className='nav'>
        <a href='/'>Overview</a>
        <a href='/'>Portfolio</a>
        <a href='https://2-vivian-chen.pixels.com/' target="_blank">Prints</a>
        <a href='/'>About</a>
        <a href='https://hunter-of-light.tumblr.com/' target="_blank">Blog</a>
      </div>
    </div>
  )
}

export default Header;