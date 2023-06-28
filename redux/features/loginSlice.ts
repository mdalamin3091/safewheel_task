import { createSlice } from "@reduxjs/toolkit";

interface loginState {
  phone: string;
  password: string;
}
const initialState: loginState = {
  phone: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
  },
});

export const { loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
