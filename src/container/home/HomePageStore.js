import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthenticationLoading } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    const { authentication_loading } = state.common;

    return {
        authentication_loading,
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setAuthenticationLoading }, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;