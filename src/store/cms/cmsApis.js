import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from "../../helpers/constants";
import { getCookie } from "../../helpers/cookies";
import { GET_CMS_DATA } from "./cmsConstants";

const cmsApi = createApi({
    reducerPath: 'cmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getCookie("token");
            if (token) {
                headers.set('Authorization', `${token}`)
            }
            return headers;
        }
    }),
    keepUnusedDataFor: 30,
    tagTypes: ['home_page', "auth_record", "social_links", "contact_details"],
    endpoints: build => ({
        getHomePageData: build.query({
            query: (params) => ({
                url: GET_CMS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.result,
            providesTags: ['home_page'],
        }),
        getAuthRecord: build.query({
            query: (params) => ({
                url: GET_CMS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.result,
            providesTags: ['auth_record'],
        }),
        getSocialLinks: build.query({
            query: (params) => ({
                url: GET_CMS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.result,
            providesTags: ['social_links'],
        }),
        getContactDetails: build.query({
            query: (params) => ({
                url: GET_CMS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.result,
            providesTags: ['contact_details'],
        }),
        getAboutUsData: build.query({
            query: (params) => ({
                url: GET_CMS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.result,
            providesTags: ['about_us_page'],
        }),
    }),
});

export default cmsApi;