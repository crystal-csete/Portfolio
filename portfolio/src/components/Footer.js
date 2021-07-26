/** @format */

import React from "react";

const Footer = () => {
  return (
    <nav className='navbar navbar-inverse navbar-fixed-bottom'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#home'>
            Return to top
          </a>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <a
              href='https://github.com/crystal-csete'
              target='_blank'
              rel='noreferrer'>
              <i className='fa fa-github-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/crystal-csete'
              target='_blank'
              rel='noreferrer'>
              <i className='fa fa-linkedin-square' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
