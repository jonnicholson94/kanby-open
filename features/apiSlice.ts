
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ['Tasks'],
    endpoints: builder => ({
        fetchTasks: builder.query({
            query: (user_id) => ({
                url: `/fetchTasks`,
                params: {
                    user_id
                }
            }),
            providesTags: ['Tasks'],
            transformResponse: (response) => response
        }),
        fetchSingleTask: builder.query({
            query: (task_id) => ({
                url: `/fetchSingleTask`,
                params: {
                    task_id
                }
            }),
            providesTags: ['Tasks'],
            transformResponse: (response) => response
        }),
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

export const { useFetchTasksQuery, useFetchSingleTaskQuery, useAddNewTaskMutation } = apiSlice


