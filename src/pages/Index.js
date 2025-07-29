import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => {
  const careerObjective = {
    targetPositions: [
      {
        title: 'Linguist Engineer',
        description: 'I enjoy applying my linguistic knowledge and technical skills to improve the accuracy, efficiency, and adaptability of language models.',
      },
      {
        title: 'Prompt Engineer',
        description: 'I\'m fascinated by the power of language to shape AI behavior, and I specialize in crafting and refining prompts that bring out the best in large language models.',
      },
      {
        title: 'AI Trainer',
        description: 'I take pride in training and fine-tuning machine learning models, and I\'m driven by the challenge of pushing model performance through thoughtful evaluation and iteration.',
      },
      {
        title: 'Data Labeling Specialist',
        description: 'I value the role of high-quality data in AI development, and I\'m experienced in managing annotation projects that support scalable, accurate machine learning outcomes.',
      },
      {
        title: 'Localization Specialist',
        description: 'As someone who values cross-cultural communication, I enjoy creating localization strategies that make global products feel native and intuitive to diverse users.',
      },
    ],

    coreExpertise: [
      {
        skill: 'AI Fine-tuning',
        description: 'I have hands-on experience in customizing deep learning models for specific tasks, improving both their accuracy and efficiency.',
      },
      {
        skill: 'Speech Model Development',
        description: 'I\'m skilled in building and refining TTS and ASR systems, with a focus on high-performance, natural-sounding speech technology.',
      },
      {
        skill: 'Data Annotation & Processing',
        description: 'I bring a detail-oriented approach to data annotation, ensuring consistent quality and clean datasets that support reliable model training.',
      },
      {
        skill: 'Natural Language Processing (NLP)',
        description: 'I\'m deeply interested in NLP and have worked extensively on text analysis, model development, and language-centric AI tools.',
      },
    ],

    employmentStatus: {
      visaStatus: 'Requires work visa sponsorship',
      positionType: 'Open to both internship and full-time opportunities',
      location: 'Flexible and open to onsite, remote or relocation options for the right opportunity',
    },
  };

  return (
    <Main
      description={
        'Evelyn Yixuan Liu\'s personal website. Computational Linguist, UB & NNU Alumni.'
      }
    >
      <article className="post" id="index">
        <p>
          Update: Ask my assistant:  <a href="https://evebot-fawn.vercel.app" target="_blank" rel="noopener noreferrer"><strong>EvelynBot</strong></a> about my career goals and experiences.
          {' '}
          Welcome to my website! Glad you are here! Please feel free to explore more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link> to see my educational and professional experience, browse through my <Link to="/projects">projects</Link>{' '}
          . If you would like to get in touch, you can always{' '}
          <Link to="/contact">contact</Link> me. I would love to hear from you and connect!
        </p>

        <section className="career-objective">
          <h2>Career Objective</h2>

          <div>
            <h3>Target Positions</h3>
            <div>
              {careerObjective.targetPositions.map((position) => (
                <div key={position.title}>
                  <h4>{position.title}</h4>
                  <p>{position.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Core Expertise</h3>
            <div>
              {careerObjective.coreExpertise.map((expertise) => (
                <div key={expertise.skill}>
                  <h4>{expertise.skill}</h4>
                  <p>{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Employment Status</h3>
            <div>
              <ul>
                <li>
                  <span>Visa Status:</span> {careerObjective.employmentStatus.visaStatus}
                </li>
                <li>
                  <span>Position Type:</span> {careerObjective.employmentStatus.positionType}
                </li>
                <li>
                  <span>Location:</span> {careerObjective.employmentStatus.location}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <em>
              I am committed to bridging linguistic theory with cutting-edge AI technology,
              bringing innovative solutions and professional technical contributions to the team.
            </em>
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Index;
