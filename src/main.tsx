import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AudioProvider } from './hooks/useAudio';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </StrictMode>,
);
