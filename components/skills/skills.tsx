import Image from "next/image";
import styles from "../skills/skill.module.css";

export default function Skill() {
  return (
    <div className={styles.main}>
      <Image
        src="/cv/skills.jpg"
        alt="Our Skills Background"
        layout="fill"
        objectFit="cover"
        className={styles.bg}
      />

      <div className={styles.uperdiv}></div>

      <div className={styles.finaldiv}>
        <h1 className={styles.h}>Our Skills</h1>

        <div className={styles.imgdiv}>
          <div className={styles.round}>
            <Image
              src="/cv/html.png"
              alt="HTML"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>HTML</h1>
          </div>

          <div className={styles.round}>
            <Image
              src="/cv/css3-emblem-blue-shield-and-white-text-vector.jpg"
              alt="CSS"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>CSS</h1>
          </div>

          <div className={styles.round}>
            <Image
              src="/cv/canva.jpg"
              alt="Canva"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>CANVA</h1>
          </div>

          <div className={styles.round}>
            <Image
              src="/cv/png-transparent-typescript-hd-logo-thumbnail.png"
              alt="TypeScript"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>TypeScript</h1>
          </div>
        </div>

        <div className={styles.imgdiv}>
          <div className={styles.round2}>
            <Image
              src="/cv/next.jpg"
              alt="Next.js"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>NEXT.JS</h1>
          </div>

          <div className={styles.round}>
            <Image
              src="/cv/shedcn.png"
              alt="Shedcn"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>SHEDcn</h1>
          </div>

          <div className={styles.round1}>
            <Image
              src="/cv/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
              alt="Figma"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>FIGMA</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/javascript_logo.png"
              alt="JavaScript"
              height={150}
              width={150}
              className={styles.r}
            />
            <h1 className={styles.hh}>JavaScript</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
