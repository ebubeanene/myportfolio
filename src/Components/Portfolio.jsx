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

import coolTechImage from "../images/coolTech.png";
import extractorImage from "../images/Xtractor.jpg";
import resumeImage from "../images/PortfolioHomepage.jpg";
import githubImage from "../images/motion-background.jpg";

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
    url: "https://drive.google.com/drive/folders/1OXGz1cgclfJpwSoMTVtLB4agxgSRz6a-?usp=sharing",
    image: extractorImage,
    imageAlt: "Prototype design and engineering setup",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Select Projects</h2>
      <div className="container">
        {projectList.map((project) => (
          <a
            className="box"
            href={project.url}
            key={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.imageAlt} className="portfolio-image" />
            <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            <p className="small">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
