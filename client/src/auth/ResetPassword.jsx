import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  useEffect(() => {
    if (!resetToken) {
      setFormError(
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
      setFormError("Cannot reset password: Missing reset token.");
      return;
    }

    setLoading(true);
    setFormError(null);
    setFormSuccess(null);
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
        setFormSuccess(
          "Password has been reset successfully! Redirecting to login..."
        );
        reset();

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setFormError(
          resData.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      setFormError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-10 md:py-20">
      <div className="bg-white rounded-lg shadow-2xl px-[40px] py-[30px] w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4 mb-6  text-black">
          <h1 className="text-[20px] md:text-[28px] pt-8 font-semibold">
            Choose a new password
          </h1>
          <p className="text-[14px] md:text-[19px] font-light">
            To secure your account, choose a strong password you haven’t used
            before and is at least 8 characters long.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px]">
          {formError && (
            <p className="text-red-600 bg-red-100 p-3 rounded-md text-center text-[14px] md:text-[18px] font-light md:font-medium">
              {formError}
            </p>
          )}
          {formSuccess && (
            <p className="text-green-600 bg-green-100 p-3 rounded-md text-center font-medium">
              {formSuccess}
            </p>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className={`border-[#7E7E7E] border-[2px] text-[15px] md:text-[18px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[10px] md:py-[20px] transition-all duration-200 ${
                errors.new_password ? "border-red-500" : "border-gray-300"
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
                <MdOutlineRemoveRedEye className="w-5 h-5" />
              ) : (
                <FaRegEyeSlash className="w-5 h-5" />
              )}
            </button>
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={`border-[#7E7E7E] border-[2px] text-[15px] md:text-[18px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3  py-[10px] md:py-[20px] transition-all duration-200${
                errors.confirm_password ? "border-red-500" : "border-gray-300"
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
                <MdOutlineRemoveRedEye className="w-5 h-5" />
              ) : (
                <FaRegEyeSlash className="w-5 h-5" />
              )}
            </button>

            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

           <label className='flex flex-row gap-2 text-left md:text-center text-[#00AA55] font-light text-[15px] md:text-[18px]' htmlFor="remember">
                      <input type="checkbox" id="remember"  />
                      Require all devices to sign in with new password
                    </label>

         
            <button
              type="submit"
              disabled={loading}
              className="bg-[#00AA55] font-semibold text-white text-[15px] md:text-[20px] py-[10px] md:py-[18px] rounded-md  hover:bg-[#3D9970] transition duration-200  disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
      
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

