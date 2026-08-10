/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";
import portraitImage from "../images/portrait.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a digital design engineer and I'm passionate about empowering young Africans with Microelectronics skills.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C++",
  "Python",
  "Digital Signal Processing",
  "SystemVerilog",
  "MATLAB",
  "FPGA's",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation.";

const quickLinks = [
  {
    title: "Academic Curriculum Vitae",
    description:
      "A detailed overview of my academic journey, including my education, research, and professional experiences.",
    url: "https://github.com/ebubeanene",
  },
  {
    title: "Roles Academy Youtube Channel",
    description:
      "Creating academic contents on my Youtube channel. The contents are focused on College Mathematics, Physics and Internet of Things.",
    url: "https://www.youtube.com/c/ChukwudiebubeAnene",
  },
  {
    title: "Download Resume",
    description: "All my fun experiences are here in my Resume. Download a copy.",
    url: "https://github.com/ebubeanene",
  },
  {
    title: "My GitHub Repository",
    description: "Contains various work I have done on Electronics and TinyML.",
    url: "https://github.com/ebubeanene",
  },
];

const About = () => {
  return (
    <>
      <section className="padding" id="about">
        <img className="background" src={image} alt={imageAltText} />

        <div className="about-layout">
          <div className="about-portrait">
            <img
              className="portrait-image"
              src={portraitImage}
              alt="Portrait of Chukwudiebube Anene"
            />
          </div>

          <div className="about-card">
            <h2 className="about-section-title">About Myself</h2>
            <p className="large about-description">{description}</p>
            <hr />
            <ul className="about-skills-list">
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <hr />
            <p className="about-quote">{detailOrQuote}</p>
          </div>
        </div>
      </section>

      <section className="quick-links-section" id="quick-links">
        <div className="quick-links-wrapper">
          <h2 style={{ textAlign: "center" }}>Check these links out</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link) => (
              <a
                className="quick-link-card"
                href={link.url}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
