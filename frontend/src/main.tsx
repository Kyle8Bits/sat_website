import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/App.css'
import { ThemeProvider } from './hooks/theme/ThemeContext';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Registration from './pages/Registration/Registration';
import Admin from './pages/Admin/Admin';

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
  ,
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  }
  ,
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <NotFound />,
  },  
  {
    path: "/admin",
    element: <Admin />,
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