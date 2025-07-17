import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import immigration from "../assets/IMMIGRTION 1.png";
import logo from "../assets/image 8 (1).png";
import google from "../assets/devicon_google.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

export default function SignUp() {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleSignUp = async (data) => {
    setLoading(true);

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      cPassword: data.cPassword,
    };

    console.log("Payload being sent to API:", payload);

    try {
      const res = await axios.post(
        "https://nigeria-immigration-service.onrender.com/api/services/sign-up",
        payload
      );
      const token = res.data.user?.token || res.data.token;

      if (!token && res.data.success) {
        toast.success(res.data.message || "Registration successful! Please log in.");
        reset();
        setTimeout(() => navigate("/signin"), 2000);
        return;
      } else if (token) {
        localStorage.setItem("token", token);
        toast.success(res.data.message || "Account created successfully! Redirecting...");
        reset();
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Signup failed: Unexpected response from API.");
      }

    } catch (err) {
      console.error("❌ Signup error:", err.response || err);

      let errorMessage = "Signup failed. Please try again.";

      if (axios.isAxiosError(err) && err.response) {
        if (err.response.data && err.response.data.errMsg) {
          errorMessage = err.response.data.errMsg;
        } else if (err.response.data && typeof err.response.data === 'string') {
          errorMessage = err.response.data;
        } else if (err.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (err.response.status === 400) {
            errorMessage = "Invalid input. Please check your details.";
        }
      } else if (axios.isAxiosError(err) && !err.response) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else {
        errorMessage = "An unexpected error occurred. Please try again.";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          photo: user.photoURL,
        })
      );
      toast.success("Google Sign-up successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Google sign-up failed", error);
      let googleErrorMessage = "Google sign-up failed. Please try again.";
      if (error.code === 'auth/popup-closed-by-user') {
        googleErrorMessage = "Google sign-in window closed. Please try again.";
      } else if (error.code === 'auth/cancelled-popup-request') {
        googleErrorMessage = "Google sign-in already in progress. Please wait or try again.";
      } else if (error.message) {
        googleErrorMessage = error.message;
      }
      toast.error(googleErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Outer container: Added p-4 sm:p-6 for padding on small screens, and md:p-0 to remove it from md and above
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5] font-poppins p-4 sm:p-6 md:p-0">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Inner container: flex-col on small, flex-row from md.
          max-w for small screens, w-full from md.
          rounded-lg/shadow-lg for small, removed for md and above using md:!rounded-none md:!shadow-none */}
      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-full lg:max-w-full xl:max-w-full rounded-lg shadow-lg md:rounded-none md:shadow-none">
        {/* Image Section: Hidden on small, block from md, takes half width from md */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${immigration})` }}
        ></div>

        {/* Form Section: Full width on small, half width from md.
            Internal padding adjusted for all breakpoints. */}
        <div className="w-full md:w-1/2 mx-auto py-8 px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-center">
          <a href="/">
            <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="NIGERIA IMMIGRATION" className="h-16" />
            </div>
          </a>

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Create Your NIS Account
          </h2>

          <p className="text-gray-600 text-center mb-8 px-4 text-base">
            Join thousands of users to accessing Nigeria’s immigration services
            digitally
          </p>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("firstName", { required: "First Name is required" })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("lastName", { required: "Last Name is required" })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 100-8 4 4 0 000 8zm-8 4a4 4 0 100-8 4 4 0 000 8zm-8 4a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
                  />
                </svg>
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff className="w-5 h-5" />
                ) : (
                  <MdOutlineVisibility className="w-5 h-5" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("cPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
                  />
                </svg>
              </div>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <MdOutlineVisibilityOff className="w-5 h-5" />
                ) : (
                  <MdOutlineVisibility className="w-5 h-5" />
                )}
              </button>
              {errors.cPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.cPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 text-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-lg">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 shadow-sm text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-700 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-[#00AA55] hover:underline">
              Sign in
            </a>
          </p>

          <p className="text-center text-gray-500 mt-4 px-4 text-sm">
            This is a secured government portal. Unauthorized access is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
