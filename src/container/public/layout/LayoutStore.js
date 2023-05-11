import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../../store/cms/cmsApis";

const mapStateToProps = (state) => {
  return {
    social_links: api.endpoints.getSocialLinks.select({ type: "social_links" })(state),
    contact_details: api.endpoints.getContactDetails.select({ type: "contact_details" })(state),
  };
};

const mapDispatch = {
  getSocialLinks: api.endpoints.getSocialLinks.initiate,
  getContactDetails: api.endpoints.getContactDetails.initiate,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
  connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
