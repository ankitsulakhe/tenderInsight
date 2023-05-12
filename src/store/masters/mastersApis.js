import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from "../../helpers/constants";
import { getCookie } from "../../helpers/cookies";
import { GET_COUNTRY_DATA } from "./mastersConstants";

const mastersApis = createApi({
    reducerPath: 'mastersApis',
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
    tagTypes: ['country_all'],
    endpoints: build => ({
        getCountryData: build.query({
            query: (params) => ({
                url: GET_COUNTRY_DATA,
                method: "GET",
                params: {
                    pageNo: "0",
                    limit: "1000",
                    sortBy: "1",
                    sortField: "name",
                }
            }),
            transformResponse: (response) => response.result?.result,
            providesTags: ['country_all'],
        }),
    }),
});

export default mastersApis;