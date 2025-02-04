import React from "react";

const Inspiration = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div
          className="hero bg-cover bg-center min-h-[400px]"
          style={{
            backgroundImage: 'url("https://i.ibb.co/4M9FPvn/hotel-banner.jpg")', // Replace with your image URL
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold">
                Get Inspired at GrandPr0
              </h1>
              <p className="py-6 text-xl md:text-2xl">
                Discover the beauty, serenity, and luxury that await you.
              </p>
            </div>
          </div>
        </div>

        {/* Inspiration Gallery Section */}
        <section className="py-16 px-4 md:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Inspiration Gallery</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Experience the beauty and elegance of GrandPr0 through stunning
            imagery that highlights the essence of luxury and tranquility. Let
            these images inspire your next getaway.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/T1f2y0d/hotel-room.jpg" // Replace with your actual image
                alt="Hotel Room"
                className="w-full h-60 object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/ky5tj1T/pool-view.jpg" // Replace with your actual image
                alt="Pool View"
                className="w-full h-60 object-cover"
              />
            </div>
            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/MhRVyT7/spa-treatment.jpg" // Replace with your actual image
                alt="Spa Treatment"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Inspirational Quotes Section */}
        <section className="bg-white py-16 px-4 md:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Inspirational Quotes</h2>
          <div className="space-y-8">
            <blockquote className="italic text-lg md:text-xl text-gray-700">
              "The best way to predict the future is to create it." <br />
              <span className="font-semibold">Abraham Lincoln</span>
            </blockquote>
            <blockquote className="italic text-lg md:text-xl text-gray-700">
              "Life is either a daring adventure or nothing at all." <br />
              <span className="font-semibold">Helen Keller</span>
            </blockquote>
            <blockquote className="italic text-lg md:text-xl text-gray-700">
              "Travel is the only thing you buy that makes you richer." <br />
              <span className="font-semibold"> Unknown</span>
            </blockquote>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Plan Your Dream Stay</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Your perfect getaway awaits. Book your stay with us and create
          memories that last a lifetime.
        </p>
        <a
          href="/booking"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Book Now
        </a>
      </section>
    </>
  );
};

export default Inspiration;