
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import statusSlice from "./statusSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
    reducer: {
        status: statusSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch