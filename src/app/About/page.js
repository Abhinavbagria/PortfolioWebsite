'use client';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          About <span className={styles.name}>Me</span>
        </h1>
        <p className={styles.description}>
          I’m <strong>Abhinav Bagria</strong>, a passionate Full-Stack Web Developer currently have done BCA from Panjab University.
          I specialize in building responsive and scalable web applications using the <strong>MERN stack</strong>.
        </p>

        <p className={styles.description}>
          I previously worked as a <strong>Front-End Developer</strong> at KMA Technoware, where I contributed to high-traffic websites
          and led a team of junior developers. I’ve built real-world projects such as a <strong>Food Order App</strong>,
          <strong> School Management System</strong>, and a <strong>Real-Time Chat App</strong>.
        </p>

        <p className={styles.description}>
          I enjoy solving problems, leading teams, and constantly learning new technologies to stay ahead in the ever-evolving web development landscape.
        </p>

        <button className={styles.button}>View My Projects</button>
      </div>
    </div>
  );
}
