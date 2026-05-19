import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const CarCard = ({car}) => {

    // console.log(car)
    return (
        <div className="">
                
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
                        Car Type: 
                    {car.carType}
                    </h3>
    
                    <p className="text-gray-500 mt-3">
                        Rental Price:
                    {car.price}
                    </p>

                    <p className="text-gray-500 mt-3">
                        Availability:
                    {car.availability}
                    </p>
    
                    <Link href={`/explore-cars/${car._id}`}><button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                    View Details
                    </button></Link>
                </div>
            </div>
                
        </div>
    );
};

export default CarCard;