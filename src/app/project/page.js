'use client';
import styles from './Project.module.css';

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}></div>
      <div className={styles.overlay}></div>

      <section className={styles.projectsSection}>
        <h2 className={styles.heading}>My Projects</h2>

        {/* Project 1: School Management */}
        <div className={styles.projectCard}>
          <h3>School Management App</h3>
          <p>
            A comprehensive school management system designed to handle student records,
            attendance tracking, and teacher management efficiently.
          </p>
          <p><strong>Technologies Used:</strong> React.js, Node.js, MongoDB, Express.js</p>
          <a
            href="https://github.com/yourusername/school-management-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            🏫 View on GitHub
          </a>
        </div>

        {/* Project 2: Food Order App */}
        <div className={styles.projectCard}>
          <h3>Food Order App</h3>
          <p>
            A full-featured online food ordering platform that allows users to browse restaurants,
            add items to cart, and place orders. Includes user authentication, admin panel, and real-time order tracking.
          </p>
          <p><strong>Technologies Used:</strong> React.js, Node.js, MongoDB, Express.js (MERN Stack)</p>
          <a
            href="https://github.com/yourusername/food-order-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            🍔 View on GitHub
          </a>
        </div>

        {/* ✅ Project 3: Real-Time Chat App */}
        <div className={styles.projectCard}>
          <h3>Real-Time Chat App</h3>
          <p>
            A lightweight chat application with instant messaging functionality using WebSockets.
            Users can join chat rooms, exchange messages in real-time, and experience a smooth interface.
          </p>
          <p><strong>Technologies Used:</strong> Node.js, JavaScript, Socket.io, HTML/CSS</p>
          <a
            href="https://github.com/yourusername/real-time-chat-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
