/** @format */

import React from "react";
import shopcart from "./images/shopcart.PNG";
import userpost from "./images/userpost.PNG";
import githubapi from "./images/githubapi.PNG";
import nextjs from "./images/nextjs.PNG";
import tictactoe from "./images/tictactoe.PNG";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className='container-fluid app__container'>
      <Navigation />
      <div className='jumbotron'>
        <h1 id='home'>Hello, my name is Crystal Csete.</h1>
        <p>
          I am a Full Stack Web Developer. Take a look at some of my projects!
        </p>

        <p>
          I love creating new websites, and learning new tech. I would love it
          if you looked at some of my projects.
        </p>
      </div>
      <div className='mid__page'>
        <p>HTML/CSS JavaScript React</p>
      </div>
      <div className='projects'>
        <div className='card'>
          <img src={shopcart} alt='Shopping Application' />
          <div className='card-body'>
            <h5 className='card-title'>Shopping Cart</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Using Typescript</h6>
            <p className='card-text'>An example Shopping Cart.</p>
            <button className='odd'>
              <a
                href='https://shopping-cart-ruby.vercel.app/'
                target='_blank'
                rel='noreferrer'>
                Shopping Cart
              </a>
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={userpost} alt='User Post Application' />
          <div className='card-body'>
            <h5 className='card-title'>Add a Post</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Using Redux</h6>
            <p className='card-text'>Add, Edit and Delete a Post</p>
            <button className='even'>
              <a
                href='https://user-post.vercel.app/'
                target='_blank'
                rel='noreferrer'>
                Make a Post
              </a>
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={githubapi} alt='Github Api Application' />
          <div className='card-body'>
            <h5 className='card-title'>GitHub API</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Using API</h6>
            <p className='card-text'>
              Search for GitHub users with the GitHub API
            </p>
            <button className='odd'>
              <a
                href='https://github-api-self.vercel.app/'
                target='_blank'
                rel='noreferrer'>
                GitHub Api
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='mid__page'>
        <p>API GitHub Vercel MongoDB</p>
      </div>
      <div className='projects projects__bottom'>
        <div className='card'>
          <img src={nextjs} alt='Nextjs Application' />
          <div className='card-body'>
            <h5 className='card-title'>Articles</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Using Nextjs</h6>
            <p className='card-text'>Article Landing Page.</p>
            <button className='even'>
              <a
                href='https://nextjs-blog-xi-red-58.vercel.app/'
                target='_blank'
                rel='noreferrer'>
                Nextjs Blog Application
              </a>
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={tictactoe} alt='Tic Tac Toe Application' />
          <div className='card-body'>
            <h5 className='card-title'>Play Tic Tac Toe</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Using React</h6>
            <p className='card-text'>Play Tic Tac Toe</p>
            <button className='odd'>
              <a
                href='https://tic-tac-toe-app-eight.vercel.app/'
                target='_blank'
                rel='noreferrer'>
                Tic Tac Toe Application
              </a>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
