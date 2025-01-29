import axios from "axios";
import { useEffect, useState } from "react";

const Manageuser = () => {
  const [user, setUser] = useState([]);
  // const [messege, setMessege] = useState("");
  const loder = async () => {
    const result = await axios.get(
      "http://localhost/React/project_date27/Backend/view.php"
    );
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);
    
  };
  // const manageDelete = async (id) => {
  //   const result2 = await axios.delete(
  //     "http://localhost/React/project_date27/Backend/delete.php?id=" + id);
  //   setMessege(user.data.success);
  // };
  useEffect(()=>{
    loder();
  },[]);


  return (
    <>
      <section className="content-wrapper">
       
        <div className="card">
          <div className="card-body">
            <table>
              <tr>
                <th>Id </th>
                <th>name </th>
                <th>email </th>
                
              </tr>
              <tbody>
                {user.map((user,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Manageuser;
