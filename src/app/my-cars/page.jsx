import MyAddedCarCard from '@/components/MyAddedCarCard';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const page = async () => {

    const res = await fetch('http://localhost:5000/myAddedCars')
    const myAddedCars = await res.json();

    console.log(myAddedCars);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl mt-10'>My Added Cars</h1>
                <Link href={'/add-cars'}><Button variant='primary'>Add Cars</Button></Link>
            </div>

            <div>
                {
                myAddedCars.length === 0 ? (
                    <div className='border shadow-2xl mt-10 p-10 rounded-xl text-center'>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            No cars added yet 
                        </h2>

                        <p className='text-gray-500 mt-2'>
                            Add your first car to see it here.
                        </p>

                        <Link href="/add-cars">
                            <Button className='mt-5' variant='primary'>
                                Add Car
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className='border shadow-2xl mt-10 p-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            myAddedCars.map(myAddedCar => (
                                <MyAddedCarCard
                                    myAddedCar={myAddedCar}
                                    key={myAddedCar._id}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>
            
        </div>
    );
};

export default page;