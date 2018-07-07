import React, { Fragment } from 'react';
import './styles.css';
import Settings from '../Settings';
import Header from './Header';
import Footer from './Footer';

let Layout = ({ children }) =>
  <Fragment>
    <Settings />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Fragment>

export default Layout;