import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceProps {
  number: string;
}

const initialState: AuthSliceProps = {
  number: "",
};

export const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    saveNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveNumber } = AuthSlice.actions;

export default AuthSlice.reducer;
