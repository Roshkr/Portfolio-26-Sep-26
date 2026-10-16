import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Application mount element #root was not found.');
}

// SEO route documents include a lightweight static page for crawlers and for the
// brief period before the app bundle loads. The React app takes over immediately.
document.getElementById('seo-fallback')?.remove();

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
