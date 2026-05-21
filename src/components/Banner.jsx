import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="px-6 py-20 mt-10 bg-[#fff7ed]">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div>
                <Chip color="primary">Premium Car Rental</Chip>

                <h1 className="text-5xl font-bold mt-5">
                    Drive Your Dream Car Today
                </h1>

                <p className="mt-4 text-gray-500">
                    Explore SUVs, luxury cars, sedans, and affordable rentals.
                </p>

                <div className="flex gap-4 mt-6">
                    <Button color="primary">
                    Explore Cars
                    </Button>

                    <Button variant="bordered">
                    Add Car
                    </Button>
                </div>
                </div>

                {/* Right */}
                <div>
                <Image
                    src="/josh-berquist-_4sWbzH5fp8-unsplash.jpg"
                    alt="car"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
                </div>

            </div>
        </section>
    );
};

export default Banner;