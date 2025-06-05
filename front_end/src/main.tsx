import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/App.css'
import { ThemeProvider } from './components/hooks/theme/ThemeContext';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <NotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
       <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);