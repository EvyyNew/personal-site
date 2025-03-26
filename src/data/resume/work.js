/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Nursing Clio, University at Buffalo',
    position: 'Web Content Assistant',
    url: 'https://nursingclio.org/',
    startDate: '2024-02-01',
    endDate: '2024-06-01',
    summary: `Assisted in editing articles, reports, and other written materials for clarity, style, and consistency. Maintained weblinks, updated images with WordPress, and ensured the overall presentation aligned with editorial standards.`,
    highlights: [
      'Edited and refined web content for clarity and consistency.',
      'Maintained and updated web links and relevant images using WordPress.',
      'Ensured adherence to editorial standards and style guidelines.',
    ],
  },
  {
    name: 'iFLYTEK Shanghai',
    position: 'Language Engineer Intern',
    url: '',
    startDate: '2022-09-01',
    endDate: '2022-12-01',
    summary: `Contributed to the construction and development of a TTS corpus for an in-car AI voice assistant. Managed the OOV database for lexicon refinement in LLM training and assisted in evaluating and selecting voice assistant speakers.`,
    highlights: [
      'Constructed and developed a TTS corpus for an in-car AI voice assistant.',
      'Managed the OOV database for lexicon refinement in LLM training.',
      'Evaluated and selected voice assistant speakers.',
      'Collected, categorized, and checked speech data for specific foreign languages and dialects.',
      'Created and optimized grammar-clear conversation prompts for human-interactive systems.',
      'Managed and trained remote interns in human labeling projects.',
    ],
  },
  {
    name: 'Nanjing Normal University',
    position: 'Teaching Assistant (Selected Readings of English Poetry)',
    url: '',
    startDate: '2021-03-01',
    endDate: '2021-03-31',
    summary: `Instructed over 95 undergraduate students weekly in the course section "From Wordsworth to Browning." Developed and assigned homework aligned with course materials and designed and proctored exams ensuring academic integrity.`,
    highlights: [
      'Taught over 95 undergraduate students weekly.',
      'Developed and assigned coursework aligned with the syllabus.',
      'Designed and proctored exams to ensure academic integrity.',
    ],
  },
  {
    name: 'Wikipedia Information Retrieval Chatbot',
    position: 'Project Lead',
    url: '',
    startDate: '2024-08-01',
    endDate: '2024-12-01',
    summary: `Designed and developed an end-to-end chatbot with document retrieval and chitchat functions. Scraped and indexed 50,000 unique Wikipedia documents on 10 topics with Apache Solr.`,
    highlights: [
      'Built a document retrieval chatbot with chitchat capabilities.',
      'Scraped and indexed 50,000 Wikipedia documents on 10 topics.',
      'Integrated document retrieval and chit-chat LLM functions.',
      'Developed a Flask-based web app with a user-friendly interface.',
    ],
  },
  {
    name: 'Annotation on Political Dogwhistles',
    position: 'Project Contributor',
    url: '',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    summary: `Developed, annotated, and analyzed a stereotype-based dogwhistle corpus comprising 60 keywords sourced from news and social media platforms.`,
    highlights: [
      'Created and annotated a stereotype-based dogwhistle corpus.',
      'Sourced 60 keywords from news and social media (Reddit, X).',
      'Established comprehensive annotation guidelines and labels.',
      'Visualized annotation results, revealing trends in dogwhistle usage.',
    ],
  },
  {
    name: 'Uli Language Phonetic Report with K-means',
    position: 'Project Contributor',
    url: '',
    startDate: '2024-08-01',
    endDate: '2024-12-01',
    summary: `Manually transcribed the endangered Uli language with IPA based on audio documents. Created an IPA phonetic chart and lexicon, and classified vowels using a K-means model.`,
    highlights: [
      'Transcribed the endangered Uli language with IPA.',
      'Created an IPA phonetic chart and lexicon.',
      'Classified and analyzed vowels using K-means clustering.',
    ],
  },
  {
    name: 'English TTS Text Normalization Annotation Project',
    position: 'Project Lead',
    url: '',
    startDate: '2022-11-01',
    endDate: '2022-12-01',
    summary: `Led the development of text normalization rules for an English TTS corpus. Managed a team of 17 annotators, ensuring compliance with established data annotation standards.`,
    highlights: [
      'Developed text normalization rules for an English TTS corpus.',
      'Led test set data collection and annotation guidelines creation.',
      'Managed and trained a team of 17 annotators.',
      'Provided daily feedback and resolved annotation ambiguities.',
    ],
  },
];


export default work;
