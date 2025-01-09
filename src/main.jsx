import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Error from './pages/error.jsx'
import Hero from './pages/hero.jsx'
import Timeline from './pages/timeline.jsx'
import Read from './pages/read.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      },
      {
        path: '/read',
        element: <Read />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
