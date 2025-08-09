// components/BlobConductor.jsx
'use client';
import { useEffect } from 'react';

export default function BlobConductor({ rootId = 'snap-root', sectionSelector = '.snap-section' }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const sections = Array.from(root.querySelectorAll(sectionSelector));
    if (!sections.length) return;

    // İlk sahneyi ata
    const setScene = (id) => { root.dataset.scene = id || ''; };

    // En yakın bölümü bul (ilk yüklemede)
    const nearest = () => {
      const t = root.scrollTop;
      let best = sections[0], dmin = Infinity;
      sections.forEach((s) => {
        const d = Math.abs(s.offsetTop - t);
        if (d < dmin) { dmin = d; best = s; }
      });
      setScene(best.id);
    };
    nearest();

    const io = new IntersectionObserver(
      (entries) => {
        // En çok görüneni seç
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setScene(visible.target.id);
      },
      { root, threshold: [0.5, 0.6, 0.7] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [rootId, sectionSelector]);

  return null;
}
