import React from "react";

const awardsList = [
  {
    title: " IEEE EDS Undergraduate Fellowship",
    issuer: "IEEE Electron Devices Society (EDS)",
    year: "2025",
    description: "Recognized motivation for research in the fields of electron devices and semiconductor technology.",
    url: "https://drive.google.com/file/d/1Tah-38BX3LgNPRXpNCJMM1pYNuoGjpYw/view?usp=sharing",
  },
  {
    title: "PTDF Undergraduate Scholarship",
    issuer: "Petroleum Trust and Development Fund (PTDF)",
    year: "2021",
    description: "Awarded the PTDF Scholarship in recognition of my academic excellence. ",
    url: "https://drive.google.com/file/d/1gHzHviPZn0oVx2rX0myUKFDFGvlhTv_f/view?usp=sharing",
  },
];

const certificationList = [
  {
    title: "Embedded AI Summer School",
    issuer: "Erasmus",
    year: "2025",
    description: "Attended the Embedded AI summer school and gained practical experience in embedded artificial intelligence.",
    url: "https://drive.google.com/file/d/1zNqKLAoDiqsN47dBZa_zSCUSNUoC8P8y/view?usp=sharing",
  },
  {
    title: "TinyML / Embedded Systems Course",
    issuer: "Course Provider",
    year: "2024",
    description: "Completed a focused learning path on small-scale ML systems.",
    url: "https://example.com/tinyml-embedded-systems",
  },
];

const Awards = () => {
  return (
    <section className="padding" id="awards">
      <div className="section-heading" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Awards &amp; Certifications</h2>
      </div>

      <div className="awards-layout">
        <div className="awards-column">
          <h3 style={{ marginBottom: "1rem" }}>Awards</h3>
          {awardsList.map((award) => (
            <a
              className="award-card"
              href={award.url}
              key={award.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="award-meta">
                <span>{award.year}</span>
                <span>{award.issuer}</span>
              </div>
              <h4>{award.title}</h4>
              <p>{award.description}</p>
            </a>
          ))}
        </div>

        <div className="awards-column">
          <h3 style={{ marginBottom: "1rem" }}>Certifications</h3>
          {certificationList.map((certification) => (
            <a
              className="award-card"
              href={certification.url}
              key={certification.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="award-meta">
                <span>{certification.year}</span>
                <span>{certification.issuer}</span>
              </div>
              <h4>{certification.title}</h4>
              <p>{certification.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
