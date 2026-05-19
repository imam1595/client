import React from 'react';
import CarCard from './CarCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const AvailableCars = async () => {
    const res = await fetch('http://localhost:5000/car')
    const cars = await res.json();


    return (
        <div className='mt-10 space-y-5 bg-[#fff7ed] p-5'>
            
            <div className='flex justify-between items-center'>
                <div className='font-bold text-3xl'>Explore our Cars</div>
                <Button variant='primary'><Link href={'/explore-cars'}>See More</Link></Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cars.slice(0,6).map((car) => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCars;