import { combineReducers } from "redux";
import userStateReducer from "./user/userSlice";
import modalStateReducer from "./modal/modalSlice";
import alarmStateReducer from "./alarm/alarmSlice";
const rootReducer = combineReducers({
  userState: userStateReducer,
  modalState: modalStateReducer,
  alarmState: alarmStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
