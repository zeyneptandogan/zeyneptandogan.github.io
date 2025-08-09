import data from '@/data/about.json';
import stylesSkills from './AboutSkills.module.css';

export default function About() {
  const paragraphs = Array.isArray(data.paragraphs)
    ? data.paragraphs
    : (data.summary ? [data.summary] : []);
  const links = data.links || {};
  const contact = data.contact || {};
  const skills = data.skills || {};

  const renderChips = (items) => {
    if (!Array.isArray(items) || items.length === 0) return null;
    return (
      <div className={stylesSkills.chips}>
        {items.map((x, i) => (
          <span key={i} className={stylesSkills.chip}>{x}</span>
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="container py-4 text-white">
      <h2 className="h1 section-title">About</h2>
      <hr className="border-0 border-top opacity-50" />

      {/* Konum en başta, sonra mail */}
      <div className="d-flex flex-wrap gap-3 mb-3">
        {contact.location && (
          <span>
            <i className="bi bi-geo-alt-fill me-1" />
            {contact.location}
          </span>
        )}
        {contact.email && (
          <a href={`mailto:${contact.email}`} className="text-decoration-underline">
            <i className="bi bi-envelope-fill me-1" />
            {contact.email}
          </a>
        )}
      </div>

      {paragraphs.map((p, i) => (
        <p key={i} className="mb-2">{p}</p>
      ))}

      {/* SKILLS */}
      {(skills.programmingLanguages || skills.toolsAndFrameworks || skills.coreCompetencies || skills.softSkills) && (
        <>
          <h3 className="h4 mt-4 mb-2">Skills</h3>
          <div className={stylesSkills.grid}>
            {/* Programming Languages */}
            {(skills.programmingLanguages?.length) && (
              <div className={stylesSkills.card}>
                <div className={stylesSkills.title}>
                  <i className="bi bi-code-slash" /> Programming Languages
                </div>
                {renderChips(skills.programmingLanguages)}
              </div>
            )}

            {/* Tools & Frameworks */}
            {(skills.toolsAndFrameworks?.length) && (
              <div className={stylesSkills.card}>
                <div className={stylesSkills.title}>
                  <i className="bi bi-wrench-adjustable-circle" /> Tools &amp; Frameworks
                </div>
                {renderChips(skills.toolsAndFrameworks)}
              </div>
            )}

            {/* Core Competencies */}
            {(skills.coreCompetencies?.length) && (
              <div className={stylesSkills.card}>
                <div className={stylesSkills.title}>
                  <i className="bi bi-lightning-charge" /> Core Competencies
                </div>
                {renderChips(skills.coreCompetencies)}
              </div>
            )}

            {/* Soft Skills */}
            {(skills.softSkills?.length) && (
              <div className={stylesSkills.card}>
                <div className={stylesSkills.title}>
                  <i className="bi bi-people-fill" /> Soft Skills
                </div>
                {renderChips(skills.softSkills)}
              </div>
            )}
          </div>
        </>
      )}

      {/* Butonlar */}
      <div className="mt-3 d-flex gap-2 flex-wrap">
        {links.cv && (
          <a href={links.cv} download className="btn btn-light btn-sm">
            <i className="bi bi-download me-1" />
            Download CV
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
            <i className="bi bi-linkedin me-1" />
            LinkedIn
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
            <i className="bi bi-github me-1" />
            GitHub
          </a>
        )}
        {links.scholar && (
          <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
            <i className="bi bi-mortarboard me-1" />
            Google Scholar
          </a>
        )}
      </div>
    </section>
  );
}
