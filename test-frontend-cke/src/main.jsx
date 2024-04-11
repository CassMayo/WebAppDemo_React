import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Listings from './components/Listings.jsx';
import Listing from './components/Listing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Listings />
      }
    ]
  },

  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Listing />
      }
    ]
  },
 
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Listing />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider to pass down the router context */}
  </React.StrictMode>,
)
