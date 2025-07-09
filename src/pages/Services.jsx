import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Room Service",
      description: "Delicious meals and drinks delivered to your room, any time of day.",
      icon: "🛎️",
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your body and soul in our luxurious spa and sauna.",
      icon: "💆‍♀️",
    },
    {
      title: "Airport Shuttle",
      description: "Comfortable and reliable transportation to and from the airport.",
      icon: "🚐",
    },
    {
      title: "Free Wi-Fi",
      description: "Stay connected with fast, free internet in all rooms and public areas.",
      icon: "📶",
    },
    {
      title: "Swimming Pool",
      description: "Take a refreshing dip in our indoor or rooftop pool.",
      icon: "🏊‍♂️",
    },
    {
      title: "Event Hall",
      description: "Host your weddings, meetings, and events in our fully-equipped hall.",
      icon: "🎉",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 font-[Cinzel]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 mt-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl p-6 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
