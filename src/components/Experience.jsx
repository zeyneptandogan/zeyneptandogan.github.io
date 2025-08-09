import data from '@/data/experience.json';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="container py-4 text-white">
      <h2 className="h1 section-title">Experience</h2>
      <hr className="border-0 border-top border-secondary opacity-50" />

      <ul className={styles.timeline}>
        {data.map((it, idx) => (
          <li key={idx}>
            <div className="bg-transparent text-white">
              <div className="d-flex w-100 justify-content-between align-items-baseline">
                <h3 className="h5 mb-1">
                  {it.title}{' '}
                  <span>
                    @ {it.link ? <a href={it.link} className="text-reset text-decoration-underline">{it.company}</a> : it.company}
                  </span>
                </h3>
                <small>{it.period}</small>
              </div>

              {it.location && <div className="small">{it.location}</div>}

              {Array.isArray(it.highlights) && it.highlights.length > 0 && (
                <ul className={`mt-2 mb-0 ${styles.sublist}`}>
                  {it.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
