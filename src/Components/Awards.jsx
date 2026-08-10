import React from "react";

const awardsList = [
  {
    title: "Outstanding Innovation Award",
    issuer: "Innov8 Hub",
    year: "2024",
    description: "Recognized for creative problem-solving and engineering impact.",
    url: "https://example.com/outstanding-innovation-award",
  },
  {
    title: "Academic Excellence Recognition",
    issuer: "University / Institution",
    year: "2023",
    description: "Acknowledged for strong academic performance and leadership.",
    url: "https://example.com/academic-excellence-recognition",
  },
];

const certificationList = [
  {
    title: "Microsoft GitHub Copilot Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    description: "Built practical AI-assisted development workflows.",
    url: "https://example.com/github-copilot-fundamentals",
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
