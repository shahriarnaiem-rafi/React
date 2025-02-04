import React from 'react';

const Gallery= () => {
  // Mock image data for demonstration
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
    <div className="min-h-screen bg-gray-100">
      {/* Gallery Section */}
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
    </div>
  );
};

export default Gallery;