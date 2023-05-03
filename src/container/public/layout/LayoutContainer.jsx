import React from "react";

import BaseLayout from "../../../components/public/BaseLayout";
import PublicRoutes from "../../../routes/PublicRoutes";

class LayoutContainer extends React.Component {
    render() {
        return (
            <BaseLayout
                params={this.props.params}
                ChildComponent={PublicRoutes}
            />
        );
    }
}

export default LayoutContainer;
