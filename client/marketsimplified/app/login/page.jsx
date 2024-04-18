'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleFormSubmit = async (e) => {
        // Prevent refresh
        e.preventDefault();

        // Check that all fields are filled
        if (!email || !password) {
            setError("All the fields are necessary");
            return;
        }

        // Send the data to the server
        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            
            if (!data) {
                setError("User not found");
                return;
            }

            // Check for success if so store in local storage
            if (data.hasOwnProperty("token")) {
                setSuccess("Login Successful");
                setError("");
                localStorage.setItem("token", data.token);
                window.location.href = "/";
            }
            else {
                setError("Error logging in");
            }

        } catch (err) {
            setError("Error logging in");
        }
    };

    return (
        <div className='grid h-screen place-items-center'>
            <div className='p-10 border-t-4 border-blue-400 rounded-lg shadow-lg'>
                <h1 className='my-4 text-xl font-bold'>Enter the details</h1>

                <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
                    <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='px-6 py-2 font-bold text-white bg-blue-600 cursor-pointer' >Login</button>

                    {error && <div className='px-3 py-1 mt-2 text-sm text-white bg-red-500 rounded-md w-fit'>{error}</div>}
                    {success && <div className='px-3 py-1 mt-2 text-sm text-white bg-green-500 rounded-md w-fit'>{success}</div>}

                    <Link href="/register" className='mt-3 text-sm text-right'>
                        {" "}
                        Dont have an account? <span className='underline'>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
