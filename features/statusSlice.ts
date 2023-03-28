
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false,
    message: "",
    type: ""
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        displayStatus(state, action) {
            const { payloadMessage, payloadType } = action.payload
            state.display = true,
            state.message = payloadMessage 
            state.type = payloadType
        },
        hideStatus(state) {
            state.display = false
            state.message = ""
            state.type = ""
        },
    }
})

export default statusSlice.reducer

export const { displayStatus, hideStatus } = statusSlice.actions