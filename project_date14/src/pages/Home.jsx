// import React from 'react';

function Home() {
  return (
    <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 ">
      <div className="col">
        <div className="card h-100">
          <img src={"src/assets/img1.png"} className="card-img-top" alt="..."  style={{ width: "200px", height: "200px" }}/>
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
          <img src={"src/assets/img1.png"} className="card-img-top" alt="..." style={{ width: "200px", height: "200px" }} />
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
  );
}

export default Home;
