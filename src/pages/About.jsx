import React from "react";
import { motion } from "framer-motion";
import room3 from "../images/room3.jpeg"; // ✅ Make sure image path is correct

export default function About() {
  return (
    <section className="py-20 px-6 md:px-24 bg-gray-50 mt-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image with animation */}
        <motion.img
          src={room3}
          alt="About Ocean Hotel"
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Text with animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-gray-800">About <span className="text-blue-500">Ocean Hotel</span></h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At <strong>Ocean Hotel</strong>, we blend timeless tradition with modern luxury. Whether it’s a peaceful weekend escape or an extended vacation, our goal is to provide an unforgettable stay with world-class service and exceptional comfort.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
