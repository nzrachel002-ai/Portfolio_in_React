import '../../App.css';

const projects = [
  {
    title: 'SOEMS',
    description: 'Secure Online Examination Management System — a web-based platform for conducting and managing online exams securely, with user authentication, proctoring features, and result management.',
    tags: ['React', 'Node.js', 'MySQL'],
    code: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((tag, j) => (
                <span className="project-tag" key={j}>{tag}</span>
              ))}
            </div>
            <div className="project-btns">
              <a href={p.code} className="btn-code"><i className="fab fa-github"></i> View Code</a>
              <a href={p.live} className="btn-live"><i className="fas fa-arrow-up-right-from-square"></i> View Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
