'use client'
import Image from 'next/image';

import React, { useState } from 'react';
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';


const CarDetailsClientPage = ({car}) => {

    const {data: session} = authClient.useSession();
    const user = session?.user;

    // console.log(user);

    const [driverNeeded, setDriverNeeded] = useState('');
    const [specialNote, setSpecialNote] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const handleBooking = async () => {
        const bookingData = {
            carId: car._id,
            carName: car.carName,
            price: car.price,
            location: car.location,
            userEmail: user?.email, 
            userName: user?.name,
            userId: user?._id,
            driverNeeded,
            specialNote,
            bookingDate: new Date(),
        };

        // console.log(bookingData)

        try {
            const res = await fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Car booked successfully!');
                setIsOpen(false);
            } else {
                toast.error(data.message || 'Booking failed!');
            }
        } catch (err) {
            toast.error('Something went wrong!');
            console.log(err);
        }
    };

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
    
                    <div className='mt-4'>
                        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                            <Button variant="primary" onClick={() => setIsOpen(true)}>Book Now</Button>
                            <Modal.Backdrop>
                                <Modal.Container placement="auto">
                                    <Modal.Dialog className="sm:max-w-md">
                                        <Modal.CloseTrigger />
                                        <Modal.Header>
                                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                            <Envelope className="size-5" />
                                        </Modal.Icon>
                                        
                                        </Modal.Header>
                                        <Modal.Body className="p-6">
                                        <Surface variant="default">
                                            <form className="flex flex-col gap-4">
                                            <TextField className="w-full" name="driver" type="text">
                                                <Label>Driver Needed</Label>
                                                <Input placeholder="yes / no" onChange={(e) => setDriverNeeded(e.target.value)}/>
                                            </TextField>

                                            <TextField className="w-full" name="note" type="text">
                                                <Label>Special Note</Label>
                                                <Input placeholder="Note" onChange={(e) => setSpecialNote(e.target.value)}/>
                                            </TextField>
                                            
                                            </form>
                                        </Surface>
                                        </Modal.Body>
                                        <Modal.Footer>

                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleBooking}>Book Now</Button>
                                            </Modal.Footer>
                                    </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
                        
        </div>
    );
};

export default CarDetailsClientPage;