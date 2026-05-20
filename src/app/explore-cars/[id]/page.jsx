
import CarDetailsClientPage from '@/components/CarDetailsClientPage';
import React from 'react';


const carDetails = async ({params}) => {
    const {id} = await params

    const res = await fetch (`http://localhost:5000/car/${id}`);
    const car = await res.json();


    

    // console.log(car);

    return (
        <CarDetailsClientPage car={car}/>
    );
};

export default carDetails;