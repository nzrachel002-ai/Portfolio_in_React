import profile from "./c:\Users\hp\Downloads\WhatsApp Image 2026-05-21 at 11.34.21.jpeg";

function Home() {
  return (
    <section className="home">

      <div className="home-content">
        <h1>
          Hi, I'm <span>Rachel</span>
          <br />
          Nzayikorera
        </h1>

        <h3>Software developer and Full-stack developer</h3>

        <p>
          I am a software developer motivated engineer and full-stack web developer who
          experienced in Artificial Intelligence, Computer Vision, and IoT
          with Embedded Systems.
        </p>
      </div>

      {/* Picture Section */}
      <div className="home-img">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Home;