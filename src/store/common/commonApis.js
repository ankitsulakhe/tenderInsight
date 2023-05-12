import { axios } from "../../helpers/axios";
import { DROP_DEMO_REQUEST } from "./commonConstants";

export const api_drop_demo_request = async (payload) => {
    return axios.post(DROP_DEMO_REQUEST, payload);
}