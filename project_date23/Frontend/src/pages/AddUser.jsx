import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formvalue);
    const formData = {
      name: formvalue.name,
      email: formvalue.email,
      phone: formvalue.phone,
    };
    const res = await axios.post(
      "http://localhost/React/project_date23/Backend/insert.php",
      formData
    );
    //let jsonres= res.data.json();
    if (res.data.success) {
      setMessage(res.data.success);
      setTimeout(() => {
        navigate("/manageuser");
      }, 2000);
    }
  };
  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-body">
              <div className="container mt-5">
                <h2 className="text-center mb-4">Registration Form</h2>
                <p className="text-sucess"> { message }</p>  
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required name="name" value={formvalue.name}  onChange={ handleInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required name="email" value={formvalue.email}  onChange={ handleInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      required name="phone" value={formvalue.phone}  onChange={ handleInput}
                    /> 
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required 
                    />
                  </div>
                  <button type="submit" name="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* /.card */}
        </section>
      </div>
    </>
  );
};

export default AddUser;

