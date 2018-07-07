import React, { Fragment } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';

let Layout = ({ children }) =>
  <Fragment>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Fragment>

export default Layout;