import React from "react";
import ProfileSidebar from "../../components/home/ProfileSidebar";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import ProfileComponent from "../../components/auth/ProfileComponent";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        this.props.getCountryData();
        this.props.getCustomerProfile();
    }

    handleSubmit = (payload) => {
        this.props.submitCustomerProfile(payload);
    };

    render() {
        const { status, data } = this.props.profile;

        if (status !== "fulfilled") return <FullScreenLoadingGrow />;

        return (
            <main className='bodyMain'>
                <section className='profileInner'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8 signupPagePadding'>
                                <div className='homeLoginMain'>
                                    <div className='section-title pb-0'>
                                        <h3>Ketan Patel - Profile View</h3>
                                    </div>
                                    <div
                                        className='mainBoxLogin commonBoxShadow'
                                        id='loginBox'
                                    >
                                        <div className='section-title-p text-center loginBox'>
                                            <ProfileComponent
                                                data={data}
                                                navigate={this.props.navigate}
                                                countryRecord={
                                                    this.props.country_all
                                                        .data || []
                                                }
                                                submit={this.handleSubmit}
                                                loading={
                                                    this.props.update_loading
                                                }
                                                success={this.props.success}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 bg-grey'>
                                <ProfileSidebar
                                    full_name={data?.full_name}
                                    uid={data?.uid}
                                    last_logged_in={data?.last_logged_in}
                                    validity={data?.validity}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ProfilePageContainer;
