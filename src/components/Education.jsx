import data from '@/data/education.json';
import styles from './Education.module.css';

export default function Education() {
    return (
    <section id="education" className="container py-4 text-white">
      <h2 className="h1 section-title">Education</h2>
      <hr className="border-0 border-top border-secondary opacity-50" />
      <ul className={styles.timeline}>
        {data.map((it, idx) => (
        <li key={idx} >
          <div key={idx} className="bg-transparent text-white">
            <div className="d-flex w-100 justify-content-between align-items-baseline">
              <h3 className="h5 mb-1">
                {it.degree} <span>@ {it.school}</span>
              </h3>
              <small className="">{it.period}</small>
            </div>
            {it.location && <div className="small">{it.location}</div>}
            {Array.isArray(it.highlights) && it.highlights.length > 0 && (
              <ul className="mt-2 mb-0">
                {it.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </div>
          </li>
        ))}
      </ul>
    </section>
    )
}