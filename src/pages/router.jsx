import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './errorPage';
import Login from '../components/login';
import NavMenu from '../components/navMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavMenu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
