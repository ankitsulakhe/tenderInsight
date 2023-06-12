import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/cookies";
import SearchBar from "../../pages-old/searchBar/SearchBar";
import ForgetPassword from "../common/ForgetPassword";
import Login from "../common/Login";
import WorldMap from "react-svg-worldmap";
import ProfileSidebar from "./ProfileSidebar";

function HomePageBanner({ login_title, login_description, forget_password, handleShowPassword, show, countryData }) {
    return (
        <section className="mainBanner p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md-8 px-0 flevalgin`}>
                        <WorldMap
                            color="#003c5e"
                            borderColor="#003c5e"
                            size="responsive"
                            data={countryData}
                            richInteraction
                        />
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
                            <div className="col-md-4 bg-grey">
                                <ProfileSidebar data={isAuth()} />
                            </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default HomePageBanner;