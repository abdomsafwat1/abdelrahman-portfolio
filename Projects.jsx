import { FiGithub, FiExternalLink } from 'react-icons/fi';

/**
 * Add new projects here. Each entry follows the same shape so the grid
 * and card layout stay consistent as the list grows.
 */
const PROJECTS = [
  {
    name: 'Global Freight DB',
    // TODO: replace with the final description once the project files/screenshots are reviewed.
    description:
      'A relational database system designed to manage a cargo shipping operation, covering companies, fleets, routes and transactions.',
    tech: ['MySQL', 'SQL'],
    githubUrl: null, // TODO: add the repository link
    liveUrl: null, // TODO: add a live demo link if one becomes available
  },
];

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-image">// project preview coming soon</div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a
            href={project.githubUrl || '#'}
            className="btn btn-outline"
            aria-disabled={!project.githubUrl}
          >
            <FiGithub /> GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-ghost">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-eyebrow">projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-intro">
          A growing collection of projects at the intersection of full-stack
          development and applied security.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          <div className="card project-card placeholder">
            More projects are on the way — this slot is reserved for what
            comes next.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
