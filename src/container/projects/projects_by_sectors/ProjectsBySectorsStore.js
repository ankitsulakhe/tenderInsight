import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mastersApis from "../../../store/masters/mastersApis";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatch = {
    getSectorsData: mastersApis.endpoints.getSectorsData.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;