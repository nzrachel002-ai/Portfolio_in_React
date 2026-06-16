import '../../App.css';
import profileImg from '../../img/profile.png';

export default function Home() {
  return (
    <section id="home" className="section">

      <div className="section-content">
         <h1>Hi, I'm <span>Rachel</span></h1>
        <h2>Software Developer</h2>
        <p>
          Passionate about web development, cybersecurity, and creating modern applications.
          I enjoy building responsive and user-friendly websites, developing secure software
          solutions, and exploring emerging technologies. My goal is to leverage technology
          to solve real-world problems and contribute to innovative digital projects.
        </p>

        <div className="social-icons">
          <a href="https://github.com/nzrachel002-ai" aria-label="GitHub" target='_blank'><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/nzayikorera-rachel-53296237a/" target='_blank' aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          {/* <a href="" aria-label="instagram"><i className="fab fa-instagram"></i></a> */}
        </div><br />

        <div className="home-buttons">
          <button className="btn-hire">Hire Me</button>
          <button className="btn-work">View Work</button>
        </div>
      </div>

      <div className="home-img">
        <img src={profileImg} alt="Profile" />
      </div>

    </section>
  );
}