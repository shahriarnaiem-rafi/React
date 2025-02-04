import React from 'react';

const About= () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="hero bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/SzGFCHt/Banner.jpg")', // Replace with your hotel's actual image
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to GrandPr0 Hotel</h1>
            <p className="py-6 text-xl md:text-2xl">
              Experience luxury and comfort like never before at our stunning hotel.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">About GrandPr0 Hotel</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          At GrandPr0, we are committed to providing an unforgettable experience for every guest. 
          Located in the heart of the city, our luxurious hotel combines world-class amenities 
          with personalized service. Whether you're visiting for business, leisure, or a special occasion, 
          we ensure your stay is nothing short of exceptional.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          With elegant rooms, fine dining options, a full-service spa, and unmatched views, GrandPr0 offers 
          an atmosphere of relaxation, comfort, and sophistication. We pride ourselves on creating a home away 
          from home for every guest, with attention to detail in every aspect of your stay.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="service-item">
            <i className="fa-solid fa-bed text-4xl mb-4 text-blue-600"></i>
            <h3 className="text-2xl font-semibold mb-2">Luxury Rooms</h3>
            <p className="text-lg">
              Enjoy elegant and spacious rooms with all the amenities you need for a relaxing stay.
            </p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-utensils text-4xl mb-4 text-blue-600"></i>
            <h3 className="text-2xl font-semibold mb-2">Gourmet Dining</h3>
            <p className="text-lg">
              Indulge in exquisite dining at our on-site restaurant offering world-class cuisine.
            </p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-spa text-4xl mb-4 text-blue-600"></i>
            <h3 className="text-2xl font-semibold mb-2">Relaxation & Spa</h3>
            <p className="text-lg">
              Rejuvenate with our luxury spa services designed for your total relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-lg md:text-xl mb-8">
          If you have any questions or would like to book your stay, feel free to contact us.
        </p>
        <div>
          <p className="text-xl font-semibold">Email:</p>
          <p className="text-lg">contact@grandpr0hotel.com</p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">Phone:</p>
          <p className="text-lg">+1 (234) 567-890</p>
        </div>
      </section>
    </div>
  );
};

export default About;