
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';

// const ResetPassword = ({ isOpen, onClose }) => {
//     const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//     const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formError, setFormError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
  
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setFormError(null);
//     setSuccessMessage('');

//     try {
//       // Get reset token from URL params
//       const urlParams = new URLSearchParams(window.location.search);
//       const resetToken = urlParams.get('token') || window.location.pathname.split('/').pop();
      
//       if (!resetToken) {
//         setFormError('Invalid reset token. Please request a new password reset.');
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(`http://localhost:3000/api/auth/reset-password/${resetToken}`, { 
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           newPassword: data.new_password,
//         }),
//       });
      
//       const resData = await response.json();
//       console.log(resData);
  
//       if (response.ok) {
//         setSuccessMessage('Password reset successful!');
//         reset();
//         setTimeout(() => {
//           onClose();
//           // Redirect to login page
//           window.location.href = '/login';
//         }, 2000);
//       } else {
//         setFormError(resData.message || 'Something went wrong');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setFormError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//    if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#516B86]">
//       <div className='w-[35%] mx-auto pt-[20%] shadow-2xl '>
//          <div className='flex flex-col gap-[8px]'>
//          <h1 className='text-[28px] py- font-semibold'>Choose a new password </h1>
//         <p className='text-[19px] font-light'>To secure your account, choose a strong password 
// you haven't used before and is at least 8 characters 
// long.</p>
//        </div>
//         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[42px]'>
//         {formError && <p className="text-red-500 font-bold">{formError}</p>}
//         {successMessage && <p className="text-green-500 font-bold">{successMessage}</p>}
        
//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//           <input
//              type={showPassword ? "text" : "password"}
//             placeholder="New Password"
//             className={`border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[20px] focus:outline-none ${errors.new_password ? "border-red-500" : "border-[#9DC1FB]"}`}
//             {...register('new_password', {
//               required: 'Password is required',
//               minLength: {value: 8, message: "Password must be at least 8 characters long" },
//               pattern: {  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                 message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                },
//             })}
//           />
//           <button
//                       type="button" // Prevent form submission
//                       className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
//                       onClick={handleTogglePassword}
//                     >
//                       {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//                     </button>
//                     {errors.new_password && <p className="text-red-500 text-sm mb-2">{errors.new_password.message}</p>}
//        </div>

//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//         <input
//          type={showConfirmPassword ? "text" : "password"}
//          placeholder='Confirm Password' 
//                        className={`border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[20px] focus:outline-none ${errors.confirm_password? "border-red-500" : "border-[#9DC1FB]"}`}
//                        {...register("confirm_password", {
//                          required: "Please confirm your password",
//                          validate: (value) =>
//                            value === watch("new_password") || "Passwords do not match",
//                        })}
//                     />
//                      <button
//               type="button"
//               className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
//               onClick={handleToggleConfirmPassword}
//             >
//               {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//             </button>

//             {errors.confirm_password && (
//             <p className="text-red-500 text-left">{errors.confirm_password.message}</p>
//           )}
//        </div>
      
//          <div className='mt-[320px] flex justify-end'>
//          <button type="submit"
//          disabled={loading}
//          className="bg-[#00AA55] font-bold text-white text-[18px] py-[18px] px-6 rounded-md cursor-pointer hover:bg-[#3D9970] transition duration-200 disabled:opacity-50">
//          {loading ? "Submitting..." : "Submit"}
//           </button>
//          </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ResetPassword


// import React from 'react'
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';

// const ResetPassword = () => {
//   return (
//     <div className='bg-white w-full h-screen text-black'>
//       <div className='lg:w-[55%] xl:w-[38%] mx-auto pt-50 px-8 md:px-18 lg:px-2'>
//       <div className='px-[40px] py-[30px] flex flex-col gap-[30px] shadow-2xl'>
//        <div className='flex flex-col gap-[8px]'>
//          <h1 className='text-[28px] py- font-semibold'>Choose a new password </h1>
//         <p className='text-[19px] font-light'>To secure your account, choose a strong password 
// you haven’t used before and is at least 8 characters 
// long.</p>
//        </div>
//        <form className='flex flex-col gap-[24px]'>
//           <input
//                                    id="password"
//                                    className="border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] text-light text-[17px] p-2 outline-none rounded-[5px] px-3 py-[20px]"
//                                    type="email"
//                                    placeholder="New password"
//                                />

//                                 <input
//                                    id="Confirm Password"
//                                    className="border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[20px]"
//                                    type="email"
//                                    placeholder="Confirm Password"
//                                />
//                                 <label className='flex flex-row gap-2 text-center text-[#00AA55] font-light text-[18px]' htmlFor="remember">
//                       <input type="checkbox" id="remember"  />
//                       Require all devices to sign in with new password
//                     </label>
//                                <button type="submit"
//                               //  disabled={loading}
//                                className="bg-[#00AA55] font-semibold text-white text-[20px] py-[18px] rounded-md cursor-pointer hover:bg-[#3D9970] transition duration-200 ">
//                                 {/* {loading ? "submitimng..." : "submit"} */}
//                                 submit
//           </button>
//        </form>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ResetPassword

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { useParams, useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const { resetToken } = useParams();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formError, setFormError] = useState(null);
//   const [formSuccess, setFormSuccess] = useState(null);

//   useEffect(() => {
//     if (!resetToken) {
//       setFormError(
//         "Invalid or missing reset token in the URL. Please check your link."
//       );
//     }
//   }, [resetToken]);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const onSubmit = async (data) => {
//     if (!resetToken) {
//       setFormError("Cannot reset password: Missing reset token.");
//       return;
//     }

//     setLoading(true);
//     setFormError(null);
//     setFormSuccess(null);
//     console.log("Form data submitted:", data);
//     console.log("Using resetToken:", resetToken);

//     try {
//       const apiUrl = `http://localhost:3000/api/services/reset-password/${resetToken}`;

//       const response = await fetch(apiUrl, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           password: data.new_password,
//           confirm_password: data.confirm_password,
//         }),
//       });

//       const resData = await response.json();
//       console.log("API response:", resData);

//       if (response.ok) {
//         setFormSuccess(
//           "Password has been reset successfully! Redirecting to login..."
//         );
//         reset();

//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       } else {
//         setFormError(
//           resData.message || "Failed to reset password. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Network or unexpected error:", error);
//       setFormError("An unexpected error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-10 md:py-20">
//       <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
//         <div className="flex flex-col gap-4 mb-6 text-center">
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Choose a new password
//           </h1>
//           <p className="text-base md:text-lg font-light text-gray-600">
//             To secure your account, choose a strong password you haven’t used
//             before and is at least 8 characters long.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//           {formError && (
//             <p className="text-red-600 bg-red-100 p-3 rounded-md text-center font-medium">
//               {formError}
//             </p>
//           )}
//           {formSuccess && (
//             <p className="text-green-600 bg-green-100 p-3 rounded-md text-center font-medium">
//               {formSuccess}
//             </p>
//           )}

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="New Password"
//               className={`border-2 w-full text-gray-700 p-3 outline-none rounded-md pr-10 focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//                 errors.new_password ? "border-red-500" : "border-gray-300"
//               }`}
//               {...register("new_password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 8,
//                   message: "Password must be at least 8 characters long",
//                 },
//                 pattern: {
//                   value:
//                     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                   message:
//                     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
//                 },
//               })}
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               onClick={handleTogglePassword}
//             >
//               {showPassword ? (
//                 <MdOutlineRemoveRedEye className="w-5 h-5" />
//               ) : (
//                 <FaRegEyeSlash className="w-5 h-5" />
//               )}
//             </button>
//             {errors.new_password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.new_password.message}
//               </p>
//             )}
//           </div>

//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               className={`border-2 w-full text-gray-700 p-3 outline-none rounded-md pr-10 focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//                 errors.confirm_password ? "border-red-500" : "border-gray-300"
//               }`}
//               {...register("confirm_password", {
//                 required: "Please confirm your password",
//                 validate: (value) =>
//                   value === watch("new_password") || "Passwords do not match",
//               })}
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               onClick={handleToggleConfirmPassword}
//             >
//               {showConfirmPassword ? (
//                 <MdOutlineRemoveRedEye className="w-5 h-5" />
//               ) : (
//                 <FaRegEyeSlash className="w-5 h-5" />
//               )}
//             </button>

//             {errors.confirm_password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.confirm_password.message}
//               </p>
//             )}
//           </div>

//           <label
//             className="flex items-center gap-2 text-gray-700 text-sm md:text-base cursor-pointer"
//             htmlFor="remember"
//           >
//             <input
//               type="checkbox"
//               id="remember"
//               className="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
//             />
//             Require all devices to sign in with new password
//           </label>

//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#00AA55] font-bold text-white text-lg py-3 px-6 rounded-md cursor-pointer hover:bg-[#008A3F] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default ResetPassword;

// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';

// const ResetPassword = ({ isOpen, onClose }) => {
//     const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//     const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formError, setFormError] = useState(null);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//   const onSubmit = async (data) => {
//     alert(`If an account exists for ${data.password}, a reset link has been sent.`);
//     reset();
//     onClose();
//     setLoading(true);
//     console.log(data)


//     try {
      
//       const response = await fetch('http://localhost:3000/api/services/reset-password/:resetToken', { 
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
      
//       const resData = await response.json();
//   console.log(resData);
  
//       if (resData.detail === "submitted") {
//         reset();
//         // You can change to the page you want to redirect to after signup
//         router.PUT("reset-password/:resetToken");
//         setFormError("");
//       }else {
//         setFormError("Something went wrong");
//       }
//     } catch (error) {
//       const apiError = await error.json();
//       console.log(apiError);
//     } finally {
//       setLoading(false);
//     }

//   //   try {

//   //     const response = await fetch('', {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     const resData = await response.json();
//   // console.log(resData);

//   //     if (resData.detail === "submitted") {
//   //       reset();
//   //       // You can change to the page you want to redirect to after signup
//   //       router.PUT("reset-password/:resetToken");
//   //       setFormError("");
//   //     }else {
//   //       setFormError("Something went wrong");
//   //     }
//   //   } catch (error) {
//   //     const apiError = await error.json();
//   //     console.log(apiError);
//   //   } finally {
//   //     setLoading(false);
//   //   }

//   };

//    if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#516B86]">
//       <div className='w-[35%] mx-auto pt-[20%] shadow-2xl '>
//          <div className='flex flex-col gap-[8px]'>
//          <h1 className='text-[28px] py- font-semibold'>Choose a new password </h1>
//         <p className='text-[19px] font-light'>To secure your account, choose a strong password 
// you haven’t used before and is at least 8 characters 
// long.</p>
//        </div>
//         <form onSubmit={handleSubmit(onSubmit())} className='flex flex-col gap-[42px]'>
//         {formError && <p className="text-red-500 font-bold">{formError}</p>}
//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//           <input
//              type={showPassword ? "text" : "password"}
//             placeholder="New Password"
//             className={`border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[20px] focus:outline-none ${errors.new_password ? "border-red-500" : "border-[#9DC1FB]"}`}
//             {...register('new_password', {
//               required: 'Password is required',
//               minLength: {value: 8, message: "Password must be at least 8 characters long" },
//               pattern: {  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                 message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                },
//             })}
//           />
//           <button
//                       type="button" // Prevent form submission
//                       className="absolute right-4 top-1/2 -translate-y- rounded-full"
//                       onClick={handleTogglePassword}
//                     >
//                       {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//                     </button>
//                     {errors.new_password && <p className="text-red-500 text-sm mb-2">{errors.new_password.message}</p>}
//        </div>

//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//         {/* <label htmlFor="password" className='text-left text-[#000000] font-medium text-[16px]'>Confirm Password</label> */}
//         <input
//          type={showConfirmPassword ? "text" : "password"}

//          placeholder='Confirm Password' 
//                        className={`border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-[20px] focus:outline-none ${errors.confirm_password? "border-red-500" : "border-[#9DC1FB]"}`}
//                        {...register("confirm_password", {

//          placeholder='Confirm Password'
//                        className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px]  text-[#1A1A1A66] ${errors.new_password2? "border-red-500" : "border-[#9DC1FB]"}`}
//                        {...register("new_password2", {

//                          required: "Please confirm your password",
//                          validate: (value) =>
//                            value === watch("new_password") || "Passwords do not match",
//                        })}
//                     />
//                      <button
//               type="button"
//               className="absolute right-4 top-1/2 -translate-y rounded-full"
//               onClick={handleToggleConfirmPassword}
//             >
//               {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//             </button>

//             {errors.confirm_password && (
//             <p className="text-red-500 text-left">{errors.confirm_password.message}</p>
//           )}
//        </div>


//          <label className='flex flex-row gap-2 text-center text-[#00AA55] font-light text-[18px]' htmlFor="remember">
//                       <input type="checkbox" id="remember"  />
//                       Require all devices to sign in with new password
//                     </label>

//          <div className='mt-[320px] flex  justify-end'>
//          <button type="submit"
//          disabled={loading}
//          className="bg-[#00AA55] font-bold text-white text-[18px] py-[18px] rounded-md cursor-pointer hover:bg-[#3D9970] transition duration-200">
//          {loading ? "submitimng..." : "submit"}
//           </button>
//          </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ResetPassword


import React from "react";
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
      const apiUrl = `http://localhost:3000/api/services/reset-password/${resetToken}`;

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

