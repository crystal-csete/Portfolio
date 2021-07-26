/** @format */

import React from "react";

const Navigation = () => {
  return (
    <nav class='navbar navbar-inverse top__nav'>
      <p class='navbar-text'>Crystal Csete: Portfolio</p>

      <ul class='nav navbar-nav'>
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
    </nav>
  );
};

export default Navigation;
