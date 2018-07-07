import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { hide as hideSettings } from '../../actions/setting';

let Settings = ({ settings, hideSettings }) =>
  settings.visible &&
  <div className="settings" >
    <button className="close" onClick={hideSettings} >
      <img className="close__img" src="/assets/icon-close.svg" alt="icon close" />
    </button>
  </div>

let mapStateToProps = ({ settings }) => ({ settings });

let mapDispatchToProps = {
  hideSettings
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Settings);