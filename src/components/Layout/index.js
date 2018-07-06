import React, { Fragment } from 'react';
import './styles.css';

let Layout = ({ children }) =>
  <Fragment>
    <header>This is the header</header>
    <main>
      {children}
    </main>
  </Fragment>

export default Layout;