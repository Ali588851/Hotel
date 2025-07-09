import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBed,
  FaWifi,
  FaUserFriends,
  FaBaby,
  FaClock,
  FaMapMarkerAlt,
  FaRulerCombined,
} from "react-icons/fa";

export default function RoomDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-10 text-center">No Room Data Found</div>;

  const { img, title, price } = state;

  const features = [
    { icon: <FaUserFriends />, text: "2 adults or 1 adult and 1 child" },
    { icon: <FaBed />, text: "King size bed or twin beds" },
    { icon: <FaMapMarkerAlt />, text: "Courtyard view" },
    { icon: <FaMapMarkerAlt />, text: "Located in Les Deux Fontaines residence" },
    { icon: <FaRulerCombined />, text: "25m² (270 sq.ft)" },
    { icon: <FaBaby />, text: "Baby cot available on request" },
    { icon: <FaWifi />, text: "Free Wifi" },
    { icon: <FaClock />, text: "Check-in: 3pm / Check-out: 12pm" },
  ];

  const handleBookNow = () => {
    const cart = JSON.parse(localStorage.getItem("bookingCart")) || [];
    const roomData = { img, title, price, nights: 1 };
    cart.push(roomData);
    localStorage.setItem("bookingCart", JSON.stringify(cart));
    alert(`${title} added to your booking.`);
    navigate("/book");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <img src={img} alt={title} className="w-full h-[400px] object-cover" />
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-xl font-semibold text-green-700">{price}</p>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-4">Room Features</h3>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 text-lg">
                  <span className="text-black mr-3">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBookNow}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Contact Directly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
