import React from 'react';
import { useLocation } from 'react-router-dom';
import room1 from '../images/room1.jpg'; // default fallback

export default function Book() {
  const location = useLocation();
  const roomImage = location.state?.roomImage || room1;
  const roomTitle = location.state?.roomTitle || "Deluxe Room";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl">

        {/* Room Image */}
        <div className="hidden md:block">
          <img
            src={roomImage}
            alt="Room Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Booking Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2 text-gray-800 text-center md:text-left">
            Book: {roomTitle}
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Fill in your details and our team will contact you to confirm your booking.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="date"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
