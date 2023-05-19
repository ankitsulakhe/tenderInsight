import { axios } from "../../helpers/axios";
import { CONTACT_US_SUBMIT, DROP_DEMO_REQUEST } from "./commonConstants";

export const api_drop_demo_request = async (payload) => {
    return axios.post(DROP_DEMO_REQUEST, payload);
}

export const api_contact_us_submit = async (payload) => {
    return axios.post(CONTACT_US_SUBMIT, payload);
}