"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    // Defining the state variables that we gather from the form on the CLIENT side
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const router = useRouter();
    const { register, handleSubmit } = useForm();

    // Function to handle the form submission
    const onSubmit = async (data) => {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };

            const response = await fetch(['/api/login'], requestOptions)
            const jsonData = await response.json();

        } catch (err) {
            setError("Error logging in");
        }
    };

    return (
        <div className='grid h-screen place-items-center'>
            <div className='p-10 border-t-4 border-blue-400 rounded-lg shadow-lg'>
                <h1 className='my-4 text-xl font-bold'>Enter the details</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-3'>
                    <input
                        {...register("email")}
                        required
                        placeholder='foo@gmail.com'
                    />
                    <input {...register("password")} required placeholder='foo'/>
                    <button
                        type='submit'
                        className='px-6 py-2 font-bold text-white bg-blue-600 cursor-pointer'>
                        Login
                    </button>

                    {error && <div className='px-3 py-1 mt-2 text-sm text-white bg-red-500 rounded-md w-fit'>{error}</div>}
                    {success && <div className='px-3 py-1 mt-2 text-sm text-white bg-green-500 rounded-md w-fit'>{success}</div>}

                    <Link
                        href='/register'
                        className='mt-3 text-sm text-right'>
                        {" "}
                        Dont have an account? <span className='underline'>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
