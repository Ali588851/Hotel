import React from 'react';
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpeg';

export default function Gallery() {
  const images = [room1, room2, room3];

  return (
    <div className="min-h-screen bg-white px-6 py-12 mt-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-8">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
