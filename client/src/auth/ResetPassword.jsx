
import React from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';

const ResetPassword = () => {
  return (
    <div className='bg-white w-full h-screen text-black'>
      <div className='w-[35%] mx-auto pt-[20%] '>
      <div className='px-[40px] shadow-2xl'>
       <div>
         <h1>Choose a new password </h1>
        <p>To secure your account, choose a strong password 
you haven’t used before and is at least 8 characters 
long.</p>
       </div>
       <form className='flex flex-col gap-[24px]'>
          <input
                                   id="email"
                                   className="border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-3"
                                   type="email"
                                   placeholder="New password"
                               />

                                <input
                                   id="email"
                                   className="border-[#7E7E7E] border-[2px] w-full text-[#7E7E7E] p-2 outline-none rounded-[5px] px-3 py-3"
                                   type="email"
                                   placeholder="Confirm Password"
                               />
       </form>
      </div>
    </div>
    </div>
  )
}

export default ResetPassword


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
//     // alert(`If an account exists for ${data.password}, a reset link has been sent.`);
//   //   reset();
//   //   onClose();
//   //   setLoading(true);
//   //   console.log(data)

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
//       <div className='bg-white p-10 w-[55%] mx-auto  shadow-lg '>
//         <form onSubmit={handleSubmit(onSubmit())} className='flex flex-col gap-[42px]'>
//         {formError && <p className="text-red-500 font-bold">{formError}</p>}
//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//           <input
//              type={showPassword ? "text" : "password"}
//             placeholder="New Password"
//             className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px]  text-[#1A1A1A66] ${errors.new_password1 ? "border-red-500" : "border-[#9DC1FB]"}`}
//             {...register('new_password1', {
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
//                     {errors.new_password1 && <p className="text-red-500 text-sm mb-2">{errors.new_password1.message}</p>}
//        </div>

//        <div className=' relative flex flex-col justify-left gap-[20px]'>
//         <label htmlFor="password" className='text-left text-[#000000] font-medium text-[16px]'>Confirm Password</label>
//         <input
//          type={showConfirmPassword ? "text" : "password"}
//          placeholder='Confirm Password' 
//                        className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px]  text-[#1A1A1A66] ${errors.new_password2? "border-red-500" : "border-[#9DC1FB]"}`}
//                        {...register("new_password2", {
//                          required: "Please confirm your password",
//                          validate: (value) =>
//                            value === watch("new_password1") || "Passwords do not match",
//                        })}
//                     />
//                      <button
//               type="button"
//               className="absolute right-4 top-1/2 -translate-y rounded-full"
//               onClick={handleToggleConfirmPassword}
//             >
//               {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//             </button>

//             {errors.new_password2 && (
//             <p className="text-red-500 text-left">{errors.new_password2.message}</p>
//           )}
//        </div>
      
//          <div className='mt-[320px] flex  justify-end'>
//          <button type="submit"
//          disabled={loading}
//          className="bg-[#2A3048] font-bold text-white px-[39px] py-[14px] rounded-md ">
//          {loading ? "Continuing..." : "Continue"}
//           </button>
//          </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ResetPassword