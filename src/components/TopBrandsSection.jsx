import React from 'react';
import Image from "next/image";

const TopBrandsSection = () => {
  const brands = [
    {
      name: "BMW",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
      description: "Luxury performance cars with modern technology.",
    },
    {
      name: "Mercedes",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      description: "Elegant design and premium driving experience.",
    },
    {
      name: "Audi",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop",
      description: "Stylish, fast, and comfortable luxury vehicles.",
    },
  ];

  return (
    <section className="px-6 py-20 mt-10 bg-[#fff7ed]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Top Brand Cars for rentals</h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Explore premium car brands available for your next ride.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {brand.name}
              </h3>

              <p className="text-gray-500 mt-3">
                {brand.description}
              </p>

              <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                View Cars
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrandsSection;