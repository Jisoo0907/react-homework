import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoPage from './pages/TodoPage';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>
);
