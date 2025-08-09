import Image from 'next/image';
import data from '@/data/projects.json';
import styles from './Project.module.css';

export default function Project() {
  return (
    <section id="projects" className="container py-4 text-white">
      <h2 className="h1 section-title">Projects</h2>
      <hr className="border-0 border-top border-secondary opacity-50" />

      <ul className={styles.timeline}>
        {data.map((it, idx) => (
          <li key={idx}>
            <article className={`bg-transparent text-white ${styles.card}`}>
              <div className="row">
                <div className={it.image ? 'col-12 col-md-8' : 'col-12'}>
                  <div className="d-flex w-100 justify-content-between align-items-baseline">
                    <h3 className="h5 mb-1">
                      {/* Proje linki varsa başlığı link yap */}
                      {it.projectUrl ? (
                        <a
                          href={it.projectUrl}
                          className="text-reset text-decoration-underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {it.title}
                        </a>
                      ) : (
                        it.title
                      )}

                      {/* Company varsa göster; linki varsa linkle */}
                      {it.company && (
                        <span>
                          {' '}@{' '}
                          {it.companyLink ? (
                            <a
                              href={it.companyLink}
                              className="text-reset text-decoration-underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {it.company}
                            </a>
                          ) : (
                            it.company
                          )}
                        </span>
                      )}
                    </h3>

                    {it.period && <small>{it.period}</small>}
                  </div>

                  {it.location && <div>{it.location}</div>}

                  {it.description && <p className="mb-2">{it.description}</p>}

                  {/* Öne çıkan maddeler (opsiyonel) */}
                  {Array.isArray(it.highlights) && it.highlights.length > 0 && (
                    <ul className={`mt-2 mb-0 ${styles.sublist}`}>
                      {it.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  )}

                  {/* Aksiyon butonları (opsiyonel) */}
                  {(it.repo || it.demo) && (
                    <div className="mt-3 d-flex gap-2 flex-wrap">
                      {it.repo && (
                        <a href={it.repo} className="btn btn-sm btn-outline-light" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-github" /> Repo
                        </a>
                      )}
                      {it.demo && (
                        <a href={it.demo} className="btn btn-sm btn-outline-light" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-box-arrow-up-right" /> Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
                {/* Görsel varsa göster */}
                {it.image && (
                  <div className="col-12 col-md-4">
                    <div className={styles.thumb}>
                      <Image
                        src={it.image}
                        alt={`${it.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="rounded-3 shadow-sm"
                        style={{ objectFit: 'cover' }}
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
