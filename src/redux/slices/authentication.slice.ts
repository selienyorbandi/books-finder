import { createSlice } from "@reduxjs/toolkit";
import { authenticationSliceEmptyState } from "../../models/authentication.interface";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationSliceEmptyState,
  reducers: {
    setAuthentication: (state, action) => {
      const authentication = {
        ...state,
        ...action.payload,
      };
      return authentication;
    },
    resetAuthentication: () => {
      return authenticationSliceEmptyState;
    },
  },
});

export const { setAuthentication, resetAuthentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;
