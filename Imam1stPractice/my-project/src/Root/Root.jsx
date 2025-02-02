import React from 'react';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
           <Header /> 
            <Outlet />
           <Footer />
        </>
    );
};

export default Root;