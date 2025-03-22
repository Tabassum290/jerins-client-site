import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHome, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <>
  <NavLink to='/' className="text-2xl"><FaHome/></NavLink>
  <NavLink to="/cart" className="text-2xl lg:px-4"><FaCartPlus/></NavLink>
  <NavLink to="/login" className="text-2xl"><CgProfile /></NavLink>
  </>
    return (
        <div className="w-full sticky top-0 z-10 shadow-xl">
            <div className="navbar max-w-7xl mx-auto bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <NavLink to='/' className="text-xl">Home</NavLink>
       <NavLink to="/cart" className="text-xl">Cart</NavLink>
        <NavLink to="/login" className="text-xl">Login</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">SMART TECH</a>
  </div>

  <div className="navbar-end">
  <div className="px-6">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <FaSearch/>
</label>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;