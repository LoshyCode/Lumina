import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
import Homepage from './pages/homepage/homepage.jsx';

function Main() {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false); // Novo estado

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoadingComplete(true); // Define como true quando o carregamento termina
          return 100;
        }
        return prevProgress + 3; // Aumenta o progresso rapidamente
      });
    }, 50); // Atualiza a cada 50ms para ser rápido

    return () => clearInterval(interval);
  }, []);

  return (
    <React.StrictMode>
      <LoadingSpinner progress={progress}>
        <Homepage loadingComplete={loadingComplete} /> {/* Passa o prop */}
      </LoadingSpinner>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
