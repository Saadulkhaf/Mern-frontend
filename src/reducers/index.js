import userReducer from "./userReducer";
import postsReducer from "./postsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  postsReducer,
});

export default rootReducer;
