import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/tasks/user/userSlice";
import { baseUrl } from "./api/baseUrl";

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: userSlice,
        [baseUrl.reducerPath]:baseUrl.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(baseUrl.middleware),

})

export default store;