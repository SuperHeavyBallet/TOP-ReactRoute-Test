import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader , action as rootAction, } from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import TestMain from './TestMain'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        //<RouterProvider router={router} />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <TestMain />
  </React.StrictMode>,
)
