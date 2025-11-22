import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        // Direct movement for dot
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;

        // Lagged movement for outline
        outlineRef.current.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const onMouseDown = () => {
        if (outlineRef.current) {
            outlineRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
        }
    };

    const onMouseUp = () => {
        if (outlineRef.current) {
            outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    };

    // Hover logic handled via CSS class toggling on standard elements
    const handleLinkHover = () => {
        outlineRef.current?.classList.add('hovered');
    };
    
    const handleLinkLeave = () => {
        outlineRef.current?.classList.remove('hovered');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
};

export default Cursor;