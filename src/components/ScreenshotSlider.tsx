import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Props {
  images: string[];
}

const ScreenshotSlider: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    // prevent vertical scroll from being blocked when swipe is small
    if (Math.abs(diff) > 30 && containerRef.current) {
      e.preventDefault();
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;
    startX.current = null;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full mt-4">
      <div
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative bg-primary rounded-md overflow-hidden border border-border"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 object-contain bg-black/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 sm:p-3"
        >
          <FiChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 sm:p-3"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === index ? 'bg-accent' : 'bg-border'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotSlider;
