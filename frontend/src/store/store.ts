import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { courseReducer } from "./course/courseReducer";
import { currentVideoReducer } from "./currentVideo/currentVideoReducer";
import { playerReducer } from "./player/playerReducer";
import { teacherReducer } from "./teacher/teacherReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  player: playerReducer,
  currentVideo: currentVideoReducer,
  course: courseReducer,
  user: userReducer,
  teacher: teacherReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;