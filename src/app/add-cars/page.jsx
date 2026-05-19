"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";

const AddDestinationPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const Cars = Object.fromEntries(formData.entries())

        console.log(Cars)

        const res = await fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Cars)
        })

        const data = await res.json()

        console.log(data);


    }

    return (
        <div className="p-5">
         <h1 className="text-2xl font-bold">Add Cars</h1>

         <Card>
        <form
        onSubmit={onSubmit}
            className="p-10 space-y-8 w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="carName" isRequired>
                  <Label>Car Name</Label>
                  <Input placeholder="BMW 5" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="location" isRequired>
                <Label>Pickup Location</Label>
                <Input placeholder="Dhaka" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <TextField name="carType" isRequired>
                  <Label>Car Type</Label>
                  <Input placeholder="BMW 5" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="seatCapacity" isRequired>
                <Label>Seat Capacity</Label>
                <Input
                  placeholder="4 seats"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="availability" isRequired>
                  <Label>Available Status</Label>
                  <Input placeholder="available/unavailable" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
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
                <TextField name="description" isRequired>
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

            <Button
              type="submit"
              variant="primary"
              className=" rounded-none w-full text-white"
            >
             Add Destination
            </Button>
          </form>
         </Card>
        </div>
    );
};

export default AddDestinationPage;