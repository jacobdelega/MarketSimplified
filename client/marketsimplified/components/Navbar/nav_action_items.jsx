import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const nav_action_items = () => {
    return (
        <>
            {/* <p className='font-medium hover:text-neutral-400 text-slate-700'>
                <Link href='/contact'>Contact us</Link>
            </p> */}
            {/* <p className='font-medium hover:text-neutral-400 text-slate-700'>
                <Link href='/about'>About us</Link>
            </p> */}
            <p className='px-3 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-indigo-300'>
                <Link href='/login'>Login</Link>
            </p>
        </>
    );
};

export default nav_action_items;
