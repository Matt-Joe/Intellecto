import { useState, useEffect, useRef } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // fade in only once
        }
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateY(0)'
      : direction === 'up'
      ? 'translateY(20px)'
      : 'translateY(-20px)',
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };

  return { ref: domRef, style };
};

export default useScrollFadeIn;
