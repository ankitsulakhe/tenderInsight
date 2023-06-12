import React from "react";
import ProfileSidebar from "../../components/home/ProfileSidebar";
import ForgotPasswordComponent from "../../components/auth/ForgotPasswordComponent";

class PasswordPageContainer extends React.Component {
    handleSubmit = (payload) => {
        this.props.updatePassword(payload);
    };

    render() {
        console.log(this.props.error);
        return (
            <main className='bodyMain'>
                <section className='profileInner'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8 signupPagePadding'>
                                <div className='homeLoginMain'>
                                    <div className='section-title pb-0'>
                                        <h3>Ketan Patel - Password</h3>
                                    </div>
                                    <div
                                        className='mainBoxLogin commonBoxShadow'
                                        id='loginBox'
                                    >
                                        <div className='section-title-p text-center loginBox'>
                                            <ForgotPasswordComponent
                                                navigate={this.props.navigate}
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
                                <ProfileSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default PasswordPageContainer;
