import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../views/home';
import { AuthLayout, DashBoardLayout, LayoutDefault } from '../layouts';
import {
  AdminCustomers,
  AdminOrders,
  AdminProducts,
  Contact,
  ForgotPassword,
  Location,
  Login,
  Menu,
  Register,
} from '../views';

export const router = createBrowserRouter([
  {
    element: <LayoutDefault />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/location', element: <Location /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/forgot', element: <ForgotPassword /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    element: <DashBoardLayout />,
    children: [
      { path: '/dashboard/orders', element: <AdminOrders /> },
      { path: '/dashboard/products', element: <AdminProducts /> },
      { path: '/dashboard/customers', element: <AdminCustomers /> },
    ],
  },
]);
