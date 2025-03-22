import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/signup",
    element:<SignUp/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/cart",
    element:<Cart/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
