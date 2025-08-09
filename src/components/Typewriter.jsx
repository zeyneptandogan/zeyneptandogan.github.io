// components/Typewriter.jsx
'use client';
import { useEffect, useRef } from 'react';

export default function Typewriter({
  words,
  typeSpeed = 75,
  deleteSpeed = 45,
  holdAtFull = 1100,
  holdAtEmpty = 400,
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el || !Array.isArray(words) || words.length === 0) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let t;

    const tick = () => {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        t = setTimeout(tick, charIndex === current.length ? holdAtFull : typeSpeed);
        if (charIndex === current.length) deleting = true;
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          t = setTimeout(tick, holdAtEmpty);
        } else {
          t = setTimeout(tick, deleteSpeed);
        }
      }
    };

    t = setTimeout(tick, typeSpeed);
    return () => clearTimeout(t);
  }, [words, typeSpeed, deleteSpeed, holdAtFull, holdAtEmpty]);

  return (
    <span className="typewriter" aria-live="polite">
      <span id="tw-text" ref={elRef} />
      <span className="caret" />
    </span>
  );
}
