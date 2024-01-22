import React,{ useEffect, useRef } from 'react'
const ScrollHook = () => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = elementRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  
          if (isInView) {
            element.classList.add('visible-css');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return { elementRef };
  };

export default ScrollHook