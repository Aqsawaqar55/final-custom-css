import Link from "next/link";
import Image from "next/image";
import styles from "../herosection/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>MY PORTFOLIO</h1>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>HOME</li>
          <li className={styles.aboutItem}>ABOUT</li>
          <li className={styles.aboutItem}>SKILLS</li>
          <li className={styles.aboutItem}>CONTACT</li>
          <li className={styles.aboutItem}>PROJECTS</li>
        </ul>
        <Link href="../cv/ourcv.pdf">
          <button className={styles.button}>CV</button>
        </Link>
      </nav>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.greeting}>HELLO</h1>
          <h2 className={styles.name}>
            I M! <span>Aqsa Waqar</span>
          </h2>
          <h1 className={styles.jobTitle}>Frontend Web Designer</h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Debitis
            ipsam amet hic adipisci nam error nobis odio blanditiis ,<br />Lorem ipsum
            dolor sit amet.
          </p>
          <Link href="/contact">
            <button className={styles.hireMeButton}>HIRE ME</button>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/cv/developer.jpg"
            alt="Developer Image"
            width={400}
            height={400}
            className={styles.roundedImage}
          />
        </div>
      </div>
    </div>
  );
}
