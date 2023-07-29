import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, RestaurantType } from "./types";

const initialState = {
  id: 1,
  name: "Lexeor",
  token: "123qwe",
  restaurant: {
    id: 1,
    name: "Test Restaurant #1",
    address: "Test Street 1, 25, lit B",
    menu: 1,
  } as RestaurantType,
} as UserType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action) => {
      let { id, name, token, restaurant } = action.payload;
      state.id = id;
      state.name = name;
      state.token = token;
      state.restaurant = restaurant;
    },
  },
});

export default userSlice.reducer;
export const { set } = userSlice.actions;
