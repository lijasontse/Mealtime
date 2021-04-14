import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './business_reducer';
import reviewsReducer from './review_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;