/** @format */

import React from "react";
import shopcart from "./images/shopcart.PNG";
import userpost from "./images/userpost.PNG";
import githubapi from "./images/githubapi.PNG";
import nextjs from "./images/nextjs.PNG";

function App() {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1>Hello, my name is Crystal Csete.</h1>
        <p>
          I am a Full Stack Web Developer. Take a look at some of my projects!
        </p>
      </div>
      <div className='about__text'>
        <p>
          I love creating new websites, and learning new tech. I would love it
          if you looked at some of my projects. I am looking to connect and
          would love to get started in this new career!
        </p>
      </div>
      <div>
        <p className='top__text'>
          Here are some of my projects. Click the thumbnail's to enlarge, or the
          link to see the deployed application.
        </p>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail top'>
            <a href={shopcart} target='_blank' rel='noreferrer'>
              <img src={shopcart} alt='Shopping website' />
              <div className='caption'>
                <p>
                  <a href='https://shopping-cart-ruby.vercel.app/'>
                    Shopping Cart website
                  </a>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail top'>
            <a href={userpost} target='_blank' rel='noreferrer'>
              <img src={userpost} alt='User Post website' />
              <div className='caption'>
                <p>
                  <a href='https://user-post.vercel.app/'>Add Posts website</a>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail top'>
            <a href={githubapi} target='_blank' rel='noreferrer'>
              <img src={githubapi} alt='Github Api website' />
              <div className='caption'>
                <p>
                  <a href='https://github-api-self.vercel.app/'>
                    GitHub Api website
                  </a>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail bottom'>
            <a href={nextjs} target='_blank' rel='noreferrer'>
              <img src={nextjs} alt='Shopping website' />
              <div className='caption'>
                <p>
                  <a href='https://nextjs-blog-xi-red-58.vercel.app/'>
                    Nextjs Blog website
                  </a>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <nav className='navbar navbar-fixed-bottom'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#home'>
              Crystal Csete's Portfolio
            </a>
          </div>
          <ul className='nav navbar-nav'>
            <li>
              <a
                href='https://github.com/crystal-csete'
                target='_blank'
                rel='noreferrer'>
                My GitHub
              </a>
            </li>
            <li>
              <a
                href='www.linkedin.com/in/crystal-csete'
                target='_blank'
                rel='noreferrer'>
                My Linkedin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
