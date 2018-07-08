import React from 'react';
import './styles.css';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { hide as hideSettings, toggleHints } from '../../actions/setting';

let Settings = ({ visible, hints, hideSettings, toggleHints }) =>
  visible &&
  <div className="settings" >
    <button className="close" onClick={hideSettings} >
      <img className="close__img" src="/assets/icon-close.svg" alt="icon close" />
    </button>
    <h1>Settings</h1>
    <form>
      <label>
        <input type="checkbox" checked={hints} onChange={toggleHints} />
        Show hints
      </label>
    </form>
  </div>

let mapStateToProps = ({ settings: { visible, hints } }) => ({ visible, hints });

let mapDispatchToProps = {
  hideSettings,
  toggleHints
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Settings);