import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    const location = useLocation();
    
    // Hide header and footer only on the login page
    const hideHeaderFooter = location.pathname === "/login";

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <Outlet />
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

export default Root;
