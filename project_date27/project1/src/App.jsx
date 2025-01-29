import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Manageuser from "./pages/users/Manageuser";
import Adduser from "./pages/users/AddUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/manageuser" element={<Manageuser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
