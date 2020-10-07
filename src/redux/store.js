import {createStore,applyMiddleware,compose} from 'redux'

import logger from 'redux-logger'
import rootReducer from './root-reducer'
const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);



const store = createStore(rootReducer,enhancer);

export default store;

