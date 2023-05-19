import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_contact_us_submit, api_drop_demo_request } from "./commonApis";

// initial state that can be used in anywhere in the current application
const initialState = {
    snackbar: {
        open: false,
        message: "",
        severity: "info",
    },
    authentication_loading: false,
    drop_demo_submit_loading: false,
    drop_demo_response: null,
    contact_us_submit_loading: false,
    contact_us_response: null
};

export const dropDemoRequestSubmit = createAsyncThunk("dropDemoRequestSubmit", async (payload) => {
    try {
        const response = await api_drop_demo_request(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const contactUsSubmit = createAsyncThunk("contactUsSubmit", async (payload) => {
    try {
        const response = await api_contact_us_submit(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setSnackBar: (state, action) => {
            state.snackbar = action.payload;
        },
        setAuthenticationLoading: (state, action) => {
            state.authentication_loading = action.payload.state;
        },
    },
    extraReducers: (builder) => {
        // drop demo request
        builder.addCase(dropDemoRequestSubmit.pending, (state, action) => {
            state.drop_demo_submit_loading = true;
        });
        builder.addCase(dropDemoRequestSubmit.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.drop_demo_response = data.result;
            state.drop_demo_submit_loading = false;
        });
        builder.addCase(dropDemoRequestSubmit.rejected, (state, action) => {
            state.drop_demo_submit_loading = false;
        });
        // contact us submit
        builder.addCase(contactUsSubmit.pending, (state, action) => {
            state.contact_us_submit_loading = true;
        });
        builder.addCase(contactUsSubmit.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.contact_us_response = data.result;
            state.contact_us_submit_loading = false;
        });
        builder.addCase(contactUsSubmit.rejected, (state, action) => {
            state.contact_us_submit_loading = false;
        });
    }
});

// Action creators are generated for each case reducer function
export const { setAuthenticationLoading, setSnackBar } = commonSlice.actions;

export default commonSlice;
