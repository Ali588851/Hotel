import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col items-center justify-center px-6 py-12 mt-4 ">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        We'd love to hear from you. Fill out the form and we'll respond as soon as possible.
      </p>

      <form className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xl space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
