import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHome, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const links = <>
  <NavLink to='/' className="text-xl ">Home</NavLink>
  <NavLink to="/cart" className="text-2xl px-4"><FaCartPlus/></NavLink>
  <NavLink to="/dashboard/adminhome" className="text-2xl"><CgProfile /></NavLink>
  </>

    return (
        <div className="w-full bg-purple-600  sticky top-0 z-10 shadow-xl">
            <div className="navbar max-w-7xl mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-[1] mt-3 w-52 p-2 shadow">
         <NavLink to='/' className="text-lg">Home</NavLink>
        <NavLink to="/cart" className="text-lg">Cart</NavLink>
        <NavLink to="/login" className="text-lg">Login</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">SMART TECH</a>
  </div>

  <div className="navbar-end">
  <div className="px-6">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <FaSearch className="text-black"/>
</label>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div>
    {
      user && user?.email ?<button onClick={logOut} className="btn ml-6">Logout</button>:<Link to='/login' className="btn ml-6">Login</Link>
    }
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;