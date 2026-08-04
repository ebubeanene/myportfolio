/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import heroImage from "../images/coolTech.png";
import coolTechImage from "../images/coolTech.png";
import extractorImage from "../images/woman-with-tablet.jpg";
import resumeImage from "../images/PortfolioHomepage.jpg";
import githubImage from "../images/motion-background.jpg";

const heroImageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "•	CoolTech®: a smart vaccine cooler",
    description:
      "•	As an intern at Innov8 Hub, Nigeria, I designed the power pack for CoolTech®, applying principles of power electronics and energy efficiency",
    url: "https://www.linkedin.com/posts/innov8hub_cooltech-tetfair-activity-7303710580664655872-G3-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKAZ1AByBjM3jn9mi029QtFXJlmxu2_weU",
    image: coolTechImage,
    imageAlt: "CoolTech product concept and engineering work",
  },
  {
    title: "Xtractor: A smart fume extractor for soldering stations",
    description:
      "I led fellow interns in designing and creating a prototype for a smart fume extractor in trying to help solve the problem of our senior colleagues inhaling fumes while soldering at Innov8 Hub.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
    image: extractorImage,
    imageAlt: "Prototype design and engineering setup",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    image: resumeImage,
    imageAlt: "Portfolio website homepage preview",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    image: githubImage,
    imageAlt: "Abstract motion graphics representing coding and collaboration",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={heroImage}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={heroImageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img src={project.image} alt={project.imageAlt} className="portfolio-image" />
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
