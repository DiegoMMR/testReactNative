import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  results: [
  ],
};
 
const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      const { results } = state;
      results.unshift(action.payload)
      
      const newState = { results }
      return newState;
    default:
      return state
  }
};
 
export default combineReducers({
  results: resultsReducer
});