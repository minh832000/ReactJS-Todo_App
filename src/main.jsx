import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './assets/styles/_main.scss';

import App from './App';
import { StoreProvider } from './store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
