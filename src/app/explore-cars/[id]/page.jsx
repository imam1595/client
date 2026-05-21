
import CarDetailsClientPage from '@/components/CarDetailsClientPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


const carDetails = async ({params}) => {
    const {id} = await params;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    // console.log({token});

    const res = await fetch (`http://localhost:5000/car/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const car = await res.json();


    

    // console.log(car);

    return (
        <CarDetailsClientPage car={car}/>
    );
};

export default carDetails;