import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => {
  const careerObjective = {
    targetPositions: [
      {
        title: 'Linguist Engineer',
        description: 'Combining linguistic expertise with engineering skills to optimize language model performance',
      },
      {
        title: 'Prompt Engineer',
        description: 'Designing and optimizing prompt strategies for AI models to enhance output quality',
      },
      {
        title: 'AI Trainer',
        description: 'Responsible for machine learning model training, fine-tuning, and performance evaluation',
      },
      {
        title: 'Data Labeling Specialist',
        description: 'Managing and executing high-quality data annotation projects',
      },
      {
        title: 'Localization Specialist',
        description: 'Providing multilingual localization solutions for global products',
      },
    ],

    coreExpertise: [
      {
        skill: 'AI Fine-tuning',
        description: 'Extensive experience in deep learning model optimization and customized training',
      },
      {
        skill: 'Speech Model Development',
        description: 'Proficient in Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) technologies',
      },
      {
        skill: 'Data Annotation & Processing',
        description: 'Experienced in large-scale dataset annotation and quality control',
      },
      {
        skill: 'Natural Language Processing (NLP)',
        description: 'Skilled in text analysis, language model training, and linguistic technology applications',
      },
    ],

    employmentStatus: {
      visaStatus: 'Requires work visa sponsorship',
      positionType: 'Open to both internship and full-time opportunities',
      location: 'Flexible regarding location for the right opportunity',
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
          {' '}
          Welcome to my website! Glad you are here! Please feel free to explore more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link> to see my educational and professional experience, browse through my <Link to="/projects">projects</Link>{' '}
          . If you would like to get in touch, you can always{' '}
          <Link to="/contact">contact</Link> me. I would love to hear from you and connect!
        </p>

        <section className="career-objective" style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
            Career Objective
          </h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.75rem' }}>
              Target Positions
            </h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {careerObjective.targetPositions.map((position) => (
                <div key={position.title} style={{ borderLeft: '2px solid #3b82f6', paddingLeft: '1rem' }}>
                  <h4 style={{ fontWeight: 600, color: '#1d4ed8' }}>{position.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{position.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.75rem' }}>
              Core Expertise
            </h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {careerObjective.coreExpertise.map((expertise) => (
                <div key={expertise.skill} style={{ borderLeft: '2px solid #10b981', paddingLeft: '1rem' }}>
                  <h4 style={{ fontWeight: 600, color: '#047857' }}>{expertise.skill}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.75rem' }}>
              Employment Status
            </h3>
            <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span style={{ fontWeight: 500 }}>Visa Status:</span> {careerObjective.employmentStatus.visaStatus}
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span style={{ fontWeight: 500 }}>Position Type:</span> {careerObjective.employmentStatus.positionType}
                </li>
                <li style={{ fontSize: '0.875rem' }}>
                  <span style={{ fontWeight: 500 }}>Location:</span> {careerObjective.employmentStatus.location}
                </li>
              </ul>
            </div>
          </div>

          <div style={{ fontStyle: 'italic', color: '#374151', textAlign: 'center' }}>
            I am committed to bridging linguistic theory with cutting-edge AI technology,
            bringing innovative solutions and professional technical contributions to the team.
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Index;

