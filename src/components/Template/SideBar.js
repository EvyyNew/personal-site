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
        Hi, I&apos;m Evelyn Yixuan (IPA:[i˥˩ɕyɛn˧˥]) Liu. I am a recent graduate of{' '}
        <a href="https://arts-sciences.buffalo.edu/linguistics/undergraduate/linguistics-degrees/computational-linguistics-ba.html">MS in Computational Linguistics at University at Buffalo.</a>{' '}
        Additionally, I am a member of <a href="https://www.acsu.buffalo.edu/~cxjacobs/index/CaLiCo_Lab.html">CaLiCo Lab</a> founded by Dr. Cassandra Jacobs.
        My research interests lie at the intersection of large language models (LLMs)
        and phonetic analysis, where I explore the nuances of human language,
        speech processing, and AI-driven linguistic models.
      </p>      
    </section>
    <section className="blurb">
        <h2>Career Objective</h2>
        
        <div>
            <h3>Target Positions</h3>
            <div>
                <div>
                    <h4>Linguist Engineer</h4>
                    <p>Combining linguistic expertise with engineering skills to optimize language model performance</p>
                </div>
                <div>
                    <h4>Prompt Engineer</h4>
                    <p>Designing and optimizing prompt strategies for AI models to enhance output quality</p>
                </div>
                <div>
                    <h4>AI Trainer</h4>
                    <p>Responsible for machine learning model training, fine-tuning, and performance evaluation</p>
                </div>
                <div>
                    <h4>Data Labeling Specialist</h4>
                    <p>Managing and executing high-quality data annotation projects</p>
                </div>
                <div>
                    <h4>Localization Specialist</h4>
                    <p>Providing multilingual localization solutions for global products</p>
                </div>
            </div>
        </div>

        <div>
            <h3>Core Expertise</h3>
            <div>
                <div>
                    <h4>AI Fine-tuning</h4>
                    <p>Extensive experience in deep learning model optimization and customized training</p>
                </div>
                <div>
                    <h4>Speech Model Development</h4>
                    <p>Proficient in Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) technologies</p>
                </div>
                <div>
                    <h4>Data Annotation & Processing</h4>
                    <p>Experienced in large-scale dataset annotation and quality control</p>
                </div>
                <div>
                    <h4>Natural Language Processing (NLP)</h4>
                    <p>Skilled in text analysis, language model training, and linguistic technology applications</p>
                </div>
            </div>
        </div>

        <div>
            <h3>Employment Status</h3>
            <ul>
                <li><strong>Visa Status:</strong> Requires work visa sponsorship</li>
                <li><strong>Position Type:</strong> Open to both internship and full-time opportunities</li>
                <li><strong>Location:</strong> Flexible regarding location for the right opportunity</li>
            </ul>
        </div>

        <p><em>I am committed to bridging linguistic theory with cutting-edge AI technology, bringing innovative solutions and professional technical contributions to the team.</em></p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        Template from &copy; <a href="https://github.com/mldangelo/personal-site" target="_blank" rel="noopener noreferrer">Michael D&apos;Angelo</a> | Designed by Evelyn Yixuan Liu
      </p>
    </section>
  </section>
);

export default SideBar;
