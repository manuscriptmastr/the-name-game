import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';

let Footer = ({ correct, incorrect }) =>
  <footer>
    <ul className="results">
      <li className="result result--green">{correct}</li>
      <li className="result result--red">{incorrect}</li>
    </ul>
  </footer>

let mapStateToProps = ({ results: { correct, incorrect } }) => ({ correct, incorrect });

let enhance = compose(
  connect(mapStateToProps)
);

export default enhance(Footer);