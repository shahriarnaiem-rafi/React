import React from "react";

const Home = () => {
  return (
    <>
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
            <button className="btn btn-primary">Book Now</button>
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
              src="https://media.istockphoto.com/id/1699952363/photo/asian-chinese-family-flying-a-kite-at-public-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=nUCk5JCX0ip5IzJS_OwW5nkOOnYBpGyAEyOhReiru08="
              alt="Gallery Image 1"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/com/XrNffGTm/roberto-nickson-tle-CJi-DOri0-unsplash.jpg"
              alt="Gallery Image 2"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/com/vCJSX4hs/exterior-design-in-gulshan-1-1024x576.jpg"
              alt="Gallery Image 3"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/com/rKNNTS44/images.png"
              alt="Gallery Image 4"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/com/another-image.jpg"
              alt="Gallery Image 5"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/com/some-other-image.jpg"
              alt="Gallery Image 6"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          {/* You can add more images here */}
        </div>
      </div>
    </>
  );
};

export default Home;
