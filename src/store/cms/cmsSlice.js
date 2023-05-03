import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_get_cms_records } from "./resumeApis";

const initialState = {
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
    reducers: {
        setExperienceList: (state, action) => {
            state.show_experience_list = action.payload;
        },
        setEducationList: (state, action) => {
            state.show_education_list = action.payload;
        },
        setCustomSectionList: (state, action) => {
            state.show_custom_section_list = action.payload;
        },
        addSkillsData: (state, action) => {
            state.skillsData = action.payload;
        },
        setSelectedTemplate: (state, action) => {
            state.selected_template = action.payload;
        },
        setSelectedSingleResume: (state, action) => {
            state.single_user_resume = action.payload;
        },
        setSuggestion: (state, action) => {
            state.suggestionRecord = action.payload;
        },
    },
    extraReducers: (builder) => {
        // get cms records
        builder.addCase(getCmsRecords.pending, (state, action) => {
            state.cms_loading = true;
        });
        builder.addCase(getCmsRecords.fulfilled, (state, action) => {
            const { result } = action.payload;
            console.log(action, "action");
            state.cms_loading = false;
        });
        builder.addCase(getCmsRecords.rejected, (state, action) => {
            state.cms_loading = false;
        });
    }
});

export const { setExperienceList } = resume.actions;

export default resume.reducer;