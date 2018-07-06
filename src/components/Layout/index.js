import React, { Fragment } from 'react';
import './styles.css';

let Layout = ({ children }) =>
  <Fragment>
    <header>Header contains gear for settings</header>
    <main>
      {children}
    </main>
    <footer>Footer contains your score</footer>
  </Fragment>

export default Layout;