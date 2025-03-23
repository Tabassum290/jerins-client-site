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
import Dashboard from './Pages/Dashboard';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import AddItem from './Pages/AddItem';
import ManageItem from './Pages/ManageItem';
import AllUsers from './Pages/AllUsers';
import AdminHome from './Pages/AdminHome';

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
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:'adminhome',
        element:<AdminHome/>,
      },
      {
        path:'add',
        element:<AddItem/>,
      },
      {
        path:'manage',
        element:<ManageItem/>,
      },
      {
        path:'allusers',
        element:<AllUsers/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
