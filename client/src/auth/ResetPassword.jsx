import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// Import the Zustand store
import { useAuthStore } from "../store/authStore";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  // Get actions and state from the Zustand store
  const setLoadingState = useAuthStore((state) => state.setLoading);
  const loading = useAuthStore((state) => state.loading); // Use loading state from store

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (!resetToken) {
      toast.error(
        "Invalid or missing reset token in the URL. Please check your link."
      );
    }
  }, [resetToken]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    if (!resetToken) {
      toast.error("Cannot reset password: Missing reset token.");
      return;
    }

    setLoadingState(true); // Set loading true via Zustand
    console.log("Form data submitted:", data);
    console.log("Using resetToken:", resetToken);

    try {
      const apiUrl = `https://nigeria-immigration-service.onrender.com/api/services/reset-password/${resetToken}`;

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: data.new_password,
          confirm_password: data.confirm_password,
        }),
      });

      const resData = await response.json();
      console.log("API response:", resData);

      if (response.ok) {
        toast.success(
          "Password has been reset successfully! Redirecting to login..."
        );
        reset();

        setTimeout(() => {
          navigate("/signin"); // Redirect to /signin after successful reset
        }, 2000);
      } else {
        toast.error(
          resData.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
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

      <div className="bg-white shadow-xl rounded-xl w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Choose a new password
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              To secure your account, choose a strong password you haven’t used
              before and is at least 8 characters long.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className={`w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                  errors.new_password
                    ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                    : "border-gray-300 text-[#212121] placeholder-gray-500"
                }`}
                {...register("new_password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff className="w-5 h-5" />
                ) : (
                  <MdOutlineVisibility className="w-5 h-5" />
                )}
              </button>
              {errors.new_password && (
                <p className="text-red-500 text-sm flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.new_password.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                  errors.confirm_password
                    ? "border-red-500 ring-red-500 text-red-500 placeholder-red-500"
                    : "border-gray-300 text-[#212121] placeholder-gray-500"
                }`}
                {...register("confirm_password", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("new_password") || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handleToggleConfirmPassword}
              >
                {showConfirmPassword ? (
                  <MdOutlineVisibilityOff className="w-5 h-5" />
                ) : (
                  <MdOutlineVisibility className="w-5 h-5" />
                )}
              </button>
              {errors.confirm_password && (
                <p className="text-red-500 text-sm flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            <label
              className="flex items-center gap-2 text-gray-700 text-sm md:text-base cursor-pointer"
              htmlFor="remember"
            >
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
              />
              Require all devices to sign in with new password
            </label>

            <div className="flex justify-center mt-4">
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
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
