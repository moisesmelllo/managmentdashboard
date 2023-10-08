'use client'

import { useEffect, useState } from 'react';

export function WindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0});

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
