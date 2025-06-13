import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/App.css'
import { ThemeProvider } from './hooks/theme/ThemeContext';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

import Welcome from './pages/Landing/Landing';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import DashboardStaff from './pages/Dashboard/DashboardStaff';
import Registration from './pages/Registration/Registration';
import Admin from './pages/Admin/Admin';
import Works from './pages/Islands/Works';
import Tools from './pages/Islands/Tools';
import Staff from './pages/Islands/Staff';
import Profile from './pages/Islands/Profile';
import Setting from './pages/Islands/Setting';

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
    element: <DashboardStaff />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Works />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ]
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