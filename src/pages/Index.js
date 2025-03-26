import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Evelyn Yixuan Liu's personal website. Computational Linguist, "
      + 'UB & NNU Alumni.'
    }
  >
    <article className="post" id="index">
      <p>
        {' '}
        Welcome to my website! Glad you are here! Please feel free to explore more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link> to see my educational and professional experience, browse through my <Link to="/projects">projects</Link>,{' '}
        . If you would like to get in touch, you can always{' '}
        <Link to="/contact">contact</Link> me. I would love to hear from you and connect!
      </p>
    </article>
  </Main>
);

export default Index;
