import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

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
    
                    <div className='mt-4'>
                        <Modal>
                            <Button variant="primary">Book Now</Button>
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
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Driver Needed</Label>
                                            <Input placeholder="yes / no" />
                                        </TextField>

                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Special Note</Label>
                                            <Input placeholder="Note" />
                                        </TextField>
                                        
                                        </form>
                                    </Surface>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button slot="close">Book Now</Button>
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

export default carDetails;