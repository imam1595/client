import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
        const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    console.log(session);

    const user = session?.user;

    console.log(user);

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);

    const bookings = await res.json();

    console.log(bookings);

    return (
        <div>
            <h1 className='font-bold text-3xl mt-10'>My Bookings</h1>

            <div className='border shadow-2xl mt-4 p-4'>
            {
                bookings?.length === 0 ? (
                    <p className='text-center text-gray-500'>
                        No bookings found.
                    </p>
                ) : (
                    bookings.map(booking => (
                        <MyBookingCard
                            key={booking._id}
                            booking={booking}
                        />
                    ))
                )
            }
        </div>
        </div>
    );
};

export default MyBookingPage;