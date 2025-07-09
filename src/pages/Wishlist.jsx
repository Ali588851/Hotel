import React, { useEffect, useState } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpeg';

const images = [room1, room2, room3];

const roomData = [
  {
    img: room1,
    title: "Deluxe Suite",
    features: "Sea view, King bed, Free Wi-Fi, AC",
    price: "PKR 18,000 / night"
  },
  {
    img: room2,
    title: "Executive Room",
    features: "Balcony, Smart TV, Complimentary Breakfast",
    price: "PKR 15,500 / night"
  },
  {
    img: room3,
    title: "Ocean View Room",
    features: "Ocean view, Jacuzzi, Room Service",
    price: "PKR 20,000 / night"
  }
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(saved);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updated = wishlist.filter((i) => i !== indexToRemove);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">You haven’t added any rooms to your wishlist yet.</p>
      ) : (
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-4xl">
          <p className="text-gray-600 mb-4">You have saved the following rooms:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {wishlist.map((index) => {
              const room = roomData[index];
              return (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-gray-50 hover:shadow-xl transition relative"
                >
                  {/* Image Click → Room Details */}
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer"
                    onClick={() =>
                      navigate('/room-details', {
                        state: {
                          img: room.img,
                          title: room.title,
                          features: room.features,
                          price: room.price
                        }
                      })
                    }
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{room.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{room.features}</p>
                  <p className="text-sm font-semibold text-green-700">{room.price}</p>

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() =>
                        navigate('/book', {
                          state: {
                            roomImage: room.img,
                            roomTitle: room.title
                          }
                        })
                      }
                      className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition"
                    >
                      Book Now
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
