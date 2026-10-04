import { FiAward } from 'react-icons/fi';

/**
 * date: '' until provided. certificateUrl: null until certificate images
 * are supplied — the button stays visible but disabled until then.
 */
const CERTIFICATES = [
  {
    title: 'Cybersecurity Training',
    org: 'ITI',
    status: 'completed',
    date: '',
    topics: [],
    certificateUrl: null,
  },
  {
    title: 'Cybersecurity Training',
    org: 'Mahara-Tech',
    status: 'completed',
    date: '',
    topics: [],
    certificateUrl: null,
  },
  {
    title: 'Networking Training',
    org: 'NTI',
    status: 'completed',
    date: '',
    topics: [],
    certificateUrl: null,
  },
  {
    title: 'CCNA',
    org: 'Huawei',
    status: 'completed',
    date: '',
    topics: [],
    certificateUrl: null,
  },
  {
    title: 'HCCDA',
    org: 'Huawei',
    status: 'completed',
    date: '',
    topics: [],
    certificateUrl: null,
  },
  {
    title: 'Fundamental Programming',
    org: 'Kayan Center',
    status: 'completed',
    date: '',
    topics: ['C++', 'OOP', 'Data Structures', 'Algorithms', 'Database'],
    certificateUrl: null,
  },
  {
    title: 'Full-Stack Web Development',
    org: 'DEPI',
    status: 'ongoing',
    date: '',
    topics: [],
    certificateUrl: null,
  },
];

function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <p className="section-eyebrow">certificates</p>
        <h2 className="section-title">Training and certifications</h2>
        <p className="section-intro">
          Completed programs and training currently in progress.
        </p>

        <div className="cert-grid">
          {CERTIFICATES.map((cert) => (
            <div key={`${cert.org}-${cert.title}`} className="card cert-card">
              <span className={`cert-status ${cert.status}`}>
                {cert.status === 'completed' ? 'Completed' : 'Currently Enrolled'}
              </span>
              <h3>{cert.title}</h3>
              <p className="cert-org">
                {cert.org}
                {cert.date ? ` · ${cert.date}` : ''}
              </p>
              {cert.topics.length > 0 && (
                <div className="cert-topics">
                  {cert.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              )}
              <a
                href={cert.certificateUrl || '#'}
                className="btn btn-ghost"
                aria-disabled={!cert.certificateUrl}
              >
                <FiAward /> View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
