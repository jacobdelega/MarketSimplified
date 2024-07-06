"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const Register = () => {
    // Define error message
    const [error, setError] = useState("");

    // react hook
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // Request details
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            console.log('prepping to send POST')
            const req = await fetch(["/api/register"], requestOptions);
            const response = await req.json();
            console.log('Successful POST')
        } catch (error) {}
    };

    return (
        <div className='grid h-screen place-items-center'>
            <div className='p-5 border-t-4 border-blue-400 rounded-lg shadow-lg'>
                <h1 className='my-4 text-xl font-bold'>Get Registered</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-3'>
                    <input
                        type='text'
                        placeholder='username'
                        {...register("name")}
                    />
                    <input
                        type='text'
                        placeholder='foo@gmail.com'
                        {...register("email")}
                    />
                    <input
                        type='text'
                        placeholder='password'
                        {...register("password")}
                    />
                    <button
                        type='submit'
                        className='px-6 py-2 font-bold text-white bg-blue-600 cursor-pointer'>
                        Register
                    </button>

                    {error && <div className='px-3 py-1 mt-2 text-sm text-white bg-red-500 rounded-md w-fit'>{error}</div>}

                    <Link
                        href='/login'
                        className='mt-3 text-sm text-right'>
                        {" "}
                        Have an account? <span className='underline'>Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
