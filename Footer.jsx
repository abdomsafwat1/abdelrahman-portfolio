import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          Abdelrahman Mohamed Safwat
          <span>Full-Stack Developer &amp; Penetration Tester</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/abdomsafwat1" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-safwat-a524233b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:abdomsafwat111@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p className="footer-copy">© {year} Abdelrahman Mohamed Safwat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
