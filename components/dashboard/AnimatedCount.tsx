"use client";

import { useEffect, useState } from "react";

type AnimatedCountProps = {
  value: number;
};

export default function AnimatedCount({ value }: AnimatedCountProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const duration = 900;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <>{count.toLocaleString()}</>;
}
