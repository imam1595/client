import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { EditModal } from './EditModal';
import { DeleteAlert } from './DeleteAlert';

const MyAddedCarCard = ({myAddedCar}) => {
    return (
        <div className='border shadow-2xl p-3 flex flex-col items-center justify-between space-x-4'>
            <div>
                <div className="relative w-full h-48">
                <Image
                    src={myAddedCar.imageUrl}
                    alt='pic'
                    fill
                    className="object-cover rounded-t-xl"
                />
            </div>

                <div>
                    <h1 className='font-xl text-xl'>{myAddedCar.carName}</h1>
                    <h1 className='font-xl text-xl'>{myAddedCar.location}</h1>
                    <h1 className='font-semibold text-xl text-accent'>$ {myAddedCar.price}</h1>
                </div>
            </div>
            <div className='flex gap-3'>
                <EditModal myAddedCar={myAddedCar}/>
                <DeleteAlert myAddedCar={myAddedCar}/>
            </div>
        </div>
    );
};

export default MyAddedCarCard;