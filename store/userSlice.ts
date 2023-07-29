import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  id: number;
  name: string;
  token: string;
  restaurantId: number;
};

const initialState = {
  id: 1,
  name: "Lexeor",
  token: "123qwe",
  restaurantId: 1,
} as InitialStateType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action) => {
      let { id, name, token, restaurantId } = action.payload;
      state.id = id;
      state.name = name;
      state.token = token;
      state.restaurantId = restaurantId;
    },
  },
});

export default userSlice.reducer;
export const { set } = userSlice.actions;
