import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { TbCoinTaka } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const ChooseUsSection = () => {
    return (
        <section className="px-6 py-20 mt-10 bg-[#fff7ed]">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Why choose DriveEasy?</h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Explore premium car brands available for your next ride.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-5">
                    <AiOutlineSafety className='text-2xl' />
                    <h2 className="text-2xl font-semibold">Verified owners</h2>
                    <p className="text-gray-500 mt-3">Every car owner is verified before listing their vehicle.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-5">
                    <IoMdTime className='text-2xl' />
                    <h2 className="text-2xl font-semibold">24/7 support</h2>
                    <p className="text-gray-500 mt-3">Our team is always on standby to help you on the road.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-5">
                    <TbCoinTaka className='text-2xl' />
                    <h2 className="text-2xl font-semibold">No hidden fees</h2>
                    <p className="text-gray-500 mt-3">Transparent pricing shown upfront, no surprises.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-5">
                    <CiLocationOn className='text-2xl' />
                    <h2 className="text-2xl font-semibold">50+ locations</h2>
                    <p className="text-gray-500 mt-3">Pick up and drop off at convenient spots citywide.</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUsSection;