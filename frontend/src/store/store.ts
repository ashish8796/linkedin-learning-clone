import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const rootReducer = combineReducers({})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store;