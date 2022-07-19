/* eslint-disable react-hooks/exhaustive-deps */
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function useHover(ref, callback) {
  useEffect(() => {
    const handleMouseOver = () => {
      gsap.to(ref.current, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.inOut',
      });
      callback();
    }

    const handleMouseOut = () => {
      gsap.to(ref.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }

    ref.current.addEventListener('mouseover', handleMouseOver);
    ref.current.addEventListener('mouseout', handleMouseOut);

    return () => {
      ref.current.removeEventListener('mouseover', handleMouseOver);
      ref.current.removeEventListener('mouseout', handleMouseOut);
    }
  }, [ref, callback]);
}