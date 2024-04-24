import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./Reducer";
const store = configureStore({
  reducer: {
    add: sliceReducer,
  },
});
export default store;
