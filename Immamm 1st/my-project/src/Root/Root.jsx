import { Outlet } from "react-router-dom";
import Footer from "../pages/Sheard/Footer";
import Navbar from "../pages/Sheard/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;