import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MyBookingCard = ({booking}) => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between items-center space-y-5 mt-10 border shadow-2xl p-10'>
            <div className='space-y-3 '>
                <div className='font-bold text-2xl border-2 p-2'>
                    <h2>Car Name: {booking.carName}</h2>
                    <h2>Location: {booking.location}</h2>
                    <h2>Booking Date: {booking.bookingDate}</h2>
                </div>
                <div className='font-semibold text-xl border-2 p-2'>
                    <h2>Need Driver: {booking.driverNeeded}</h2>
                    <h2>Notes: {booking.specialNote}</h2>
                </div>
            </div>

            <div className='font-bold text-3xl text-accent'>
                <h2>Price: $ {booking.price}</h2>
            </div>
        </div>
    );
};

export default MyBookingCard;