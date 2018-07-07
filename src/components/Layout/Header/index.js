import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { show as showSettings } from '../../../actions/setting';

let Header = ({ showSettings }) =>
  <header>
    <button className="gear" onClick={showSettings} >
      <img className="gear__img" src="/assets/icon-gear-outline.svg" alt="icon gear outline" />
    </button>
  </header>

let mapDispatchToProps = {
  showSettings
};

let enhance = compose(
  connect(null, mapDispatchToProps)
);

export default enhance(Header);