import data from '@/data/publications.json';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <section id="publications" className="container py-4 text-white">
      <h2 className="h1 section-title">Publications</h2>
      <hr className="border-0 border-top border-secondary opacity-50" />

      <ul className={styles.timeline}>
        {data.map((p, idx) => (
          <li key={idx}>
            <div className="bg-transparent text-white">
              {/* Başlık solda, yıl sağda */}
              <div className="d-flex justify-content-between align-items-baseline gap-3">
                <h3 className="h5 mb-1 fw-bold">{p.title}</h3>
                {p.year && <small>{p.year}</small>}
              </div>

              {/* Yazarlar */}
              {p.authors && (
                <div className="mb-1">
                  {p.authors.map((a, i) => (
                    <span key={i}>
                      {a.me ? <strong>{a.name}</strong> : a.name}
                      {i < p.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}

              {/* Venue + status */}
              {(p.venue || p.status) && (
                <div>
                  {p.venue && <em>{p.venue}</em>}
                  {p.status && <em> [{p.status}]</em>}
                </div>
              )}

              {/* Linkler (opsiyonel) */}
              {(p.links?.pdf || p.links?.arxiv || p.links?.doi || p.links?.project) && (
                <div className="mt-2 d-flex gap-3 flex-wrap">
                  {p.links?.pdf && (
                    <a href={p.links.pdf} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-underline">
                      <i className="bi bi-file-earmark-pdf" /> PDF
                    </a>
                  )}
                  {p.links?.arxiv && (
                    <a href={p.links.arxiv} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-underline">
                      <i className="bi bi-file-earmark-text" /> arXiv
                    </a>
                  )}
                  {p.links?.doi && (
                    <a href={p.links.doi} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-underline">
                      <i className="bi bi-link-45deg" /> DOI
                    </a>
                  )}
                  {p.links?.project && (
                    <a href={p.links.project} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-underline">
                      <i className="bi bi-box-arrow-up-right" /> Project
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
