import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [])

  const fetchUser = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/view");
    // const result = await axios("http://127.0.0.1:8000/api/view");
    console.log(result.data.results);
    setUser(result.data.results);
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>User Details</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    user.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name} </td>
                                <td>{user.email} </td>
                                <td>{user.phone} </td>
                                <td>Delete </td>
                                
                            </tr>
                        )
                    })
                }
 
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
