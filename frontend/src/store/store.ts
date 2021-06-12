import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { courseReducer } from "./course/courseReducer";
import { currentVideoReducer } from "./currentVideo/currentVideoReducer";
import { playerReducer } from "./player/playerReducer";

const rootReducer = combineReducers({ player: playerReducer, currentVideo: currentVideoReducer, course: courseReducer })

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store;