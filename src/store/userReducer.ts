import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    email: string
    uid: string
}

interface IUserReducer {
    profile: IUser | null
}

const initialState: IUserReducer = {
    profile: null
}
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.profile = payload
            console.log(payload)
        },
        logout: (state) => {
            state.profile = null
        }
    }
})

export const { login, logout } = userReducer.actions 
export default userReducer.reducer