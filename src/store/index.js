import { combineReducers, createStore } from 'redux';

import { listsReducer } from './reducers/lists';
import { todosReducer } from './reducers/todos';

const rootReducer = combineReducers({
  todo: todosReducer,
  list: listsReducer
});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);