'use client'
import React from "react";
import Link from 'next/link'
import { useState } from "react";

const Register = () => {

    // Defining the state variables that we gather from the form on the CLIENT side
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Define error message
    const [error, setError] = useState("");

    // Function to handle the form submission
    const handleFormSubmit = async (e) => {
        // Prevent refresh
        e.preventDefault();

        // Check that all fields are filled
        if (!name || !email || !password) {
            setError("All the fields are necessary");
            return;
        }

        // Send the data to the server

        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        // on success redirect to login page
        // check the status code returned
        if (response.status === 202) {
            

            
        } else {
            setError("Error registering user");
        }
    };

    return (
        <div className='grid h-screen place-items-center'>
            <div className='p-5 border-t-4 border-blue-400 rounded-lg shadow-lg'>
                <h1 className='my-4 text-xl font-bold'>Get Registered</h1>

                <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
                    <input onChange={(e) => setName(e.target.value)} type='text' placeholder='name' />
                    <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email' />
                    <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='password' />
                    <button className='px-6 py-2 font-bold text-white bg-blue-600 cursor-pointer'>Register</button>

                    {error && <div className='px-3 py-1 mt-2 text-sm text-white bg-red-500 rounded-md w-fit'>{error}</div>}

                    <Link href="/login" className='mt-3 text-sm text-right'>
                        {" "}
                        Have an account? <span className='underline'>Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
