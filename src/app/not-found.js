// pages/404.js
'use client'
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={styles.link}>Go back to Home</a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '100px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#e74c3c',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#7f8c8d',
  },
  link: {
    fontSize: '18px',
    color: '#3498db',
    textDecoration: 'none',
    border: '1px solid #3498db',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: '0.3s ease',
  },
};

export default NotFoundPage;
