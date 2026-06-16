import '../../App.css';
import htmlImg from '../../img/htmimage.png';
import cssImg from '../../img/csslogo.png';
import javascriptImg from '../../img/JSLOGO.png';
import nodeimg from '../../img/nodejs_image.png';
import reactimg from '../../img/React_images.png';
import cyber from '../../img/cybersecurity.png';
export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <ul className='skillsnow'>
        <li><img src={htmlImg} width={40} height={40} className='skillsImages' />HTML</li>
        <li><img src={cssImg} width={40} height={40}  className='skillsImages' />CSS</li>
        <li><img src={javascriptImg} width={40} height={40}  className='skillsImages'/>JavaScript</li>
        <li><img src={reactimg} width={40} height={40}  className='skillsImages' />React js</li>
        <li><img src={nodeimg} width={40} height={40}  className='skillsImages'/>NodeJS</li>
           <li><img src={cyber} width={40} height={40}  className='skillsImages'/>CyberSecurity</li>
      </ul>
    </section>
  );
}