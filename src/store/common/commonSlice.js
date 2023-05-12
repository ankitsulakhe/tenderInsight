import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_drop_demo_request } from "./commonApis";

// initial state that can be used in anywhere in the current application
const initialState = {
    snackbar: {
        open: false,
        message: "",
        severity: "info",
    },
    authentication_loading: false,
    drop_demo_submit_loading: false,
    drop_demo_response: null
};

export const dropDemoRequestSubmit = createAsyncThunk("dropDemoRequestSubmit", async (params) => {
    try {
        const response = await api_drop_demo_request(params);
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
    }
});

// Action creators are generated for each case reducer function
export const { setAuthenticationLoading, setSnackBar } = commonSlice.actions;

export default commonSlice;
