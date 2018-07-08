import initial from '../store/initial';

import * as personActions from '../actions/person';
import * as personReducers from './person';

import * as answerActions from '../actions/answer';
import * as answerReducers from './answer';

import * as settingActions from '../actions/setting';
import * as settingReducers from './setting';

let defaultReducer = (state) => ({ ...state });

let allReducers = {
  [personActions.updateAll]: personReducers.updateAll,
  [answerActions.resetAll]: answerReducers.resetAll,
  [settingActions.show]: settingReducers.show,
  [settingActions.hide]: settingReducers.hide
};

let reducers = (state = initial, action) => {
  let performReducer = allReducers[action.type] || defaultReducer;
  return performReducer(state, action);
};

export default reducers;