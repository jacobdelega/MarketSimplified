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
            <p className='hover:text-neutral-400 text-slate-700 font-medium'>
                <Link href='/contact'>Contact us</Link>
            </p>
            <p className='hover:text-neutral-400 text-slate-700 font-medium'>
                <Link href='/about'>About us</Link>
            </p>
            <p className='bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-indigo-300 font-medium'>
                <Link href='/login'>Login</Link>
            </p>
        </>
    );
};

export default nav_action_items;
