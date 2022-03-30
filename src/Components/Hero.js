import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero(){
  return(
    <div className = 'hero-container'>
      <video src = '/videos/video-1.mp4' autoPlay loop muted />
      <h1> ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <p>Let's have a cup of T.E.A !</p>
      <h2>Travel . Explore. Adventure (T.E.A)</h2>
      <div className = "hero-btns">
        <Button className ="btns"
          buttonStyle = "btn--outline"
          buttonsize = "btn--large">
          Get Started
        </Button>
        <Button className ="btns"
        buttonStyle = "btn--primary"
        buttonsize = "btn--large">
          Watch Trailer <i className = 'far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}


export default Hero;