import { createSlice } from "@reduxjs/toolkit";
import { authorizationSliceEmptyState } from "../../models/authorization.interface";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: authorizationSliceEmptyState,
  reducers: {
    setClient: (state, action) => {
      const authorizationSlice = {
        ...state,
        client: action.payload,
      };
      return authorizationSlice;
    },
    setAuthorization: (state, action) => {
      const authorizationSlice = {
        ...state,
        ...action.payload,
      };
      return authorizationSlice;
    },
    resetAuthorization: () => {
      return authorizationSliceEmptyState;
    },
  },
});

export const { setAuthorization, resetAuthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;
