import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { prefixPathWithPublicHomeUrl } from './utils';

const Header = (props: {}) => {
  return (
    <div className='header'>
      <a href='/'>
        <img src={prefixPathWithPublicHomeUrl('/logo.png')}></img>
      </a>
      <div className='nav'>
        <NavLink to='/'>Overview</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <a href='https://2-vivian-chen.pixels.com/' target="_blank">Prints</a>
        <NavLink to='/about'>About</NavLink>
        <a href='https://hunter-of-light.tumblr.com/' target="_blank">Blog</a>
      </div>
    </div>
  )
}

export default Header;