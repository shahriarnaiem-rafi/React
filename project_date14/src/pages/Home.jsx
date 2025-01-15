// import React from 'react';

function Home() {
  return (
    <div className="container-fluid">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
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
      <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col">
          <div className="card h-100">
            <img
              src={"src/assets/img1.png"}
              className="card-img-top"
              alt="..."
              style={{ width: "200px", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={"src/assets/img1.png"}
              className="card-img-top"
              alt="..."
              style={{ width: "200px", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={"src/assets/img1.png"}
              className="card-img-top"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
