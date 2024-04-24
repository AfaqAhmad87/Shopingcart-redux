import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "array",
  initialState: {
    array: [],
  },
  reducers: {
    addtocart(state, action) {
      const find = state.array.find((value, index) => index === action.payload);
      if (find) {
        alert("Cannot add Same item again ");
      } else {
        state.array.push(action.payload);
      }
    },
    deleteitem(state, action) {
      const res = state.array.filter((val, index) => {
        return action.payload !== index;
      });
      state.array = res;
    },
  },
});
export const { addtocart, deleteitem } = slice.actions;

export default slice.reducer;
