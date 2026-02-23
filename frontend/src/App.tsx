import { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export function App() {
  useEffect(() => {
    document.title = 'Hamburgeria do Side';
  }, []);
  return <RouterProvider router={router} />;
}
