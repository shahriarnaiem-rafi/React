import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Sidebar />
          <Header />
          <Routes>
            <Route path="/public/dist/pages/index.html" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
