import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            return action.payload
        }
    }
})

export const { setNotification } = notificationSlice.actions

export const arrangeNotification = (content, time) => {
    return dispatch => {
        console.log('called arrangeNotification')
        dispatch(setNotification(content))
        setTimeout(() => dispatch(setNotification('')), time)
    }
}
export default notificationSlice.reducer