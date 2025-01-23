import { useState, useEffect } from "react";
// import { Navbar } from "react-bootstrap";
// import Footer from "../components/Footer";
// import Sidebar from "../components/Sidebar";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const ManageUser = () => {
  const [user, setUser] = useState([]);
  const [message, setMassage] = useState([]);
  const loaderUser = async () => {
    const result = await axios.get(
      "http://localhost/React/project_date23/Backend/view.php"
    );
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(
      "http://localhost/React/project_date23/Backend/delete.php?id=" + id
    );
    setMassage(res.data.success);
  };
  useEffect(() => {
    loaderUser();
  }, []);
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
              {/* <p className="text-danger">{message} </p> */}
              <p className="text-danger">{message} </p>
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <Link
                          to={"/edit-user/" + user.id}
                          className="btn btn-success mx-2"
                        >
                          Edit
                        </Link>
                        <NavLink to={`/edit-user/${user.id}`}>
                          <button className="btn btn-info mb-2 mt-2">
                            Update
                          </button>
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}

          {/* /.container-fluid */}
        </section>
      </div>
      {/* footer-section */}
      {/* <Footer /> */}
    </>
  );
};

export default ManageUser;
