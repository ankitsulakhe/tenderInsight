import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cmsApis from "../../store/cms/cmsApis";
import { dropDemoRequestSubmit } from "../../store/common/commonSlice";
import mastersApis from "../../store/masters/mastersApis";

const mapStateToProps = (state) => {
    return {
        eprocurment_page: cmsApis.endpoints.getEprocurementPageData.select({ type: "eprocurment_page" })(state),
        eprocurment_records: cmsApis.endpoints.getEprocurementRecordData.select({ type: "eprocurment_records" })(state),
        country_all: mastersApis.endpoints.getCountryData.select()(state),
        drop_demo_submit_loading: state.common.drop_demo_submit_loading,
        drop_demo_response: state.common.drop_demo_response,
    }
}

const mapDispatch = {
    getEprocurementPageData: cmsApis.endpoints.getEprocurementPageData.initiate,
    getEprocurementRecordData: cmsApis.endpoints.getEprocurementRecordData.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
    dropDemoRequestSubmit
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;