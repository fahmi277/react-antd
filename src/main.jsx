import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import TableView from './pages/TableView';
import AppPost from './pages/Post';
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"form",
        element:<TableView/>
      },
      {
        path:"post",
        element:<AppPost/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
