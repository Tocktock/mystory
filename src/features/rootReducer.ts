import { combineReducers } from "redux";
import userStateReducer from "./user/userSlice";
import modalStateReducer from "./modal/modalSlice";

const rootReducer = combineReducers({
  userState: userStateReducer,
  modalState: modalStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
