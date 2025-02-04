import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with actual form submission logic, such as sending to an API
    alert('Booking Request Sent!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Booking Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Book Your Stay at GrandPr0</h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Ready for a luxurious getaway? Fill in your details below to make a reservation at GrandPr0.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="checkInDate" className="block text-lg font-semibold mb-2">
                Check-In Date
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="checkOutDate" className="block text-lg font-semibold mb-2">
                Check-Out Date
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rooms" className="block text-lg font-semibold mb-2">
                Number of Rooms
              </label>
              <select
                id="rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3 Rooms</option>
                <option value={4}>4 Rooms</option>
                <option value={5}>5 Rooms</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-200 py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Need Help?</h2>
        <p className="text-lg md:text-xl text-center mb-8">
          If you have any questions or need assistance with your booking, feel free to contact us.
        </p>

        <div className="text-center">
          <p className="text-xl mb-2">GrandPr0 Hotel</p>
          <p className="text-lg">123 Grand Ave, Luxury City</p>
          <p className="text-lg">Phone: +123 456 7890</p>
          <p className="text-lg">Email: booking@grandpr0hotel.com</p>
        </div>
      </section>
    </div>
  );
};

export default Booking;