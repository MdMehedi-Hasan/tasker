import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/tasks/user/userSlice";
import { baseApi } from "./api/baseApi";

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: userSlice,
        [baseApi.reducerPath]:baseApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(baseApi.middleware),

})

export default store;