import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/cookies";
import SearchBar from "../../pages-old/searchBar/SearchBar";
import ForgetPassword from "../common/ForgetPassword";
import Login from "../common/Login";

function HomePageBanner({ login_title, login_description, forget_password, handleShowPassword, show }) {
    return (
        <section className="mainBanner p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md-${isAuth() ? '12' : '8'} px-0 flevalgin`}>
                        <img src="https://bidsinfoglobal.com/static/media/map.390c425edf46634a76e6.png" alt="mapImage" className="imgWorldMap" />
                        <SearchBar />
                    </div>
                    {
                        !isAuth() ?
                            <div className="col-md-4 bg-grey">
                                <div className="homeLoginMain">
                                    <div className="section-title pb-0">
                                        <h3>{login_title}</h3>
                                    </div>
                                    <Login
                                        login_description={login_description}
                                        handleShowPassword={() => handleShowPassword()}
                                        hide={show}
                                    />
                                    <ForgetPassword
                                        forget_password={forget_password}
                                        show={show}
                                        handleShowPassword={() => handleShowPassword()}
                                    />
                                    <Link className="loginBottom" to={"/login"}>
                                        <div className="loginbtmtext text-center">
                                            <span className="d-block createLink">
                                                Click for New User
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            :
                            null
                    }

                </div>
            </div>
        </section>
    )
}

export default HomePageBanner;