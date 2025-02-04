import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [
    {
      id: 1,
      url: "https://instagram.com/p/EXAMPLE1", // Instagram post URL
      imgSrc: "https://i.ibb.co.com/r17PrBw/7718814.jpg", // Image source (replace with actual image URLs)
    },
    {
      id: 2,
      url: "https://instagram.com/p/EXAMPLE2",
      imgSrc: "https://i.ibb.co.com/dwGJ1bmF/download-3.jpg",
    },
    {
      id: 3,
      url: "https://instagram.com/p/EXAMPLE2",
      imgSrc: "https://i.ibb.co.com/yc9Fch47/download-4.jpg",
    },
    
    {
      id: 4,
      url: "https://instagram.com/p/EXAMPLE4",
      imgSrc: "https://i.ibb.co.com/zWf3cfKV/download-5.jpg",
    },
    // Add more images as needed
  ];
  return (
    <>
     {/* Hero Section with Background Image */}
     <div
        className="hero bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/SzGFCHt/Banner.jpg")', // Replace with your image URL
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Enjoy your stay at GrandPr0</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/xSHHq43t/View.jpg"
            className="rounded-lg shadow-2xl"
            alt="View"
          />
          <div
            className="bg-cover bg-center p-8 "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/GvPZ3CNd/images-removebg-preview.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl font-bold text-black">About</h1>
            <p className="py-4 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-4 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-4 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <NavLink className="btn btn-primary" to="/booking">Book Now</NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co.com/XrNffGTm/roberto-nickson-tle-CJi-DOri0-unsplash.jpg"
            className="rounded-lg shadow-2xl"
            alt="View"
          />
          <div
            className="bg-cover bg-center p-8 "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/GvPZ3CNd/images-removebg-preview.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl font-bold">ROOMS</h1>
            <p className="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <h1 className="text-5xl font-bold">AMENITIES</h1>
            <p className="py-4">
              Provident cupiditate voluptatem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore, similique! et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Find Out More</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/vCJSX4hs/exterior-design-in-gulshan-1-1024x576.jpg"
            className="rounded-lg shadow-2xl"
            alt="View"
          />
          <div
            className="bg-cover bg-center p-8 "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/GvPZ3CNd/images-removebg-preview.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl font-bold">SWIMING POOL</h1>
            <p className="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <h1 className="text-5xl font-bold">CAR PARKING</h1>
            <p className="py-4">
              Provident cupiditate voluptatem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore, similique! et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Find Out More</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* Bellow code will be Gallary section */}
      <div className="min-h-screen p-8 bg-base-200">
        <h1 className="text-4xl font-bold text-center py-8">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/qYm7m7th/download-2.jpg"
              alt="Gallery Image 1"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/zWJvLHtQ/download.jpg"
              alt="Gallery Image 2"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/1kFcm30/istockphoto-1166166558-612x612.jpg"
              alt="Gallery Image 3"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/wrJdg9HJ/istockphoto-1448294355-612x612.jpg"
              alt="Gallery Image 4"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/WNF94nyw/istockphoto-1481129583-612x612.jpg"
              alt="Gallery Image 5"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/wrJdg9HJ/istockphoto-1448294355-612x612.jpg"
              alt="Gallery Image 6"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/TBz8kfqr/download.jpg"
              alt="Gallery Image 6"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/qY1mMtcB/download-1.jpg"
              alt="Gallery Image 6"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          {/* You can add more images here */}
        </div>
      </div>

      {/* instragram sesction */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Instagram Feed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {images.map((image) => (
              <a
                key={image.id}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={image.imgSrc}
                  alt={`Instagram Post ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;