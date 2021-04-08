import { 
  RECEIVE_BUSINESS, 
  RECEIVE_BUSINESSES 
} from '../actions/business_actions';

const businessesReducer = (state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      nextState[action.business.id] = action.business;
      return nextState;
    default:
      return state;
  }
};

export default businessesReducer;