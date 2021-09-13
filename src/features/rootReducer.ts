import { combineReducers } from "redux";
import userStateReducer from "./user/userSlice";
import modalStateReducer from "./modal/modalSlice";
import alarmStateReducer from "./alarm/alarmSlice";
import markdownStateReducer from "./markdown/markdownSlice";
const rootReducer = combineReducers({
  userState: userStateReducer,
  modalState: modalStateReducer,
  alarmState: alarmStateReducer,
  markdownState: markdownStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
