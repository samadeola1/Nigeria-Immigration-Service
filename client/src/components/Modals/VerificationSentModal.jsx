import React, { useState } from "react";
import logo from "../../assets/image 234.png";

const VerificationSentModal = ({ isOpen, onClose, email, onResend }) => {
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState(null);

  if (!isOpen) return null;

  const handleResendClick = async () => {
    setResending(true);
    setResendMessage(null);
    try {
      await onResend();
      setResendMessage("Verification email re-sent successfully!");
      setTimeout(() => setResendMessage(null), 5000);
    } catch (error) {
      setResendMessage(
        "Failed to re-send verification email. Please try again."
      );
      setTimeout(() => setResendMessage(null), 5000);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-75 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-sm md:max-w-md text-center relative">
        <img
          src={logo}
          alt="Nigeria Immigration Service"
          className="h-12 sm:h-14 mx-auto mb-8"
        />

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Check your email
        </h2>

        <p className="text-base text-gray-600">We just sent an email to</p>
        <p className="text-base font-bold text-gray-900 break-all mb-4">
          {email}
        </p>
        <p className="text-base text-gray-600 mb-8">
          Please check your email to verify your account.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Didn’t receive verification link?{" "}
          <button
            type="button"
            onClick={handleResendClick}
            disabled={resending}
            className="text-green-600 font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {resending ? "Sending..." : "Resend verification email"}
          </button>
        </p>

        {resendMessage && (
          <p
            className={`text-sm mt-2 ${
              resendMessage.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {resendMessage}
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-8 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VerificationSentModal;
