const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div
              className="card-body"
              style={{
                backgroundColor: "#f8f9fa", // Light gray color for the card body
                borderRadius: "10px", // Optional: Add some rounded corners
              }}
            >
              <div
                className="container-fluid dashboard-show"
                id="dashboard-section"
              >
                <div className="row">
                  {/* First Row */}
                  <div className="col-lg-6 col-12">
                    <div
                      className="small-box text-bg-primary"
                      style={{
                        width: "70%",
                        height: 200,
                        margin: "0 auto",
                        marginBottom: 20,
                      }}
                    >
                      <div className="inner">
                        <h3
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                            marginTop: 50,
                          }}
                          id="parselrecived"
                        >
                          454
                        </h3>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                          }}
                        >
                          Parsel Received
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div
                      className="small-box text-bg-success"
                      style={{ width: "70%", height: 200, marginBottom: 20 }}
                    >
                      <div className="inner">
                        <h3
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                            marginTop: 50,
                          }}
                        >
                          400
                        </h3>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                          }}
                        >
                          Old Parsel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div
                      className="small-box text-bg-warning"
                      style={{
                        width: "70%",
                        height: 200,
                        margin: "0 auto",
                        marginBottom: 20,
                      }}
                    >
                      <div className="inner">
                        <h3
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                            marginTop: 50,
                          }}
                        >
                          76
                        </h3>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                          }}
                        >
                          Total Parsel
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div
                      className="small-box text-bg-danger"
                      style={{ width: "70%", height: 200, marginBottom: 20 }}
                    >
                      <div className="inner">
                        <h3
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                            marginTop: 50,
                          }}
                        >
                          45
                        </h3>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "2px 2px 2px black",
                          }}
                        >
                          Pending Delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
