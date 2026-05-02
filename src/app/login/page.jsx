"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm();


    const handleLoginFunc = (data) => {
        console.log("data", data)       
    }




    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="email" className="input" placeholder="Enter your email address"  {...register("email", {required: "Email field is required"})}/>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input className="input" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
                        
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn bg-mist-700 text-white w-full'>Login</button>
                </form>

                <p className='mt-4 text-sm text-center'>Don`&apos;`t Have An Account ? <Link href={'/register'} className='text-red-500 hover:text-red-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;