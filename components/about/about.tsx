import Image from 'next/image';

import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import styles from '../about/main.module.css'

export default function About() {
  return (
    <div className={styles.main}>
      <Image
        src="/cv/AdobeStock_964804641_Preview.jpeg"
        alt="img"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />
      
      <div className={styles.font}>
        <h1 className={styles.h}>ABOUT US</h1>
        <p className={styles.p}>
          I m a passionate frontend developer with a knack for crafting engaging<br />
          and responsive user interfaces. Skilled in HTML, CSS, JavaScript, and<br />
          TypeScript, I work with frameworks like React and Next.js to bring <br />
          ideas to life on the web. My approach emphasizes clean code, usability,<br />
          and aesthetic appeal to ensure every project is both functional and visually<br />
          inviting. I m always excited to learn,<br />
          especially in areas like UX/UI design and emerging frontend technologies.<br />
          Outside of coding, I enjoy exploring graphic design,<br />
          which brings a creative touch to my development work.
        </p>

        <div className={styles.container}>
          <a href="https://www.facebook.com/Aqsa Ashraf" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.round}/>
          </a>
          <a href="https://m.me/Aqsa Ashraf" target="_blank" rel="noopener noreferrer">
            <FaFacebookMessenger className={styles.round}/>
          </a>
          <a href="https://www.linkedin.com/in/Aqsa waqar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.round}/>
          </a>
          <a href="https://github.com/Aqsawaqar55" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.round} />
          </a>
          <a href="https://vercel.com/Aqsawaqar55" target="_blank" rel="noopener noreferrer">
            <SiVercel className={styles.round} />
          </a>
        </div>
      </div>
    </div>
  );
}




