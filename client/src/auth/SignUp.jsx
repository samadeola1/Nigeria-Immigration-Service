import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import immigration from "../assets/IMMIGRTION 1.png";
import logo from "../assets/image 8 (1).png";
import google from "../assets/devicon_google.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

// Import the Zustand store
import { useAuthStore } from "../store/authStore";

export default function SignUp() {
  // Get actions and state from the Zustand store
  const loginUser = useAuthStore((state) => state.login);
  const setLoadingState = useAuthStore((state) => state.setLoading);
  const loading = useAuthStore((state) => state.loading); // Use loading state from store

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

  const handleSignUp = async (data) => {
    setLoadingState(true); // Set loading true via Zustand

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

      // For email/password sign-up, create a consistent user data object
      const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };

      if (!token && res.data.success) {
        // This condition handles cases where backend might return success but no token for a specific flow (e.g., email verification needed)
        toast.success(
          res.data.message || "Registration successful! Please log in."
        );
        reset();
        setTimeout(() => navigate("/signin"), 2000); // Redirect to signin after successful signup without immediate login
        return;
      } else if (token) {
        // Call the login action from Zustand store
        loginUser(userData, token, true); // Assume rememberMe for sign-up to persist session

        toast.success(
          res.data.message || "Account created successfully! Redirecting..."
        );
        reset();
        setTimeout(() => navigate("/"), 2000); // Redirect to homepage after successful signup and login
      } else {
        toast.error("Signup failed: Unexpected response from API.");
      }
    } catch (err) {
      console.error("❌ Signup error:", err.response || err);

      let errorMessage = "Signup failed. Please try again.";

      if (axios.isAxiosError(err) && err.response) {
        if (err.response.data && err.response.data.errMsg) {
          errorMessage = err.response.data.errMsg;
        } else if (err.response.data && typeof err.response.data === "string") {
          errorMessage = err.response.data;
        } else if (err.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (err.response.status === 400) {
          errorMessage = "Invalid input. Please check your details.";
        }
      } else if (axios.isAxiosError(err) && !err.response) {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else {
        errorMessage = "An unexpected error occurred. Please try again.";
      }
      toast.error(errorMessage);
    } finally {
      setLoadingState(false); // Set loading false via Zustand
    }
  };

  const handleGoogleSignIn = async () => {
    setLoadingState(true); // Set loading true via Zustand
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      // For Google sign-in, create a consistent user data object
      const userData = {
        firstName: user.displayName ? user.displayName.split(" ")[0] : "",
        lastName: user.displayName
          ? user.displayName.split(" ").slice(1).join(" ")
          : "",
        email: user.email,
        displayName: user.displayName, // Keep displayName for direct use if preferred
        photoURL: user.photoURL,
      };

      // Call the login action from Zustand store
      loginUser(userData, token, true); // Assume rememberMe for Google sign-in

      toast.success("Google Sign-up successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Google sign-up failed", error);
      let googleErrorMessage = "Google sign-up failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        googleErrorMessage = "Google sign-in window closed. Please try again.";
      } else if (error.code === "auth/cancelled-popup-request") {
        googleErrorMessage =
          "Google sign-in already in progress. Please wait or try again.";
      } else if (error.message) {
        googleErrorMessage = error.message;
      }
      toast.error(googleErrorMessage);
    } finally {
      setLoadingState(false); // Set loading false via Zustand
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6 md:p-0">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "10px",
            padding: "16px",
            fontSize: "14px",
          },
          success: {
            duration: 3000,
            style: {
              background: "#10B981",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#EF4444",
            },
          },
        }}
      />

      <div
        className={`flex flex-col md:flex-row bg-white overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-full h-auto md:h-screen rounded-xl shadow-2xl md:rounded-none md:shadow-none`}
      >
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {" "}
          {/* Changed md:flex to lg:flex */}
          <img
            src={immigration}
            alt="Nigeria Immigration Service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 px-5 sm:px-8 md:px-10 lg:px-12">
          {" "}
          {/* Changed md:w-1/2 to lg:w-1/2 */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-full lg:max-w-full xl:max-w-full mx-auto px-4 sm:px-6 md:px-8">
            <a href="/" className="block">
              <div className="flex items-center justify-center mb-6">
                <img
                  src={logo}
                  alt="NIGERIA IMMIGRATION SERVICE"
                  className="h-16 w-auto"
                />
              </div>
            </a>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create Your NIS Account
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Join thousands of users accessing Nigeria's immigration services
                digitally
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="relative w-full sm:w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                      errors.firstName
                        ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                        : "border-gray-300 text-[#212121] placeholder-gray-500"
                    }`}
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "First name must be at least 2 characters",
                      },
                    })}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineUser
                      className={`h-5 w-5 ${
                        errors.firstName ? "text-red-500" : "text-gray-400"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm flex items-center">
                      <span className="mr-1"></span>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="relative w-full sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                      errors.lastName
                        ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                        : "border-gray-300 text-[#212121] placeholder-gray-500"
                    }`}
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Last name must be at least 2 characters",
                      },
                    })}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineUser
                      className={`h-5 w-5 ${
                        errors.lastName ? "text-red-500" : "text-gray-400"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                    errors.email
                      ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                      : "border-gray-300 text-[#212121] placeholder-gray-500"
                  }`}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineMail
                    className={`h-5 w-5 ${
                      errors.email ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                    errors.password
                      ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                      : "border-gray-300 text-[#212121] placeholder-gray-500"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain uppercase, lowercase, number, and special character",
                    },
                  })}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineLockClosed
                    className={`h-5 w-5 ${
                      errors.password ? "text-red-500" : "text-gray-400"
                    }`}
                  />
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
                  <p className="text-red-500 text-sm flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                    errors.cPassword
                      ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                      : "border-gray-300 text-[#212121] placeholder-gray-500"
                  }`}
                  {...register("cPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineLockClosed
                    className={`h-5 w-5 ${
                      errors.cPassword ? "text-red-500" : "text-gray-400"
                    }`}
                  />
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
                  <p className="text-red-500 text-sm flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.cPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
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
              className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md mb-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-700 mt-6">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-green-600 hover:underline text-base"
              >
                Sign in here
              </a>
            </p>

            <p className="text-center text-gray-500 mt-4 text-sm">
              🔒 This is a secured government portal. Unauthorized access is
              prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
