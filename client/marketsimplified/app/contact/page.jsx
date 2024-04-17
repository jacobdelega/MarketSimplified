"use client";

import React, { useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"


export default function Home() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline'>Contact Us</Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Lets stay in touch!</DialogTitle>
                        <DialogDescription>If you are intrested in further contact please enter details.</DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                        <div className='grid items-center grid-cols-4 gap-4'>
                            <Label htmlFor='name' className='text-right'>
                                Name
                            </Label>
                            <Input id='name' defaultValue='Jacob Delega' className='col-span-3' />
                        </div>
                        <div className='grid items-center grid-cols-4 gap-4'>
                            <Label htmlFor='username' className='text-right'>
                                Email
                            </Label>
                            <Input id='username' defaultValue='jacobdelega@gmail.com' className='col-span-3' />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type='submit'
                                onClick={() =>
                                    toast("Information has been saved!", {
                                        description: "Sunday, December 03, 2023 at 9:00 AM",
                                        action: {
                                            label: "Undo",
                                            onClick: () => console.log("Undo"),
                                        },
                                    })
                                }>
                                Save changes
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
