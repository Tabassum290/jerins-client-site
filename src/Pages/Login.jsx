import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
const {LoginUser,setUser,loginWithGoogle} = useContext(AuthContext);
const [error,setError] = useState({});
const location = useLocation();
const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email,password};
LoginUser (email,password)
.then(result =>{
  setUser(result.user);
  navigate(location?.state? location.state : "/");
  toast.success("Login Successfull. Welcome to Smart Tech");
})
.catch(err=>{
setError({...error, login: err.code});
toast.error("Login Failed. Please Try Again");
})
 }

 const handleGoogleLogin = () => {
      loginWithGoogle()
        .then((result) => {
          setUser(result.user);
          toast.success('Successfully logged in with Google!');
          const redirectPath = location?.state?.from?.pathname || '/';
          navigate(redirectPath);
        })
        .catch((err) => {
          toast.error(`Google login failed: ${err.message}`);
        });
    };
  
    return (
        <div>
            <Navbar/>
            <div className="hero min-h-screen bg-gray-200">
  <div className="hero-content">
    <div className="card bg-white w-full shrink-0 shadow-2xl text-black">
    <div className="text-center px-16 mt-6">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black mb-2">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black mb-2" >Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          {
            error.login && <label className='label text-sm font-semibold text-red-600'>
             { error.login}</label>
          }
        </div>
        <div className="form-control mt-6 flex flex-col">
          <button className="btn bg-purple-700 text-white">Login</button>
          <p className='text-center'>Or</p>
          <button onClick={handleGoogleLogin} className="btn bg-purple-700 text-white"><span className='text-2xl'><FcGoogle /></span>Login With Google</button>
        </div>
        <p className='p-4 font-semibold'>Don't Have Account?<Link to='/signup' className='text-blue-600 font-bold underline'>SignUp</Link></p>
      </form>
    </div>
  </div>
</div>
            <Footer/>
        </div>
    );
};

export default Login;