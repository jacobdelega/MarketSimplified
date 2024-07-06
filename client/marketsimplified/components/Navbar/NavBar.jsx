"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Action_items from "./nav_action_items";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className='flex z-10 w-full justify-between items-center px-8 py-8 lg:px-32 lg:py-8 '>
            <Logo />
            <div className='hover:cursor-pointer flex sm:space-x-4 space-x-2 items-center text-sm sm:text-base'>
              <Sheet>
                <SheetTrigger className="md:hidden">
                    <AlignJustify></AlignJustify> 
                </SheetTrigger>

                <SheetContent className='bg-[#031a24]'>
                    <SheetHeader className="text-slate-900">
                      <h1 className='font-bold text-white border-b mt-4'>Simplified Solutions</h1>
                        <SheetDescription>
                            <div className='flex flex-col space-y-4 items-start w-full text-lg text-white mt-5'>
                              <p className='hover:text-neutral-400'>
                                <Link href='/'>Home</Link>
                              </p>
                                <Action_items />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
              </Sheet>
              <div className='hidden md:flex space-x-4 items-center'>
                <Action_items />
              </div>
            </div>
        </div>
    );
};

export default NavBar;
