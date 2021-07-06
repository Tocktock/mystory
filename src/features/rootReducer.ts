import { combineReducers } from "redux";
import userStateReducer from "./user/userSlice";
const rootReducer = combineReducers({
  userState: userStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
