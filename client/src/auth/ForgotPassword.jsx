import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/image 7.svg"; // Assuming this path is correct for your logo
import VerificationSentModal from "../components/Modals/VerificationSentModal.jsx"; // Import the VerificationSentModal

const ForgotPassword = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues, // Added to get current form values for resend
  } = useForm();

  // State for loading, form errors, and success messages
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null); // This will now mainly be used for internal form success before modal
  const [showVerificationModal, setShowVerificationModal] = useState(false); // State to control modal visibility
  const [submittedEmail, setSubmittedEmail] = useState(""); // State to store the email to display in the modal

  // Function to handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    setFormError(null); // Clear previous errors
    setFormSuccess(null); // Clear previous success messages

    console.log("Submitting data:", data);

    try {
      const response = await fetch(
        "https://nigeria-immigration-service.onrender.com/api/services/forget-password",
        {
          method: "POST", // Assuming POST for sending forget password request
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send the form data (e.g., { email: "user@example.com" })
        }
      );

      const resData = await response.json();
      console.log("API response:", resData);

      if (response.ok) {
        // If the API call is successful (status 2xx), show the modal
        setSubmittedEmail(data.email); // Store the email for display in the modal
        setShowVerificationModal(true); // Show the verification modal
        reset(); // Optionally clear the form fields after successful submission
      } else {
        // Handle API errors (e.g., 400, 404, 500)
        setFormError(
          resData.message || "Failed to process your request. Please try again."
        );
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error("Network or unexpected error:", error);
      setFormError(
        "An unexpected error occurred. Please check your connection and try again."
      );
    } finally {
      setLoading(false); // Always stop loading, regardless of success or failure
    }
  };

  // Function to handle re-sending the verification email from the modal
  const handleResendVerification = async () => {
    // Use the email that was previously submitted and stored in state
    const emailToResend = submittedEmail;
    if (!emailToResend) {
      console.error("No email available to re-send verification.");
      throw new Error("No email to re-send."); // Throw error to be caught by modal's onResend handler
    }

    console.log("Re-sending verification email to:", emailToResend);

    try {
      const response = await fetch(
        "http://localhost:3000/api/services/forget-password",
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
        console.error("Resend API error:", resData);
        throw new Error(
          resData.message || "Failed to re-send verification email."
        );
      }
      console.log("Resend successful:", resData);
      // The modal's internal state will handle success message for resend
    } catch (error) {
      console.error("Resend network error:", error);
      throw error; // Re-throw to be caught by the modal's error handling
    }
  };

  // Function to close the verification modal
  const handleCloseVerificationModal = () => {
    setShowVerificationModal(false);
    setSubmittedEmail(""); // Clear the email when modal closes
    setFormError(null); // Clear any form errors that might have been overshadowed by modal
    setFormSuccess(null); // Clear any form success messages
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <img
          src={logo}
          alt="Nigeria Immigration Service"
          className="h-10 sm:h-12 md:h-14"
        />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        {/* Form Card */}
        <div className="bg-white shadow-md rounded-md w-full max-w-md p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-600 mb-4 text-center">
            Forgot Password
          </h2>

          {/* Form Error/Success Messages (only display if modal is not open) */}
          {formError && !showVerificationModal && (
            <p className="text-red-600 bg-red-100 p-3 rounded-md text-center mb-4 text-sm">
              {formError}
            </p>
          )}
          {formSuccess && !showVerificationModal && (
            <p className="text-green-600 bg-green-100 p-3 rounded-md text-center mb-4 text-sm">
              {formSuccess}
            </p>
          )}

          {/* Forgot Password Form */}
          {/* Hide the form when the modal is open */}
          {!showVerificationModal && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-6">
                We'll send a verification code to this email if it matches an
                existing NIS account.
              </p>

              <div className="space-y-3">
                {/* Next Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Next"}
                </button>

                {/* Back Button */}
                <Link to="/">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="w-full border border-green-600 text-green-600 py-3 rounded-md hover:bg-green-50 transition duration-200 font-semibold"
                  >
                    Back
                  </button>
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

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
