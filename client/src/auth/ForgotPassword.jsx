import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/image 7.svg";
import VerificationSentModal from "../components/Modals/VerificationSentModal.jsx";
import { HiOutlineMail } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setFormSuccess(null);

    // console.log("Submitting data:", data);

    try {
      const response = await fetch(
        "https://nigeria-immigration-service.onrender.com/api/services/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resData = await response.json();
      // console.log("API response:", resData);

      if (response.ok) {
        setSubmittedEmail(data.email); // Store the email for display in the modal
        setShowVerificationModal(true); // Show the verification modal
        reset(); // Optionally clear the form fields after successful submission
      } else {
        toast.error(
          resData.errMsg || "Failed to process your request. Please try again."
        );
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      // console.error("Network or unexpected error:", error);
      toast.error(
        "An unexpected error occurred. Please check your connection and try again."
      );
    } finally {
      setLoading(false); // Always stop loading, regardless of success or failure
    }
  };

  // Function to handle re-sending the verification email from the modal
  const handleResendVerification = async () => {
    const emailToResend = submittedEmail;
    if (!emailToResend) {
      // console.error("No email available to re-send verification.");
      toast.error("No email available to re-send verification.");
      throw new Error("No email to re-send."); // Throw error to be caught by modal's onResend handler
    }

    // console.log("Re-sending verification email to:", emailToResend);

    try {
      const response = await fetch(
        "https://nigeria-immigration-service.onrender.com/api/services/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailToResend }),
        }
      );

      const resData = await response.json();
      if (!response.ok) {
        // console.error("Resend API error:", resData);
        toast.error(resData.message || "Failed to re-send verification email.");
        throw new Error(
          resData.message || "Failed to re-send verification email."
        );
      }
      // console.log("Resend successful:", resData);
      // The modal's internal state will handle success message for resend
    } catch (error) {
      // console.error("Resend network error:", error);
      toast.error(
        "An unexpected error occurred during resend. Please try again."
      );
      throw error; // Re-throw to be caught by the modal's error handling
    }
  };

  // Function to close the verification modal
  const handleCloseVerificationModal = () => {
    setShowVerificationModal(false);
    setSubmittedEmail(""); // Clear the email when modal closes

    setFormSuccess(null); // Clear any form success messages
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 font-poppins p-4 sm:p-6 md:p-0">
      {/* Toaster component for displaying toast notifications */}
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

      {/* Main content container: The central form card */}
      <div className="bg-white shadow-xl rounded-xl w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
          <Link to="/" className="block">
            <div className="flex items-center justify-center mb-6">
              <img
                src={logo}
                alt="Nigeria Immigration Service"
                className="h-16 w-auto"
              />
            </div>
          </Link>

          {/* Main Heading and Sub-text */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Enter your email to receive a password reset link.
            </p>
          </div>

          {/* Form Error/Success Messages (only display if modal is not open) */}
          {/* Removed formError display as toasts handle it */}
          {formSuccess && !showVerificationModal && (
            <p className="text-green-600 bg-green-100 p-3 rounded-md text-center mb-4 text-sm">
              {formSuccess}
            </p>
          )}
          {!showVerificationModal && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    required: "Email is required",
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

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We'll send a verification code to this email if it matches an
                existing NIS account.
              </p>

              <div className="space-y-3">
                {/* Next Button */}
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
                      Sending...
                    </span>
                  ) : (
                    "Next"
                  )}
                </button>

                {/* Back Button */}
                <Link to="/signin">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm text-lg font-semibold"
                  >
                    Back
                  </button>
                </Link>
              </div>
            </form>
          )}

          {/* Footer text - Consistent with SignUp/Login */}
          <p className="text-center text-gray-500 mt-8 text-sm">
            🔒 This is a secured government portal. Unauthorized access is
            prohibited.
          </p>
        </div>
      </div>

      {/* Render the VerificationSentModal */}
      <VerificationSentModal
        isOpen={showVerificationModal}
        onClose={handleCloseVerificationModal}
        email={submittedEmail}
        onResend={handleResendVerification}
      />
    </div>
  );
};

export default ForgotPassword;
