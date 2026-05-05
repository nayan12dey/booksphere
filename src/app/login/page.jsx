"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const handleLoginFunc = async(data) => {
        console.log("data", data)


        const { data: logdata, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({logdata, error})

        if(error){
            toast.error(error.message);
        }
    }


    const handleGoogleSignIn = async() => {
        await authClient.signIn.social({
            provider: "google"
        })
    }




    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex justify-center items-center'>
            <div className='p-10 rounded-xl bg-white border'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="email" className="input" placeholder="Enter your email address"  {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input type='password' className="input" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn bg-mist-700 text-white w-full'>Login</button>
                </form>

                <p className='text-center my-2'>Or</p>
                <Button variant='outline' className="w-full" onClick={handleGoogleSignIn}><GrGoogle></GrGoogle> Login with Google</Button>

                <p className='mt-4 text-sm text-center'>Don<span>&apos;t</span> An Account ? <Link href={'/register'} className='text-red-500 hover:text-red-600'>Register</Link></p>

            </div>
        </div>
    );
};

export default LoginPage;