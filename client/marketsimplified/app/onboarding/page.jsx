"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const onBoarding = () => {
    const handleSubmit = () => {
        console.log("form submitted");
    };

    // Grab searchParams from the URL
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const accountProvider = searchParams.get("account");

    // Data to be grabbed from the form
    // need userType
    // if company, need companyName, companyDescription
    // if influencer, need bio, niche

    return (
        <div className='container flex flex-col items-center'>
            <h1 className='text-xl font-bold items-center text-center'>Type of user account?</h1>
            <div className='flex justify-center gap-2 mt-8'>
                <div className='relative'>
                    <h2 className='text-center text-lg font-medium'>Influencer</h2>
                    <div className='p-3 border-2 border-gray-600/25 max-w-[250px]'>
                        <p>Looking to promote products for $$$</p>
                    </div>
                    <input
                        type='radio'
                        className='absolute left-[65px] mt-2 w-fit'></input>
                </div>
                <div className='relative'>
                    <h2 className='text-center text-lg font-medium'>Company</h2>
                    <div className='p-3 border-2 border-gray-600/25 max-w-[250px]'>
                        <p>Looking to scale and promote your business</p>
                    </div>
                    <input
                        type='radio'
                        className='absolute left-[65px] mt-2 w-fit'></input>
                </div>
            </div>
            <button className='mt-20 p-2 bg-blue-500 text-white w-fit rounded-lg'>Next</button>
        </div>
    );
};

export default onBoarding;
