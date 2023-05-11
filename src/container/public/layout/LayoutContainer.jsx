import React from "react";

import BaseLayout from "../../../components/public/BaseLayout";
import PublicRoutes from "../../../routes/PublicRoutes";

class LayoutContainer extends React.Component {
    componentDidMount() {
        this.props.getSocialLinks({ type: "social_links" });
        this.props.getContactDetails({ type: "contact_details" });
    }

    render() {
        const { isLoading } = this.props.social_links;

        if (isLoading) return <></>;

        return (
            <BaseLayout
                params={this.props.params}
                ChildComponent={PublicRoutes}
                social_links={this.props.social_links?.data}
                contactDetails={this.props.contact_details?.data}
            />
        );
    }
}

export default LayoutContainer;
