import React from 'react';

const Home = () => {
    return (
        <>
        <section>
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="avatar">
        <div className="rounded-full">
          <img src="https://i.ibb.co.com/Y7sbTyL7/Shahriar.png" className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio!</h1>
        <p className="py-6">
          Hello! I'm Shahriar Naiem Rafi, a passionate web developer. I specialize in
          building fast, responsive websites and web apps. Explore my work
          and feel free to get in touch!
        </p>
        <button className="btn btn-primary text-white py-2 px-6">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>



        </>
    );
};

export default Home;