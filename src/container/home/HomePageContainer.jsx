import React from "react";
import HomePageBanner from "../../components/home/HomePageBanner";
import TopTenders from "../../components/home/TopTenders";

class HomePageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isError: false,
        };
    }

    render() {
        const { authentication_loading } = this.props;

        return (
            <main className='bodyMain'>
                {/* Banner with map and login component */}
                <HomePageBanner />

                <TopTenders />
            </main>
        );
    }
}

export default HomePageContainer;
