import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum MessageType {
  default = 0,
  success = 1,
  failed = 2,
  warning = 3,
}

interface Alarm {
  message: string;
  type: MessageType;
}

let initialState = {
  message: "message",
  type: MessageType.default,
} as Alarm;

// immer will ensure mutable
const AlarmState = createSlice({
  name: "alarmState",
  initialState,
  reducers: {
    setAlarmAndShow(state, action: PayloadAction<Alarm>) {
      console.log(action.payload.message);
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    setAlarmDefault(state, action: PayloadAction<MessageType>) {
      state.type = action.payload;
    },
  },
});

export const { setAlarmAndShow, setAlarmDefault } = AlarmState.actions;
export default AlarmState.reducer;
