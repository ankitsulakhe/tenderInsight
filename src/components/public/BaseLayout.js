import Header from "../layouts/header";
import Topbar from "../layouts/topbar";
import Footer from "../layouts/footer";

const BaseLayout = (props) => {

    const { ChildComponent, social_links, contactDetails } = props;

    return (
        <div className='wrapper'>
            <Topbar email={contactDetails?.email} phone={contactDetails?.phone} />
            <Header />

            <ChildComponent />

            <Footer links={social_links} contactDetails={contactDetails} />
        </div>
    )

}

export default BaseLayout;