import { TabPanel, TabView } from "primereact/tabview";
import TabPanelOne from "./TabPanelOne";
import { useFormik } from "formik";
import TabPanelTwo from "./TabPanelTwo";
import TabPanelThree from "./TabPanelThree";
import TabPanelFour from "./TabPanelFour";
import { competitionType, geoLocationKeyword, noticeTypeConst, searchType, tenderTypeConst } from "../../helpers/constants";

export default function AdvanceSearch(props) {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search_type: searchType[0],
            keywords: "",
            exclude_words: "",
            cpv_codes: "",
            sectors: "",
            location_type: geoLocationKeyword[0],
            regions: "",
            state: "",
            funding_agency: "",
            contract_value: "",
            tender_no: "",
            big_ref_no: "",
            competition_type: competitionType[0],
            notice_type: noticeTypeConst[0],
            tender_type: tenderTypeConst[0],
            posting_date: [],
            closing_date: []
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 signupPagePadding'>
                    <div className='homeLoginMain'>
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div
                                className='mainBoxLogin commonBoxShadow'
                                id='loginBox'
                            >
                                <div
                                    className='section-title-p text-center loginBox'
                                    id='advabceSearch'
                                >
                                    <TabView>
                                        <TabPanel
                                            header="Keyword Search"
                                            leftIcon="pi pi-filter mr-2"
                                        >
                                            <TabPanelOne formik={formik} />
                                        </TabPanel>
                                        <TabPanel
                                            header="Product & Sector and Geographical Search"
                                            leftIcon="pi pi-map-marker mr-2"
                                        >
                                            <TabPanelTwo
                                                formik={formik}
                                                {...props}
                                            />
                                        </TabPanel>

                                        <TabPanel
                                            header="Funding Agencies & Tender Types Search"
                                            leftIcon="pi pi-search mr-2"
                                        >
                                            <TabPanelThree
                                                getFundingAgencyData={props.getFundingAgencyData}
                                                formik={formik}
                                            />
                                        </TabPanel>
                                        <TabPanel
                                            header="Key Dates"
                                            leftIcon="pi pi-calendar mr-2"
                                        >
                                            <TabPanelFour formik={formik} />
                                        </TabPanel>
                                    </TabView>

                                    <div className="text-center">
                                        <button type="submit" className="commonBtn loginBtn">
                                            <i className="pi pi-search"></i> Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}