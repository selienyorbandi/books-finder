import { createSlice } from "@reduxjs/toolkit";
import { adaptUser } from "../../adapters/user.adapter";
import { userSliceEmptyState } from "../../models/user.interface";

const userSlice = createSlice({
  name: "user",
  initialState: userSliceEmptyState,
  reducers: {
    logOutUser: () => {
      return userSliceEmptyState;
    },
    logInUser: (_, action) => {
      return adaptUser(action.payload);
    },
  },
});

export const { logOutUser, logInUser } = userSlice.actions;
export default userSlice.reducer;
