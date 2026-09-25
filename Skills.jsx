import { FiCode, FiLayout, FiDatabase, FiWifi, FiTerminal, FiShield } from 'react-icons/fi';

const CATEGORIES = [
  {
    icon: <FiCode />,
    title: 'Programming Fundamentals',
    tags: ['C++', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
  },
  {
    icon: <FiLayout />,
    title: 'Frontend Development',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Git & GitHub'],
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    tags: ['MySQL', 'SQL', 'Database Design'],
  },
  {
    icon: <FiWifi />,
    title: 'Networking',
    tags: ['Computer Networks', 'CCNA Fundamentals', 'Network Troubleshooting'],
  },
  {
    icon: <FiTerminal />,
    title: 'Operating Systems',
    tags: ['Linux', 'Linux Command Line', 'Basic Shell / Bash'],
  },
  {
    icon: <FiShield />,
    title: 'Cybersecurity',
    tags: [
      'Cybersecurity Fundamentals',
      'Web Security Fundamentals',
      'Vulnerability Assessment',
      'Ethical Hacking Fundamentals',
      'Penetration Testing',
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-eyebrow">skills</p>
        <h2 className="section-title">Tools and knowledge I work with</h2>
        <p className="section-intro">
          A snapshot of the fundamentals, frameworks, and security concepts
          I currently apply and continue to build on.
        </p>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="card skill-card">
              <div className="skill-card-head">
                <span className="icon">{cat.icon}</span>
                {cat.title}
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
