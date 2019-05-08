// Many of these files will look similar
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Middleware
import rootReducer from './reducers'; //Will have multiple reduces

const initialState = {}; // Empty object

const middleware = [thunk]; //Thunk is our only middleware

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
