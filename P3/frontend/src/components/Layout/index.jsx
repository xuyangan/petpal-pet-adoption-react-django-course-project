// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
// import footer
import Footer from '../Footer';
import SeekerHeader from '../Header';

function Layout() {
  return (
    <div>
      <SeekerHeader />
      <main>
        <Outlet />
      </main>

      {/* Your footer component */}
        <Footer />
    </div>
  );
}

export default Layout;
