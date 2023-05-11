import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_get_cms_records } from "./cmsApis.js";
import { timeToStale } from './cmsConstants.js';

// First, define my allowed actions
const ACTIONS = {
    abort: "abort",
    error: "error",
    start: "start",
    update: "update"
}

export const abortFetch = () => ({
    type: ACTIONS.abort
});
export const errorFetch = error => ({
    type: ACTIONS.error,
    error
});
export const startFetch = () => ({
    type: ACTIONS.start
});
export const updateFetch = payload => ({
    type: ACTIONS.update,
    payload
});

const initialState = {
    error: null,
    isFetching: false,
    lastFetched: 0,
    cms_loading: true,
    home_page: {},
    auth_record: {},
    social_links: {},
    about_us_page: {},
    contact_details: {},
    eprocurment_page: {},
    eprocurment_records: [],
    service_page: {},
    service_records: [],
    grants_info: {},
    tenders_info: {},
    project_info: {},
    contract_award_info: {},
};

export const getCmsRecords = createAsyncThunk("getCmsRecords", async (params) => {
    try {
        const result = await api_get_cms_records(params);
        return result;
    } catch (error) {
        throw new Error(error);
    }
});

export const resume = createSlice({
    name: "resume",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get cms records
        builder.addCase(getCmsRecords.pending, (state, action) => {
            state.cms_loading = true;
        });
        builder.addCase(getCmsRecords.fulfilled, (state, action) => {

        });
        builder.addCase(getCmsRecords.rejected, (state, action) => {
            state.cms_loading = false;
        });
    }
});

export const { setExperienceList } = resume.actions;

export default resume.reducer;