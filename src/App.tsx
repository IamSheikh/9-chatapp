import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import { Login, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
