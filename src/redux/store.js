import {createStore,applyMiddleware,compose} from 'redux'

import logger from 'redux-logger'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'

const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);



export const store = createStore(rootReducer,enhancer);

export const persistor= persistStore(store);

export default { store,persistor};

