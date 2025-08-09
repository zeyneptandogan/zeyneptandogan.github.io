// components/FullPagePager.jsx
'use client';
import { useEffect, useRef } from 'react';

export default function FullPagePager({ rootId = 'snap-root', sectionSelector = '.snap-section' }) {
  const animRef = useRef(false);
  const idxRef = useRef(0);

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const sections = Array.from(root.querySelectorAll(sectionSelector));
    if (!sections.length) return;

    const nearestIndex = () => {
      const t = root.scrollTop;
      let best = 0, dmin = Infinity;
      sections.forEach((s, i) => {
        const d = Math.abs(s.offsetTop - t);
        if (d < dmin) { dmin = d; best = i; }
      });
      return best;
    };
    idxRef.current = nearestIndex();

    // scrollable ancestor bul ve yönünde daha kayacak yer var mı kontrol et
    const getScrollableAncestor = (el) => {
      for (let n = el; n && n !== root; n = n.parentElement) {
        const cs = getComputedStyle(n);
        const oy = cs.overflowY;
        if ((oy === 'auto' || oy === 'scroll') && n.scrollHeight > n.clientHeight) return n;
      }
      return null;
    };
    const canScroll = (el, dy) => {
      if (!el) return false;
      if (dy > 0) return el.scrollTop + el.clientHeight < el.scrollHeight; // aşağı kayabilir
      if (dy < 0) return el.scrollTop > 0;                                  // yukarı kayabilir
      return false;
    };

    const goTo = (next) => {
      if (next < 0 || next >= sections.length) return;
      animRef.current = true;
      sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
      idxRef.current = next;
      setTimeout(() => (animRef.current = false), 650);
    };

    const onWheel = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const scrollable = getScrollableAncestor(e.target);
      // İçeride kaydırılabilir alan varsa ve o yönde hâlâ kayabiliyorsa, doğal scroll'a izin ver
      if (scrollable && canScroll(scrollable, e.deltaY)) return;
      e.preventDefault();
      if (animRef.current) return;
      if (e.deltaY > 10) goTo(idxRef.current + 1);
      else if (e.deltaY < -10) goTo(idxRef.current - 1);
    };

    let touchStartY = null;
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      if (touchStartY == null) return;
      const dy = touchStartY - e.touches[0].clientY;
      const scrollable = getScrollableAncestor(e.target);
      if (Math.abs(dy) < 40) return; // küçük hareketleri yok say
      // İç scroll mümkünse bırak
      if (scrollable && canScroll(scrollable, dy)) { touchStartY = e.touches[0].clientY; return; }
      e.preventDefault();
      if (animRef.current) return;
      if (dy > 0) goTo(idxRef.current + 1); else goTo(idxRef.current - 1);
      touchStartY = null;
    };

    const onKey = (e) => {
      if (animRef.current) return;
      if (['ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); goTo(idxRef.current + 1); }
      if (['ArrowUp','PageUp'].includes(e.key))        { e.preventDefault(); goTo(idxRef.current - 1); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End')  { e.preventDefault(); goTo(sections.length - 1); }
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('touchmove', onTouchMove, { passive: false });
    root.addEventListener('keydown', onKey);

    return () => {
      root.removeEventListener('wheel', onWheel);
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchmove', onTouchMove);
      root.removeEventListener('keydown', onKey);
    };
  }, [rootId, sectionSelector]);

  return null;
}
