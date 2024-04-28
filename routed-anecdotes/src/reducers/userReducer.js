import { createSlice } from "@reduxjs/toolkit";
import Login from "../components/Login";

const users = [
    {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
        password: 'salainen'
    },
    {
        username: 'root',
        name: 'Superuser',
        password: 'salainen'
    }
]

const userSlicer = createSlice({
    name: 'user',
    initialState: false,
    reducers: {
        setLogin(state, action) {
            const { username, password } = action.payload
            const user = users.map(user => user.username === username && user.password === password)
            console.log(user)
            if (user) {
                return true
            } else {
                return false
            }
        },
        logOut(state, action) {
            return false
        }
    }
})

export const { setLogin, logOut } = userSlicer.actions
export default userSlicer.reducer