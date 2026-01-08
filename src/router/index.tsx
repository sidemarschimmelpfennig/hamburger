import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../views/Home';
import { Orders } from '../views/Orders';
import { LayoutDefault } from '../layouts/LayoutDefault';
import { AuthLayout } from '../layouts/AuthLayout';
import { Login } from '../views/Auth/Login';
import { ResetPassword } from '../views/Auth/ResetPassword';
import { Register } from '../views/Auth/Register';

export const router = createBrowserRouter([
  {
    element: <LayoutDefault />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/reset', element: <ResetPassword /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
