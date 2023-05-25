import React from "react";
import HomePageBanner from "../../components/home/HomePageBanner";
import TopCategories from "../../components/home/TopCategories";
import TopTenders from "../../components/home/TopTenders";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";

class HomePageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            show_forget_password: false,
        };
    }

    componentDidMount() {
        this.props.getHomePageData({ type: "home_page" });
        this.props.getAuthRecord({ type: "auth_record" });
    }

    handleShowPassword = () => {
        this.setState({
            show_forget_password: !this.state.show_forget_password,
        });
    };

    render() {
        const { isLoading } = this.props.home_page;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <main className='bodyMain'>
                {/* Banner with map and login component */}
                <HomePageBanner
                    login_description={this.props?.auth_record?.login_description}
                    login_title={this.props?.auth_record?.login_title}
                    forget_password={this.props?.auth_record?.forget_password}
                    handleShowPassword={this.handleShowPassword}
                    show={this.state.show_forget_password}
                />

                <TopCategories data={this.props.home_page?.data} />

                <TopTenders data={this.props.home_page?.data} />
            </main>
        );
    }
}

export default HomePageContainer;
