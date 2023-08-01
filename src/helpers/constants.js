const NODE_ENV = "https://bidsinfoglobal.com/api"; // local development

export const searchType = ["Any Word", "Exact Phrase", "Relevant Word"];
export const geoLocationKeyword = ["Regions", "Country", "State & City"];
export const competitionType = ["Domestic", "International", "Both"];
export const noticeTypeConst = ["Tender", "Project", "Contract Award", "Grants"];
export const tenderTypeConst = ["Live", "Archive"];

export const loginApi = "/auth/customer-login";
export const registerApi = "/auth/customer-register";
export const forgetUserApi = "/auth/forgot-password";

export const baseUrl = NODE_ENV;