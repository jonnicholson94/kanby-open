
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Task } from '../types/dataSchema'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "/api"
     }),
    tagTypes: ['Tasks', 'IndividualTask', "SubTask"],
    endpoints: builder => ({
        fetchTasks: builder.query({
            query: (user_id) => ({
                url: `/fetchTasks`,
                params: {
                    user_id
                }
            }),
            providesTags: ['Tasks'],
            transformResponse: (response: Task[]) => response
        }),
        fetchSingleTask: builder.query({
            query: (task_id) => ({
                url: `/fetchSingleTask`,
                params: {
                    task_id
                }
            }),
            providesTags: ['IndividualTask'],
            transformResponse: (response) => response
        }),
        fetchSubTasks: builder.query({
            query: (task_id) => ({
                url: "/fetchSubTasks",
                params: {
                    task_id
                }
            }),
            providesTags: ['SubTask'],
            transformResponse: (response) => response
        }),
        updateTask: builder.mutation({
            query: body => {
                return {
                    url: '/updateTask',
                    method: 'PUT',
                    body
                }
            },
            transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
            invalidatesTags: ['IndividualTask', 'Tasks']
        }),
        deleteTask: builder.mutation({
            query: body => ({
                url: "/deleteTask",
                method: "DELETE",
                body
            }),
            transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
            invalidatesTags: ['Tasks']
        }),
        addNewTask: builder.mutation({
            query: body => ({
                url: "/createTask",
                method: "POST",
                body
            }),
            transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
            invalidatesTags: ['Tasks']
        }),
        saveComment: builder.mutation({
            query: (body) => {
                return {
                    url: '/addComment',
                    method: 'put',
                    body
                }
            },
            transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
        }),
        addSubTask: builder.mutation({
            query: (body) => {
                return {
                    url: '/addSubTask',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['SubTask']
        }),
        updateSubTask: builder.mutation({
            query: (body) => {
                return {
                    url: '/updateSubTask',
                    method: 'PUT',
                    body
                }
            }
        })
    })
})

export const { useFetchTasksQuery, useFetchSingleTaskQuery, useFetchSubTasksQuery, useUpdateTaskMutation, useDeleteTaskMutation, useAddNewTaskMutation, useSaveCommentMutation, useAddSubTaskMutation, useUpdateSubTaskMutation } = apiSlice


