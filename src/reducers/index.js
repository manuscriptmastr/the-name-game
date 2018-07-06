import initial from '../store/initial';
import * as personActions from '../actions/person';
import * as personReducers from './person';

let defaultReducer = (state) => ({ ...state });

let allReducers = {
  [personActions.updateAll]: personReducers.updateAll
};

let reducers = (state = initial, action) => {
  let performReducer = allReducers[action.type] || defaultReducer;
  return performReducer(state, action);
};

export default reducers;