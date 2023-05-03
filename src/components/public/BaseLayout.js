import { Fragment } from "react";
import Header from "../layouts/header";
import Topbar from "../layouts/topbar";
import Footer from "../layouts/footer";

const BaseLayout = (props) => {

    const { ChildComponent } = props;

    return (
        <div className='wrapper'>
            <Topbar />
            <Header />

            <ChildComponent />

            <Footer />
        </div>
    )

}

export default BaseLayout;