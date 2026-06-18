import '../../App.css';

export default function Contact() {
  return (
    <section id="contact" className="section">

      <div className="contact-container">

        {/* Left: info */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always interested in new opportunities and collaborations. Whether
            you have a project in mind or just want to chat about technology, feel free
            to reach out!
          </p>

          <ul className="contact-details">
            <li><i className="fas fa-envelope"></i> nzrachel002@gmail.com</li>
            <li><i className="fas fa-phone"></i> +250 781317681/+971541779675</li>
            <li><i className="fab fa-github"></i> https://github.com/nzrachel002-ai</li>
            <li><i className="fas fa-location-dot"></i> Kigali, Rwanda</li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          <p className="form-subtitle">I'll get back to you within 24 hours</p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Project Collaboration" />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea rows="5" placeholder="Tell me about your project or how we can work together..."></textarea>
            </div>

            <button type="submit">
              <i className="fas fa-envelope"></i> Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
