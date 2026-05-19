"use client";
import {Avatar, Button, Dropdown, Label} from "@heroui/react";
import React from 'react';
import NavLink from './NavLink';
import { FaCarSide } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import UserDropdown from "./UserDropdown";




const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession();

    // console.log(session);

    const user = session?.user;

    const router = useRouter();

    const handleDropdownAction = (key) => {
        if (key === "explore") router.push("/explore-cars");
        if (key === "add") router.push("/add-cars");
        if (key === "bookings") router.push("/my-bookings");
        if (key === "logout") authClient.signOut();
    };

    return (
        <div className='min-h-[10vh] shadow p-3 flex flex-col text-center space-y-5 md:flex-row justify-between items-center bg-[#fff7ed]'>

            <div className='font-bold text-3xl text-accent flex justify-center items-center gap-3'>
                DriveEasy
                <FaCarSide />
            </div>

            <ul className='flex flex-col text-center md:flex-row gap-5'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/explore-cars'}>Explore Cars</NavLink></li>
                <li><NavLink href={'/add-cars'}>Add Cars</NavLink></li>
                <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
            </ul>

            
            {user ?
                <UserDropdown user={user} />
                 :
                <div className="flex justify-center gap-3">
                    <Button variant="primary"><NavLink href={'/register'}>Register</NavLink></Button>
                    <Button variant='primary'><NavLink href={'/login'}>Login</NavLink></Button>
                </div>
            }

            
            
            
        </div>
    );
};

export default Navbar;