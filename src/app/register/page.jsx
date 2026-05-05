"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';


const RegisterPage = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const handleRegisterFunc = async (data) => {
        console.log("data", data)
        const { email, name, photo, password } = data;
        console.log(email, name, photo, password);

        const { data: regData, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            // callbackURL: "/",
        })

        console.log({ regData, error })

        if (error) {
            toast.error(error.message);
        }
        else {
            router.push("/login")
        }

    }


    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }
  

    return (

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex justify-center items-center my-10'>
            <div className='p-10 rounded-xl bg-white border'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Name</legend>
                        <input type="text" className="input" placeholder="Enter your name"  {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="email" className="input" placeholder="Enter your email address"  {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your photo url"  {...register("photo", { required: "Photo URL field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input type='password' className="input" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn bg-mist-700 text-white w-full'>Register </button>
                </form>

                <p className='text-center my-2'>Or</p>
                <Button variant='outline' className="w-full" onClick={handleGoogleSignUp}><GrGoogle></GrGoogle> Register with Google</Button>

                <p className='mt-4 text-sm text-center'>Already registered ? <Link href={'/login'} className='text-blue-500 hover:text-blue-700'>Login</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage;



