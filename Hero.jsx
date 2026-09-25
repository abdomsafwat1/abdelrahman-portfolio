import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import profilePhoto from '../assets/images/profile.jpg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div>
          <div className="hero-terminal">
            <span>&gt; SYSTEM ONLINE</span>
            <span>&gt; ACCESS GRANTED</span>
            <span>&gt; SECURITY MODE: ACTIVE</span>
          </div>

          <h1>Abdelrahman Mohamed Safwat</h1>
          <p className="hero-role">Full-Stack Developer &amp; Penetration Tester</p>

          <p className="hero-desc">
            Building secure, responsive, and user-focused web applications
            while exploring vulnerabilities and applying cybersecurity
            principles from an offensive security perspective.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <FiMail />
            </a>
            {/* Replace /cv.pdf in the public/ folder with the real CV file */}
            <a href="/cv.pdf" className="btn btn-ghost" download>
              Download CV <FiDownload />
            </a>
          </div>
        </div>

        <div className="hero-photo-frame">
          <img src={profilePhoto} alt="Abdelrahman Mohamed Safwat" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
