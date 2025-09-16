import React, { useState, useCallback, useEffect, useRef } from "react";
import './style.css'
import Navbar from '../../components/navbar/navbar.jsx'
import SplitText from '../../animations/SplitText/SplitText.jsx'
import { IoIosArrowDown } from "react-icons/io";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Globe from "../../components/Globe/Globe.jsx";
import TiltedCard from "../../components/TiltedCard/tiltedcard.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TypeAnimation } from 'react-type-animation';
import { color } from "motion";

gsap.registerPlugin(ScrollTrigger); // Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollToPlugin); // Registra o plugin ScrollToPlugin

const handleAnimationComplete = () => {
    console.log('Animation completed');
}

function Homepage({ loadingComplete }) {
  const content2Ref = useRef(null);
  
  const [showSecondText, setShowSecondText] = useState(false); // Estado para controlar a exibição do segundo texto
  const handleFirstAnimationComplete = useCallback(() => {
    setShowSecondText(true);
  }, []);

  useEffect(() => { // Inicializa a animação do AOS
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToContent2 = () => { // Rola para o conteúdo 2
    if (content2Ref.current) {
      gsap.to(window, { duration: 1, scrollTo: content2Ref.current, ease: "power2.out" });
    }
  };

  return (
    <div>
        <Navbar />
        <div className="homepage-container">
            <video src="/background2.mp4" autoPlay loop muted></video>
        </div>
            <div className="main-content">
                <div className="content1">
                    {loadingComplete && (
                        <SplitText // Animação do texto "Lumina"
                            text="Lumina"
                            className="welcome-text Paytone"
                            delay={200}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.10}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleFirstAnimationComplete}
                        />
                    )}
                    {showSecondText && loadingComplete && ( // Animação do texto "Aprendendo em conjunto, brilhamos mais!"
                        <SplitText
                            text="Aprendendo em conjunto, brilhamos mais!"
                            className="second-text Paytone"
                            delay={50}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                    )}
                    <div className="arrow-container">
                        <IoIosArrowDown className="arrow-icon" onClick={scrollToContent2}/>
                    </div>
                </div>
                <div className="wave-container">
                    <div className="custom-shape-divider-bottom-1757730134">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="content2-main" ref={content2Ref}> 
                    <div className="content2-left">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <p className="title-content-2-left Bebas">Nós do <span style={{color: '#1E121F', fontWeight: '800'}} className="Bebas">Lumina</span> acreditamos que</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                            <TypeAnimation // Animação do texto "Estudar, Aprender, Conhecer, Buscar"
                                sequence={[
                                    'Estudar',
                                    6000, //
                                    'Aprender',
                                    6000,
                                    'Conhecer',
                                    6000,
                                    'Buscar',
                                    6000
                                ]}
                                wrapper="span"
                                speed={200}
                                style={{ fontSize: '5em', display: 'inline-block', fontWeight: 700, color: '#1E121F' }}
                                repeat={Infinity}
                                className="Bebas"
                            />
                            <span className="desc-content-2-left Bebas">em <span className="focus-text-content-2-left Bebas">Conjunto</span> é a chave para o sucesso!</span>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="globe"> 
                        <Globe className="globe"/>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Homepage;