import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Mehedi",
    email: "mh19115@gamail.com",
    userTasks:[],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer