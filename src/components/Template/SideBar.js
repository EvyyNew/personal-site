import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Evelyn Yixuan Liu</h2>
        <p>
          <a href="mailto:yliu357@buffalo.edu">yliu357@buffalo.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Evelyn Yixuan (IPA:[i˥˩ɕyɛn˧˥]) Liu. I&apos;m a recent graduate of{' '}
        <a
          href="https://arts-sciences.buffalo.edu/linguistics/undergraduate/linguistics-degrees/computational-linguistics-ba.html"
        >
          MS in Computational Linguistics at University at Buffalo.
        </a>{' '}
        Additionally, I am a member of{' '}
        <a
          href="https://www.acsu.buffalo.edu/~cxjacobs/index/CaLiCo_Lab.html"
        >
          CaLiCo Lab
        </a>{' '}
        founded by Dr. Cassandra Jacobs. My research interests lie at the intersection of large
        language models (LLMs) and phonetic analysis, where I explore the nuances of human language,
        speech processing, and AI-driven linguistic models.
      </p>
    </section>
  </section>
);

export default SideBar;
