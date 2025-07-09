import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../images/logo.png';
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpeg';
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Hero() {
  const [favorites, setFavorites] = useState([false, false, false]);
  const navigate = useNavigate();

  const toggleFavorite = (index) => {
    const updated = [...favorites];
    updated[index] = !updated[index];
    setFavorites(updated);

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (updated[index]) {
      if (!wishlist.includes(index)) wishlist.push(index);
    } else {
      const idx = wishlist.indexOf(index);
      if (idx > -1) wishlist.splice(idx, 1);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  const addToBooking = (room) => {
    const cart = JSON.parse(localStorage.getItem('bookingCart')) || [];
    const updatedCart = [...cart, { ...room, nights: 1 }];
    localStorage.setItem('bookingCart', JSON.stringify(updatedCart));
    alert(`${room.title} added to your booking.`);
  };

  const rooms = [
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden group">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://capellahotels.com/assets/img/site_images/bangkok/2023-02-09-bangkok-video.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-6 px-4 text-center">
          <img src={logo} alt="Hotel Logo" className="w-40 md:w-60" />
          <button
            onClick={() => navigate('/book')}
            className="opacity-0 group-hover:opacity-100 transition duration-500 text-white border border-white px-6 py-2 rounded-full bg-transparent hover:bg-white hover:text-black"
          >
            View Booking
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <div className="bg-white text-gray-800">
        <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center bg-gradient-to-b from-black via-gray-900 to-white text-white">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Welcome to Ocean Hotel
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience luxury and serenity like never before. Book your stay with us now.
          </motion.p>
        </section>

        <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Our Luxury Rooms</h3>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-2xl rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img src={room.img} alt="Room" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{room.title}</h4>
                  <p className="text-gray-600">{room.features}</p>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-3 px-4"
                >
                  <button
                    onClick={() => addToBooking(room)}
                    className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base"
                  >
                    Add to Booking
                  </button>

                  <button
                    onClick={() => toggleFavorite(i)}
                    className="text-white text-xl"
                  >
                    {favorites[i] ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </button>

                  <button
                    onClick={() =>
                      navigate('/room-details', {
                        state: {
                          img: room.img,
                          title: room.title,
                          features: room.features,
                          price: room.price,
                        }
                      })
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
