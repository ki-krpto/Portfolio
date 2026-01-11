import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/Logo.webp';
import Cert from '../assets/Cert.png';

const skillCategories = [
  {
    title: "Development",
    skills: ["React", "JavaScript", "HTML/CSS", "Python", "SQL", "C"]
  },
  {
    title: "Security & Tools",
    skills: ["Security+ (Candidate)", "Linux", "Nmap", "Git/GitHub",]
  }
];

const Skills = () => (
  <section className="skills-section">
    <div className="skills-grid">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="skill-group">
          <h3 className="skill-category-title">{cat.title}</h3>
          <div className="skill-bricks">
            {cat.skills.map((skill, i) => (
              <span key={i} className="skill-brick">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const timelineData = [
    {
        date: 'Early 2026',
        title: 'Started Web Freelancing',
        description: 'Began reaching out to local businesses to design and build custom websites, focusing on real client needs and practical solutions.'
    },
    {
        date: 'End of 2025',
        title: 'Completed CS50x',
        description: 'Completed Harvard’s CS50x, building a strong foundation in computer science using C, Python, and SQL.'
    },
    {
        date: 'Late 2025',
        title: 'Attended CipherHacks 2025',
        description: 'Built a Python tool called “Exifuscator” to modify and obfuscate EXIF metadata in images.'
    },
    {
        date: 'Mid 2025',
        title: 'Founded FHS Coding Club',
        description: 'Started a coding club at Fallbrook High School to teach programming fundamentals and build a student tech community.'
    },
    {
        date: 'Summer 2025',
        title: 'Completed CSCI 112 at Palomar College',
        description: 'Learned C programming, core computer science concepts, and the software development process.'
    }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-header">My Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* The Left Side: Dot and Line */}
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {/* Don't draw the line for the very last item */}
              {index !== timelineData.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            {/* The Right Side: Content */}
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function About() {
    return (
        <div className="mt-5 pt-5">
            <h1 className="text-center mb-5">Erik Shaver</h1>
            
            {/* Top Identity Section */}
            <div className="about-container">
                <div className="about-image-wrapper">
                    <img src={Logo} alt="Logo" className="rounded-image"/>
                </div>
                <div className="about-text-wrapper">
                    <p className="about-text">
                        I am a <span className="highlight">Web Developer</span> and <span className="highlight">aspiring Pentester</span> currently deep-diving into the <span className='highlight'>CompTIA Security+ curriculum.</span> 
                        My background in full-stack development gives me a unique perspective on application vulnerabilities, 
                        and I am actively applying those skills to <span className="highlight">network security, ethical hacking, and digital forensics.</span>
                    </p>
                </div>
            </div>

            <hr className="my-5 opacity-25" />

            <Skills />

            <hr className="my-5 opacity-25" />

            <Timeline />

            <hr className="my-5 opacity-25" />

            
            <Container className="text-center py-5">
                <div className="freelance-card p-4 rounded-3 border border-primary border-opacity-25">
                    <h2 className="mb-3">Need a Custom Website?</h2>
                    <p className="mb-4 text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        I'm currently taking on freelance projects for small businesses and individuals. 
                        If you're looking for a secure, high-performance site, let's chat about your project!
                    </p>
                    <a href="mailto:shaver.eriks@gmail.com" className="btn btn-primary px-4 py-2 fw-bold">
                        Work With Me
                    </a>
                </div>
            </Container>
        </div>
    );
}