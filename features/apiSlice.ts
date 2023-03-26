
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ['Tasks'],
    endpoints: builder => ({
        addNewTask: builder.mutation({
            query: body => ({
                url: "/createTask",
                method: "POST",
                body
            }),
            transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
            invalidatesTags: ['Tasks']
        })
    })
})

export const { useAddNewTaskMutation } = apiSlice


