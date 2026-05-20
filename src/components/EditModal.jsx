"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function EditModal({myAddedCar}) {

  const router = useRouter();

  const { _id, carName, location, carType, price, seatCapacity, availability, imageUrl, description } = myAddedCar;

  const onSubmit = async (e) => {
        e.preventDefault()
  
        const formData = new FormData(e.currentTarget)
        const Cars = Object.fromEntries(formData.entries())

        console.log(Cars);
  
        const res = await fetch(`http://localhost:5000/myAddedCars/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(Cars)
        })

        const data = await res.json()

        // console.log(data);

        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");

          router.refresh(); // IMPORTANT
        }
  
        
    }
  return (
    <Modal>
      <Button variant='outline'>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                    onSubmit={onSubmit}
                        className="p-10 space-y-8"
                        >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Destination Name */}
                            <div className="md:col-span-2">
                            <TextField defaultValue={carName} name="carName" isRequired>
                                <Label>Car Name</Label>
                                <Input placeholder="BMW 5" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                            </div>
            
                            {/* Country */}
                            <TextField defaultValue={location} name="location" isRequired>
                            <Label>Pickup Location</Label>
                            <Input placeholder="Dhaka" className="rounded-2xl" />
                            <FieldError />
                            </TextField>
            
                            {/* Category - Updated Select Component */}
                            <div>
                            <TextField defaultValue={carType} name="carType" isRequired>
                                <Label>Car Type</Label>
                                <Input placeholder="BMW 5" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                            </div>
            
                            {/* Price */}
                            <TextField defaultValue={price} name="price" type="number" isRequired>
                            <Label>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl"
                            />
                            <FieldError />
                            </TextField>
            
                            {/* Duration */}
                            <TextField defaultValue={seatCapacity} name="seatCapacity" isRequired>
                            <Label>Seat Capacity</Label>
                            <Input
                                placeholder="4 seats"
                                className="rounded-2xl"
                            />
                            <FieldError />
                            </TextField>
            
                            {/* Departure Date */}
                            <div className="md:col-span-2">
                            <TextField defaultValue={availability} name="availability" isRequired>
                                <Label>Available Status</Label>
                                <Input placeholder="available/unavailable" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                            </div>
            
                            {/* Image URL - Removed preview */}
                            <div className="md:col-span-2">
                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                            </div>
            
                            {/* Description */}
                            <div className="md:col-span-2">
                            <TextField defaultValue={description} name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                            </div>
                        </div>
            
                        {/* Buttons */}
            
                        <Modal.Footer>
              
                          <Button type="submit" slot="close">Save</Button>
                        </Modal.Footer>
                    </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}