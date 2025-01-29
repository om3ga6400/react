import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BackgroundParticles } from './components/BackgroundPatricles.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <BackgroundParticles />
  </>
);
