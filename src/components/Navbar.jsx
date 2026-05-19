"use client";
import {Button, Dropdown, Label} from "@heroui/react";
import React from 'react';
import NavLink from './NavLink';
import { FaCarSide } from "react-icons/fa6";



const Navbar = () => {
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

            <Button variant="primary"><NavLink href={'/register'}>Register</NavLink></Button>
            <Button variant='primary'><NavLink href={'/login'}>Login</NavLink></Button>
            

            
            <Dropdown>
                <Button aria-label="Menu" variant="secondary">
                    Actions
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                    <Dropdown.Item id="new-file" textValue="New file">
                        <Label><NavLink href={'/'}>Home</NavLink></Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Label><NavLink href={'/explore-cars'}>Explore Cars</NavLink></Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Label><NavLink href={'/add-cars'}>Add Cars</NavLink></Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                        <Label><NavLink href={'/my-bookings'}>My Bookings</NavLink></Label>
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
            
        </div>
    );
};

export default Navbar;