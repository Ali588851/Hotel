import React, { useState, useEffect } from 'react';
import room1 from '../images/room1.jpg';

export default function Book() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('bookingCart')) || [];
    setCart(savedCart);
  }, []);

  const handleNightsChange = (index, delta) => {
    const updated = [...cart];
    updated[index].nights = Math.max(1, updated[index].nights + delta);
    setCart(updated);
    localStorage.setItem('bookingCart', JSON.stringify(updated));
  };

  const handleRemoveRoom = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem('bookingCart', JSON.stringify(updated));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateRoomTotal = (price, nights) => {
    const numeric = parseInt(price.replace(/[^\d]/g, '')) || 0;
    return numeric * nights;
  };

  const grandTotal = cart.reduce((acc, room) => acc + calculateRoomTotal(room.price, room.nights), 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert(`Booking Confirmed via ${form.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash on Arrival'}!`);
    localStorage.removeItem('bookingCart');
    setCart([]);
    setForm({ name: '', email: '', paymentMethod: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 mb-8 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Booking</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">No rooms selected. Please go back and choose a room.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((room, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-xl shadow-md">
                <img src={room.img || room1} alt={room.title} className="w-full md:w-32 h-24 rounded-xl object-cover" />
                <div className="flex-grow">
                  <h4 className="text-lg font-bold">{room.title}</h4>
                  <p className="text-gray-600">{room.price}</p>

                  <div className="mt-2">
                    <label className="text-sm text-gray-500">Check-in Date:</label>
                    <input
                      type="date"
                      value={room.checkIn || ''}
                      onChange={(e) => {
                        const updated = [...cart];
                        updated[index].checkIn = e.target.value;
                        setCart(updated);
                        localStorage.setItem('bookingCart', JSON.stringify(updated));
                      }}
                      className="mt-1 block border px-3 py-1 rounded-lg"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleNightsChange(index, -1)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                      <span>{room.nights} night(s)</span>
                      <button onClick={() => handleNightsChange(index, 1)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                    </div>

                    {room.checkIn && (
                      <span className="text-sm text-gray-600">
                        Checkout: {new Date(new Date(room.checkIn).getTime() + room.nights * 86400000).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-blue-600">
                    PKR {calculateRoomTotal(room.price, room.nights).toLocaleString()}
                  </p>
                  <button onClick={() => handleRemoveRoom(index)} className="text-sm text-red-500 mt-2">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="mt-6 text-right text-xl font-semibold text-blue-700">
              Grand Total: PKR {grandTotal.toLocaleString()}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />

              <div className="space-y-2">
                <label className="block font-medium text-gray-700">Payment Method:</label>
                <select
                  name="paymentMethod"
                  required
                  value={form.paymentMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash on Arrival</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>

              {form.paymentMethod === 'card' && (
                <div className="space-y-4 pt-2">
                  <input
                    type="text"
                    placeholder="Card Number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiry (MM/YY)"
                      required
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      required
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
