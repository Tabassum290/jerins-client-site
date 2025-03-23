import { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
  const { createNewUser, setUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { name, email, password };

    if (name.length < 6) {
      setError({ ...error, name: 'Must be more than 6 characters long' });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError((prev) => ({
        ...prev,
        password: 'Password must be at least 6 characters long, contain uppercase and lowercase letters.',
      }));
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name })
          .then(() => {
            navigate('/');
          })
          .catch((err) => {
            console.log(err.message);
          });
        toast.success('Welcome to Smart Tech');
      })
      .catch((err) => {
        setError({ ...error, register: err.code });
        toast.error(`Registration failed: ${err.message}`);
      });
  };

  const handleGoogleRegister = () => {
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
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl text-black">
            <div className="text-center px-16 mt-6">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                {error.name && <span className="text-sm text-rose-500">{error.name}</span>}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                {error.password && <span className="text-sm text-rose-500">{error.password}</span>}
              </div>

              <div className="form-control mt-6 flex flex-col">
                <button className="btn bg-purple-700 text-white">Register</button>
                <p className="text-center">Or</p>
                <button onClick={handleGoogleRegister} className="btn bg-purple-700 text-white">
                  <span className="text-2xl">
                    <FcGoogle />
                  </span>
                  Login With Google
                </button>
              </div>

              <p className="p-4 font-semibold">
                Already Have an Account?
                <Link to="/login" className="text-blue-600 font-bold underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
