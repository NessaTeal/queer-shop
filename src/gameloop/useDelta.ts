import { useEffect, useRef, useState } from 'react';

export const useDelta = (): number => {
  const frameTime = useRef(performance.now());
  const previousFrameTime = useRef(0);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    let frameId: number;
    const frame = (time: number) => {
      frameTime.current = time;
      setDelta(time - previousFrameTime.current);
      previousFrameTime.current = frameTime.current;
      frameId = requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return delta / 1000;
};
