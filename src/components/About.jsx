import { FiLayout, FiDatabase, FiShield } from 'react-icons/fi';

const PILLARS = [
  {
    icon: <FiLayout />,
    title: 'Frontend Development',
    text: 'Building interactive, responsive, and user-friendly interfaces with a strong focus on usability and clean design.',
  },
  {
    icon: <FiDatabase />,
    title: 'Backend & Database',
    text: 'Developing server-side applications and managing databases efficiently to ensure reliable and high-performance systems.',
  },
  {
    icon: <FiShield />,
    title: 'Cybersecurity',
    text: 'Applying security principles, identifying vulnerabilities, and exploring offensive security techniques to help protect applications and networks.',
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-eyebrow">about</p>
        <h2 className="section-title">A developer who thinks like an attacker</h2>
        <p className="section-intro">
          Hello! I&apos;m Abdelrahman Mohamed Safwat, a Full-Stack Developer
          with a strong interest in Cybersecurity and Penetration Testing. I
          build interactive, responsive, and user-focused web applications
          while applying security principles to create reliable and secure
          digital experiences.
        </p>

        <div className="about-grid">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="card about-card">
              <div className="icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
