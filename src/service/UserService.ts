import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IPost } from "../models/IPost"

const json = 'https://jsonplaceholder.typicode.com'
const local = 'http://localhost:5000'
export const UserApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: json}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IPost[], number>({
            query: (limit: 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post']
        })
    })
})