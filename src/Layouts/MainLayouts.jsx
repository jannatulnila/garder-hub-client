import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <header>
            <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
       </div>
    );
};

export default MainLayouts;