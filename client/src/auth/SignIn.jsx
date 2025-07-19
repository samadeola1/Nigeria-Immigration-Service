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
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

// Import the Zustand store
import { useAuthStore } from "../store/authStore";

export default function SignIn() {
  // Renamed from Login to SignIn
  // Get actions and state from the Zustand store
  const loginUser = useAuthStore((state) => state.login);
  const setLoadingState = useAuthStore((state) => state.setLoading);
  const loading = useAuthStore((state) => state.loading); // Use loading state from store

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (data) => {
    setLoadingState(true); // Set loading true via Zustand

    const payload = {
      email: data.email,
      password: data.password,
    };

    console.log("🔐 Attempting login with payload:", payload);

    try {
      const res = await axios.post(
        "https://nigeria-immigration-service.onrender.com/api/services/sign-in",
        payload
      );

      console.log("✅ Login successful:", res.data);

      const token = res.data.user?.token;
      // Ensure user data includes firstName and lastName from your backend response
      const userData = {
        firstName: res.data.user?.firstName || "", // Provide default empty string if null
        lastName: res.data.user?.lastName || "", // Provide default empty string if null
        email: res.data.user?.email,
        // Add any other user data you get from your backend that you want in the store
      };

      if (!token) {
        console.warn("⚠️ No token received from backend.");
        toast.error("Login failed: No authentication token received.");
        return;
      }

      // Call the login action from Zustand store, passing user data and token
      loginUser(userData, token, rememberMe); // Pass rememberMe to the store action

      toast.success(
        res.data.message || "Signed in successfully! Redirecting..."
      );
      reset(); // Clear form fields on success
      setTimeout(() => navigate("/"), 2000); // Redirect to homepage
    } catch (err) {
      console.error("❌ Login error:", err.response || err);

      let errorMessage = "Login failed. Please try again.";

      if (axios.isAxiosError(err) && err.response) {
        if (err.response.data && err.response.data.errMsg) {
          errorMessage = err.response.data.errMsg;
        } else if (err.response.data && typeof err.response.data === "string") {
          errorMessage = err.response.data;
        } else if (err.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (err.response.status === 400 || err.response.status === 401) {
          errorMessage =
            err.response.data?.errMsg ||
            "Invalid credentials. Please check your email and password.";
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

      toast.success("Google Sign-in successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Google sign-in failed", error);
      let googleErrorMessage = "Google sign-in failed. Please try again.";
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6 lg:p-0">
      {" "}
      {/* Adjusted padding for responsiveness */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-full lg:max-w-full xl:max-w-full rounded-lg h-auto md:h-screen shadow-lg md:rounded-none md:shadow-none">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${immigration})` }}
        ></div>
        <div className="w-full lg:w-1/2 mx-auto py-8 px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-full lg:max-w-full xl:max-w-full mx-auto px-4 sm:px-6 md:px-8">
            <a href="/" className="block">
              <div className="flex items-center justify-center mb-6">
                <img src={logo} alt="NIGERIA IMMIGRATION" className="h-16" />
              </div>
            </a>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Welcome to the Nigeria Immigration Portal
            </h2>
            <p className="text-gray-600 text-center mb-8 px-4 text-base">
              Sign in securely to access passport, visa and permit services.
            </p>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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
                    required: "Email Address is required",
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
                    <span className="mr-1"></span>
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
                    <span className="mr-1"></span>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-gray-700 text-sm md:text-base"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-green-600 hover:underline text-sm md:text-base"
                >
                  Forgot password?
                </a>
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
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
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
              Sign in with Google
            </button>
            <p className="text-center text-sm text-gray-700 mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-green-600 hover:underline text-base"
              >
                Sign up
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
