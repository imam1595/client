import CarCard from '@/components/CarCard';
import React from 'react';

const exploreCars = async () => {
    const res = await fetch('http://localhost:5000/car')
    const cars = await res.json();

    console.log(cars);
    return (
        <div className='mt-10 space-y-5 bg-[#fff7ed] p-5'>
            <div className='font-bold text-3xl mb-5'>Explore Our Available Cars</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cars.map((car) => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default exploreCars;