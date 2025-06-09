'use client'
import Image from "next/image";
const footer =()=>{

return (


    <div className="container">
    {/* Main Content Section */}
    <header className="hero">
      <div className="textContainer">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="subtitle">
          I am <strong>[Your Name]</strong>, a passionate <strong>[Your Profession]</strong> based in
          <strong>[Your Location]</strong>.
        </p>
        <p className="description">
          I specialize in <strong>[Your Key Skills]</strong> and have worked on projects including{' '}
          <strong>[Notable Project/Work]</strong>.
        </p>
      </div>

      {/* Profile Image */}
      <div className="imageContainer">
        <Image
          src="/images/profile.jpg" // Path to your image in the public directory
          alt="Profile Picture"
          width={250}
          height={250}
          className="profileImage"
        />
      </div>
    </header>

    {/* Footer Section */}
    <footer className="footer">
      <div className="containerFooter">
        <div className="left">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
        </div>
        <div className="center">
          <ul className="navLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="right">
          <ul className="socialLinks">
            <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>

    {/* Adding Styles Inline using <style jsx> */}
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
        margin: 0;
      }

      .hero {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 1200px;
        margin-top: 50px;
      }

      .textContainer {
        flex: 1;
        padding-right: 30px;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #333;
      }

      .subtitle {
        font-size: 1.5rem;
        margin-top: 10px;
        color: #555;
      }

      .description {
        font-size: 1.2rem;
        margin-top: 20px;
        color: #777;
      }

      .imageContainer {
        flex: 0.4;
        display: flex;
        justify-content: center;
      }

      .profileImage {
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(243, 235, 235, 0.1);
      }

      .footer {
        background-color: #2c3e50;
        color: white;
        padding: 30px 0;
        width: 100%;
        position: absolute;
        bottom: 0;
      }

      .containerFooter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .left p {
        font-size: 1rem;
        color: #bbb;
      }

      .center ul,
      .right ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .center ul li,
      .right ul li {
        display: inline-block;
        margin: 0 15px;
      }

      .center ul li a,
      .right ul li a {
        text-decoration: none;
        color: white;
        font-size: 1.1rem;
        transition: color 0.3s;
      }

      .center ul li a:hover,
      .right ul li a:hover {
        color: #3498db; /* Blue color for hover effect */
      }

      @media (max-width: 768px) {
        .hero {
          flex-direction: column;
          text-align: center;
        }

        .imageContainer {
          margin-top: 20px;
        }

        .center,
        .right {
          margin-top: 20px;
        }

        .center ul li,
        .right ul li {
          margin: 10px 0;
        }
      }
    `}</style>
  </div>
)

}    



export default footer;