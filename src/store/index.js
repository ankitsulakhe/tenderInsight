import { configureStore } from "@reduxjs/toolkit";

import axiosInterceptor from "../helpers/axios.js";
import commonSlice from "./common/commonSlice.js";
// import resumeSlice from "./resume/resumeSlice.js";

const store = configureStore({
  reducer: {
    common: commonSlice,
    // resume: resumeSlice,
  },
});

axiosInterceptor(store.dispatch);

export { store };
