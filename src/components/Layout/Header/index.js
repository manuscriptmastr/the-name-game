import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { show as showSettings } from '../../../actions/setting';
import { Link } from 'react-router-dom';

let Header = ({ showSettings, settings }) =>
  <header>
    <Link className="gear" to="#" title="show settings" onClick={showSettings} >
      <img className="gear__img" src="/assets/icon-gear-outline.svg" alt="icon gear outline" />
    </Link>
  </header>

let mapStateToProps = ({ settings }) => ({ settings });

let mapDispatchToProps = {
  showSettings
};

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Header);