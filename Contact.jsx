import { FiMail, FiMessageCircle, FiLinkedin, FiGithub } from 'react-icons/fi';

const CHANNELS = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'abdomsafwat111@gmail.com',
    href: 'mailto:abdomsafwat111@gmail.com',
  },
  {
    icon: <FiMessageCircle />,
    label: 'WhatsApp',
    value: '+20 103 301 4202',
    href: 'https://wa.me/201033014202',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'abdelrahman-safwat',
    href: 'https://www.linkedin.com/in/abdelrahman-safwat-a524233b3/',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'abdomsafwat1',
    href: 'https://github.com/abdomsafwat1',
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-eyebrow">contact</p>
        <h2 className="section-title">Let&apos;s work together</h2>
        <p className="section-intro">
          Open to freelance projects, internships, and collaboration on
          full-stack or security-focused work.
        </p>

        <div className="contact-grid">
          {CHANNELS.map((channel) => (
            <a key={channel.label} href={channel.href} className="card contact-card" target="_blank" rel="noreferrer">
              <div className="icon">{channel.icon}</div>
              <h4>{channel.label}</h4>
              <p>{channel.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
