import { createSlice } from "@reduxjs/toolkit";

// initial state that can be used in anywhere in the current application
const initialState = {
    snackbar: {
        open: false,
        message: "",
        severity: "info",
    },
    authentication_loading: false
};

export const common = createSlice({
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
});

// Action creators are generated for each case reducer function
export const { setAuthenticationLoading, setSnackBar } = common.actions;

export default common.reducer;
