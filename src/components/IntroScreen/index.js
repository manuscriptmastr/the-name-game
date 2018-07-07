import React from 'react';
import { Link } from 'react-router-dom';

let IntroScreen = () =>
  <main>
    <h1>The Name Game</h1>
    <Link to="/play" title="Play The Name Game" >Play</Link>
  </main>

export default IntroScreen;