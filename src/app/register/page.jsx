
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    return (
        // <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
        //     <div className='p-10 rounded-xl bg-white'>
        //         <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>

        //         <form className='space-y-4'>
        //             <fieldset className="fieldset">
        //                 <legend className="fieldset-legend text-lg">Email address</legend>
        //                 <input type="text" className="input" placeholder="Enter your email address" name='email' {...register("email", { required: "Email field is required" })} />
        //                 {errors.email && <p className='text-red-500'>{errors.email.message}</p>}


        //             </fieldset>
        //             <fieldset className="fieldset">
        //                 <legend className="fieldset-legend text-lg">Name</legend>
        //                 <input type="text" className="input" placeholder="Enter your name" name='name' {...register("name", { required: "Name field is required" })} />
        //                 {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        //             </fieldset>


        //             <fieldset className="fieldset">
        //                 <legend className="fieldset-legend text-lg">Photo URL address</legend>
        //                 <input type="text" className="input" placeholder="Enter your photo url" name='email' {...register("photo", { required: "Photo URL field is required" })} />
        //                 {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
        //             </fieldset>


        //             <fieldset className="fieldset relative">
        //                 <legend className="fieldset-legend text-lg">Password</legend>
        //                 <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Enter your password" name='password'
        //                     {...register("password", { required: "Password field is required" })}
        //                 />
        //                 <span className='absolute right-10 top-5 cursor-pointer' onClick={() => SetIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
        //                 {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        //                 {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        //             </fieldset>

        //             <button className='btn bg-mist-700 text-white w-full'>Register</button>
        //         </form>
        //     </div>
        // </div>

        RegisterPage
    );
};

export default RegisterPage;