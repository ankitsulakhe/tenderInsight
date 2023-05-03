import { axios } from "../../helpers/axios";
import { GET_CMS_DATA } from "./resumeConstants";

export const api_get_cms_records = async (params) => {
    return axios.get(GET_CMS_DATA, { params });
}