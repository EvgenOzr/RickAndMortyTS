import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const _api = 'https://rickandmortyapi.com/api'

export const RaMApi = createApi({
    reducerPath: 'ramApi',
    baseQuery: fetchBaseQuery({baseUrl: _api}),
    endpoints: (build) => ({
        fetchAllCharacters: build.query({
            query: () => ({
                url: '/character',
            })
        }),
        fetchAllLocation: build.query({
            query: () => ({
                url: '/location',
            })
        }),
        fetchAllEpisode: build.query({
            query: () => ({
                url: '/episode',
            })
        }),
        
    })
})