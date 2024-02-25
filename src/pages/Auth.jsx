import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

Auth.propTypes = {
  login: PropTypes.bool,
};

export function Auth({ login }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userError, setUserError] = useState({
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const passwordInputRef = useRef(null);
  const confirmmPasswordInputRef = useRef(null);

  const handleValidation = (e, item) => {
    const { value } = e.target;
    if (item === "email") {
      setUser({ ...user, email: value });
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setUserError({ ...userError, emailError: true });
      } else {
        setUserError({ ...userError, emailError: false });
      }
    } else if (item === "password") {
      setUser({ ...user, password: value });
      if (!(value.length > 4)) {
        setUserError({ ...userError, passwordError: true });
      } else {
        setUserError({ ...userError, passwordError: false });
      }
    } else {
      setUser({ ...user, confirmPassword: value });
    }
  };

  const handleKeydown = (e, item) => {
    if (e.key === "Enter") {
      if (item === "email") {
        passwordInputRef.current.focus();
      } else if (item === "password") {
        if (login) {
          handleSignIn();
        } else {
          confirmmPasswordInputRef.current.focus();
        }
      } else {
        handleSignUp();
      }
    }
  };

  const handleSignIn = () => {
    console.log("handle sign in");
  };

  const handleSignUp = () => {
    console.log("handle sign up");
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start">
      <form className="card w-full md:w-[500px] min-h-screen md:min-h-max md:mt-32 flex flex-col gap-8 px-4 py-4">
        <div className="">
          <h1 className="text-3xl font-bold text-primary-700">
            {login ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="font-bold mr-2 mt-2 text-slate-500">
            {`Enter your email and password to ${
              login ? "sign in" : "sign up"
            }`}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900">Email</label>
          <input
            autoFocus
            value={user.email}
            onChange={(e) => handleValidation(e, "email")}
            className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
            type="email"
            placeholder="Your email address"
            onKeyDown={(e) => handleKeydown(e, "email")}
          />
          {userError.emailError && (
            <small className="text-danger-500">*Invalid Email format</small>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900">Password</label>
          <div className="px-5 flex items-center py-3 border border-slate-300 rounded-xl">
            <input
              value={user.password}
              ref={passwordInputRef}
              onChange={(e) => handleValidation(e, "password")}
              className="w-full placeholder:text-slate-400  outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              onKeyDown={(e) => handleKeydown(e, "password")}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 cursor-pointer"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          {userError.passwordError && (
            <small className="text-danger-500">*Atleast 4 char required</small>
          )}
        </div>
        {!login && (
          <div className="flex flex-col gap-2">
            <label className="text-slate-900">Confirm Password</label>
            <div className="px-5 flex items-center py-3 border border-slate-300 rounded-xl">
              <input
                value={user.confirmPassword}
                ref={confirmmPasswordInputRef}
                onChange={(e) => handleValidation(e, "confirm-password")}
                className="w-full placeholder:text-slate-400  outline-none"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                onKeyDown={(e) => handleKeydown(e, "confirm-password")}
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-slate-400 cursor-pointer"
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
        )}
        <div className="space-y-2">
          {login ? (
            <button
              className="w-full px-5 py-3 rounded-xl outline-none bg-primary-700 text-slate-100"
              type="button"
              onClick={handleSignIn}
            >
              SIGN IN
            </button>
          ) : (
            <button
              className="w-full px-5 py-3 rounded-xl outline-none bg-primary-700 text-slate-100"
              type="button"
              onClick={handleSignUp}
            >
              SIGN UP
            </button>
          )}
          {login ? (
            <p className="text-slate-400 text-center">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-primary-700 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-slate-400 text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-primary-700 cursor-pointer"
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
