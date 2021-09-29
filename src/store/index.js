import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { listsReducer } from './reducers/lists';
import { todosReducer } from './reducers/todos';

const rootReducer = combineReducers({
  todo: todosReducer,
  list: listsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
