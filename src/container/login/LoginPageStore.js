import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../store/cms/cmsApis";

const mapStateToProps = (state) => {
    return {
        auth_record: api.endpoints.getAuthRecord.select({ type: "auth_record" })(state),
    }
}

const mapDispatch = {
    getAuthRecord: api.endpoints.getAuthRecord.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;