import React from 'react';
import { IoLogoWhatsapp, IoSunnyOutline } from 'react-icons/io5';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#e2c29a] text-black container mx-auto mt-10  p-10 text-center flex flex-col space-y-5'>

            <div>
                <div className='border-b p-4 md:flex md:justify-between'>

                    <div className='flex flex-col space-y-5'>
                        <div className='font-bold text-2xl text-accent flex justify-center items-center gap-3'>
                            DriveEasy
                            <FaCarSide />
                        </div>
                        <div>
                            <p>Drive Your Dream Car Today</p>
                            <p>Explore SUVs, luxury cars, sedans, and affordable rentals.</p>
                        </div>
                        <div className='flex justify-center gap-3 mb-4'>
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaTwitterSquare />
                            <IoLogoWhatsapp />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h1 className='font-bold text-xl md:text-2xl'>Quick Links</h1>
                        <h5>Home</h5>
                        <h5>Product</h5>
                        <h5>My Profile</h5>
                    </div>

                    <div className='mb-4'>
                        <h1 className='font-bold text-xl md:text-2xl'>Contact</h1>
                        <h5>Hot Line: 12666</h5>
                        <h5>Phone: 011188514500</h5>
                        <h5>Tel: +999987654221</h5>
                        <h5>suncart@umail.com</h5>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl md:text-2xl'>Privacy Policy</h1>
                        <h5>Legal</h5>
                        <h5>Terms and Conditions</h5>
                        <h5>Returns Policy</h5>
                    </div>
                </div>

                <div className='mt-3 md:flex justify-between'>
                    <h1>© 2026 DriveEasy. All rights reserved.</h1>
                    <h1>Made with ☀ for adventure lovers.</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;