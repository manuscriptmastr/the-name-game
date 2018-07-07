import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { hide as hideSettings } from '../../actions/setting';
import { Link } from 'react-router-dom';

let Settings = ({ settings, hideSettings }) =>
  settings.visible &&
  <div className="settings" >
    <Link className="close" to="#" title="hide settings">
      <img className="close__img" onerror="/assets/icon-profile.svg" src="/assets/icon-close.svg" alt="icon close" onClick={hideSettings} />
    </Link>
  </div>

let mapStateToProps = ({ settings }) => ({ settings });

let mapDispatchToProps = {
  hideSettings
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Settings);