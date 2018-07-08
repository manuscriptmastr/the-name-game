import React from 'react';
import './styles.css';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { resetAll as resetAnswers } from '../../actions/answer';
import { hide as hideSettings, toggleHints, updateFilter } from '../../actions/setting';

let Settings = ({ visible, hints, filter, hideSettings, toggleHints, updateFilter }) =>
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

      <label>
        First name begins with:
        <input type="text" placeholder="(substring)" value={filter} onChange={(e) => updateFilter(e.target.value)} />
      </label>
    </form>
  </div>

let mapStateToProps = ({ settings: { visible, hints, filter } }) => ({ visible, hints, filter });

let mapDispatchToProps = {
  resetAnswers,
  hideSettings,
  toggleHints,
  updateFilter
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    updateFilter: ({ updateFilter, resetAnswers }) => (substring) => {
      updateFilter(substring);
      resetAnswers();
    }
  })
);

export default enhance(Settings);