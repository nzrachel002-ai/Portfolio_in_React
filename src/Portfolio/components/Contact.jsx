import '../../App.css';
export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
         <textarea type="message" placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}