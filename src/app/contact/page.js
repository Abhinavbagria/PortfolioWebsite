'use client';
import Image from 'next/image';
import styles from './Contact.module.css'; // Create this CSS module

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Grid Background */}
      <div className={styles.grid}></div>
      <div className={styles.overlay}></div>

      {/* Contact Section */}
      <section className={styles.formSection}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required className={styles.input} />
          <input type="email" placeholder="Your Email" required className={styles.input} />
          <textarea placeholder="Your Message" required className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </section>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Image src="https://imgs.search.brave.com/W1c2diQr3kKLsxJR60RZ66tFbHfqIC_N2lPr9dwVWus/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaW5zdGFncmFt/LWJsYWNrLWJhY2tn/cm91bmQtenF6aXdi/OGYxbnBvYmkwNi5q/cGc" alt="Instagram" width={50} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <Image src="https://imgs.search.brave.com/KKaQidBFd59KbG9F5IuBu0fKR6OwLewKEGJtYML994o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbGlua2VkaW4t/dWktZmxhdC80OC9M/aW5rZWRJbl9VSS0w/My0xMjgucG5n" alt="LinkedIn" width={50} height={50} />
        </a>
        <a href="https://github.com/Abhinavbagria" target="_blank" rel="noopener noreferrer">
          <Image src="https://imgs.search.brave.com/JB1gGl8l5knXoKMIeCbNQarjkOWOuB9bO8An7MnbLAc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/ZW1vamktMjU2eDI1/Mi01cmNrd3l0NS5w/bmc" alt="GitHub" width={50} height={50} />
        </a>
      </div>
    </div>
  );
}
