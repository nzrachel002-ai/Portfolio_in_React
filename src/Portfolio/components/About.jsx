import '../../App.css';

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-container">

        {/* Left: Cards */}
        <div className="about-cards">

          <div className="about-card">
            <div className="about-card-icon"><i className="fas fa-code"></i></div>
            <div>
              <h3>Full-Stack Developer</h3>
              <p>
                I am a passionate Software Engineering professional with nearly 
                two years of experience in software development and technology-related projects{' '}
                <a href="#">two years of academic learning</a> and practice in projects
                and more than <a href="#">two years of practical experience</a>.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon"><i className="fas fa-rocket"></i></div>
            <div>
              <h3>Continuous Growth</h3>
              <p>
                I actively contribute my skills and continually seek opportunities to expand
                my knowledge. I've gained diverse expertise in both{' '}
                <a href="#">frontend and backend development</a> across platforms, including
                hands-on experience in WordPress web development.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon"><i className="fas fa-shield-alt"></i></div>
            <div>
              <h3>Cybersecurity Enthusiast</h3>
              <p>
                I am passionate about building secure software solutions. I explore
                emerging security practices and apply them to develop reliable,
                safe, and high-quality applications.
              </p>
            </div>
          </div>

        </div>

        {/* Right: Education Timeline */}
        <div className="about-education">
          <h3><i className="fas fa-graduation-cap"></i> Education</h3>

          <div className="edu-timeline">

            <div className="edu-item">
              <div className="edu-dot active"></div>
              <div className="edu-info">
                <span className="edu-year">2023 - 2026</span>
                <h4>Bachelor in Business Information and Technology</h4>
                <p>Computer &amp; Software Engineering</p>
                <p className="edu-school"><i className="fas fa-building-columns"></i> University of Kigali</p>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-dot"></div>
              <div className="edu-info">
                <span className="edu-year">2016 - 2019</span>
                <h4>Secondary Education</h4>
                <p>Mathematics, Economics, Computer Science</p>
                <p className="edu-school"><i className="fas fa-building-columns"></i> Muhororo Secondary School</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
