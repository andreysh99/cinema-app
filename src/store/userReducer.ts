import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { login, logout } = userReducer.actions 
export default userReducer.reducer