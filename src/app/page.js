// 'use client';
// import styles from './page.module.css';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.grid}></div>
//       <div className={styles.overlay}></div>
//       <div className={styles.content}>
//         <h1 className={styles.title}>
//           ABHINAV <span className={styles.name}>BAGRIA</span>
//         </h1>
//         <p className={styles.role}>
//           Web <strong>Developer</strong>
//         </p>
//         <button className={styles.button}>learn more</button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.grid}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
       <h1 className={styles.title}>
  <span className={styles.name}>ABHINAV BAGRIA</span>
</h1>
        <p className={styles.role}>
          Web <strong>Developer</strong>
        </p>
        <button
          className={styles.button}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Info' : 'Learn More'}
        </button>

       
     {showDetails && (
  <div className={styles['profile-container']}>
    <div className={styles['profile-card']}>
      <div className={styles['left-section']}>
        <h2>
          ABHINAV <span className={styles.nameHeading}>BAGRIA</span>
        </h2>
        <p className={styles.title}>Full-Stack Developer</p>
        <ul className={styles['info-list']}>
          <li><i className="fas fa-user"></i> Abhinav Bagria</li>
          <li><i className="fas fa-birthday-cake"></i> 15.10.2003</li>
          <li><i className="fas fa-map-marker-alt"></i> New Delhi, India</li>
          <li><i className="fas fa-phone"></i> +91-9306034915</li>
          <li><i className="fas fa-envelope"></i> bagriaabhinav@gmail.com</li>
        </ul>
      </div>

      <div className={styles['right-section']}>
        <h3>About Me</h3>
        <p>
          I’m a passionate full-stack web developer with a love for clean UI, fast APIs, and modern web technologies.
        </p>
        <p>
          <strong>My Work:</strong> I’ve built projects using React, Next.js, Node.js, MongoDB, and more.
        </p>
      </div>
    </div>
  </div>
)}


        
      </div>
    </div>
  );
}

