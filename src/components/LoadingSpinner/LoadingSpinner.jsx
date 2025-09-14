import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingSpinner.css';

const LoadingSpinner = ({ progress, children }) => {
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.1,
        ease: "none"
      });
    }

    // Atualiza o contador
    if (counterRef.current) {
      counterRef.current.textContent = `${Math.floor(progress)}%`;
    }

    // Quando o progresso chegar a 100, anima o reveal
    if (progress >= 100) {
      const tl = gsap.timeline();
      
      // Primeiro, espera um pouco para garantir que tudo carregou
      tl.to([counterRef.current, progressBarRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
      });
      
      // Depois, anima o overlay para revelar o conteúdo de baixo para cima
      tl.to(overlayRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.out"
      });
    }
  }, [progress]);

  return (
    <div className="page-reveal-container" ref={containerRef}>
      {/* O conteúdo da página fica aqui */}
      {children}
      
      {/* Overlay que será animado para revelar o conteúdo */}
      <div className='overlay' ref={overlayRef}>
        <div className="page-reveal-overlay">
            <div className='logo-container'>
                <img src="/logo.png" alt=""/>
            </div>
            <div className="counter" ref={counterRef}>{Math.floor(progress)}</div>
            <div className="progress-bar-container">
                <div className="progress-bar" ref={progressBarRef}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;