import { Helmet } from "react-helmet-async";
// import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import loginImg from "../../assets/signup.jpg";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorCode === "auth/wrong-password"
            ? "Incorrect password"
            : errorCode === "auth/user-not-found"
            ? "No user found with this email"
            : error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div className="max-container">
      <Helmet>
        <title>Login | Food Cravings</title>
      </Helmet>
      <div className="hero min-h-screen -mt-10">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="mb-12 md:mb-0">
            <img src={loginImg} className="w-full" alt="image" />
          </div>
          <div className="w-full max-w-sm mx-auto border rounded-md shadow-lg">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <h2 className="font-bold font-montserrat text-lg md:text-3xl text-center underline mb-4">
                  Login
                </h2>

                {/* email */}
                <div className="form-control relative mt-3">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <FaEnvelope className="text-dark/75 dark:text-light/75" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                    autoComplete="off"
                    required
                  />
                </div>

                {/* password */}
                <div className="form-control relative mt-3">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <FaLock className="text-dark/75 dark:text-light/75" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                    autoComplete="off"
                    required
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </div>
                </div>

                {/* btn  */}
                <div className="form-control mt-6">
                  <input
                    className="btn btn-sm text-white hover:bg-purple-800 hover:text-dark bg-purple-500 transition duration-3000 border-0"
                    type="submit"
                    value="Login"
                  />
                </div>

                <p className="text-center mt-4">
                  New to Food Cravings?{" "}
                  <Link to="/signup" className="text-orange-600 font-bold">
                    Sign Up
                  </Link>
                </p>
                <div className="divider">OR</div>
                <div>
                  <p>{error}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
