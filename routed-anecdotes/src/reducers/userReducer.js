import { createSlice } from "@reduxjs/toolkit";
import users from "../data/users"

const userSlicer = createSlice({
    name: 'user',
    initialState: { user: null, loggedIn: false},
    reducers: {
        setLogin(state, action) {
            const { username, password } = action.payload
            const user = users.filter(user => user.username === username && user.password === password)
            console.log(user)
            if (user.length === 1) {
                return { user: user[0].username, loggedIn: false }
            } else {
                return { user: null, loggedIn: false }
            }
        },
        logOut(state, action) {
            return { user: null, loggedIn: false }
        }
    }
})

export const { setLogin, logOut } = userSlicer.actions
export default userSlicer.reducer