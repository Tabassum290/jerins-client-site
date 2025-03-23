import { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Drawer = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
     <MdMenu/>
    </label>
    <Outlet/>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-purple-400 text-white min-h-full w-80 p-4">
         <div>
           <h1 className="text-3xl mt-12">{user?.displayName}</h1>
           <p className="text-md mt-2">Email :  {user?.email}</p>
         </div>
        <NavLink to='/dashboard/adminhome' className="text-xl mt-12">Admin Home</NavLink>
        <NavLink to='/dashboard/add' className="text-xl my-4">Add Item</NavLink>
        <NavLink to='/dashboard/manage' className="text-xl mb-4">Manage Item</NavLink>
        <NavLink to='/dashboard/allusers' className="text-xl mb-4">All users </NavLink>
        <div className="border-2"></div>
        <NavLink to='/' className="text-xl my-4">Home</NavLink>
        <div>
        {
            user && user?.email? <button onClick={logOut} className="text-xl">Logout</button> : <Link to='/login' className="text-xl">Login</Link>
        }
        </div>

    </ul>
  </div>
</div>
        </div>
    );
};

export default Drawer;