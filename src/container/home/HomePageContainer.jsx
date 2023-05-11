import React from "react";
import HomePageBanner from "../../components/home/HomePageBanner";
import TopCategories from "../../components/home/TopCategories";
import TopTenders from "../../components/home/TopTenders";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";

class HomePageContainer extends React.Component {
    componentDidMount() {
        this.props.getHomePageData({ type: "home_page" });
        this.props.getAuthRecord({ type: "auth_record" });
    }

    render() {
        const { isLoading } = this.props.home_page;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <main className='bodyMain'>
                {/* Banner with map and login component */}
                <HomePageBanner data={this.props.auth_record?.data} />

                <TopCategories data={this.props.home_page?.data} />

                <TopTenders data={this.props.home_page?.data} />
            </main>
        );
    }
}

export default HomePageContainer;
