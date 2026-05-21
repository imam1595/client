import CarCard from '@/components/CarCard';
import React from 'react';
import {Label, SearchField} from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";

const exploreCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`)
    const cars = await res.json();

    console.log(cars);
    return (
        <div className='mt-10 space-y-5 bg-[#fff7ed] p-5'>
            <div className='font-bold text-3xl mb-5'>Explore Our Available Cars</div>

            <div>
                <div>
                    <SearchField name="search">
                        <Label>Search</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[280px]" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>
                <div>
                    <select
                        // onChange={(e) => handleSort(e.target.value)}
                        className="border px-4 py-2 rounded-lg bg-white cursor-pointer"
                    >
                        <option value="">Sort By</option>
                        
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cars.map((car) => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default exploreCars;