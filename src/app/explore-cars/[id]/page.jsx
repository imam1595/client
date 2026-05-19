import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const carDetails = async ({params}) => {
    const {id} = await params

    const res = await fetch (`http://localhost:5000/car/${id}`);
    const car = await res.json();

    console.log(car);

    return (
        <div className="mt-10">
                        
            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                <div className="relative w-full h-64">
                    <Image
                    src={car.imageUrl}
                    alt={"car pic"}
                    fill
                    className="object-cover"
                    />
                </div>
    
                <div className="p-6">
                    <h3 className="text-2xl font-semibold">
                        Car Name: 
                    {car.carName}
                    </h3>

                    <h3 className="text-2xl font-semibold">
                        Car Type: 
                    {car.carType}
                    </h3>
    
                    <p className="text-gray-500 mt-3">
                        Rental Price:
                    {car.price}
                    </p>

                    <p className="text-gray-500 mt-3">
                        Seat Capacity:
                    {car.seatCapacity}
                    </p>

                    <p className="text-gray-500 mt-3">
                        Availability:
                    {car.availability}
                    </p>

                    <p className="text-gray-500 mt-3">
                        Car Description:
                    {car.description}
                    </p>

                    <h1>Booked by 0 people</h1>
    
                    <Link href={''}><button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition w-full">
                    Book Now
                    </button></Link>
                </div>
            </div>
                        
        </div>
    );
};

export default carDetails;