import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Dicrise from "./pages/Dicrise";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Dicrise />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
