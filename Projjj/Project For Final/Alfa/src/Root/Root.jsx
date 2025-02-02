import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
        <Header />
        <Outlet/>
        <Footer />
        </>
    );
};

export default Root;