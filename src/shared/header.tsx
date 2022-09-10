import React, {useRef, useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { prefixPathWithPublicHomeUrl } from './utils';

const Header = (props: {}) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  return (
    <div className='header animate__animated animate__fadeIn'>
      <a href='/'>
        <img src={prefixPathWithPublicHomeUrl('/logo.png')}></img>
      </a>
      <div className='nav-desktop'>
        <NavLink to='/'>Overview</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <a href='https://2-vivian-chen.pixels.com/' target="_blank">Prints</a>
        <NavLink to='/about'>About</NavLink>
        <a href='https://hunter-of-light.tumblr.com/' target="_blank">Blog</a>
      </div>
      <div className='nav-mobile-trigger' onClick={() => {setIsMobileNavVisible(!isMobileNavVisible)}}>
        <button className={`hamburger hamburger--collapse ${isMobileNavVisible ? 'is-active' : ''}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className={`nav-mobile ${isMobileNavVisible ? 'visible' : ''}`}>
        <NavLink onClick={() => {setIsMobileNavVisible(false)}} to='/'>Overview</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <a href='https://2-vivian-chen.pixels.com/' target="_blank">Prints</a>
        <NavLink to='/about'>About</NavLink>
        <a href='https://hunter-of-light.tumblr.com/' target="_blank">Blog</a>
      </div>
    </div>
  )
}

export default Header;