import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    users: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setItems, setUsers } = itemsSlice.actions;
export default itemsSlice.reducer;
