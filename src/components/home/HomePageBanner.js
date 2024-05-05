import { Link, useLocation } from "react-router-dom";
import { isAuth } from "../../helpers/cookies";
import SearchBar from "./SearchBar";
import ForgetPassword from "../common/ForgetPassword";
import Login from "../common/Login";
import WorldMap from "react-svg-worldmap";
import ProfileSidebar from "./ProfileSidebar";
import ResetPassword from "../common/ResetPassword";
import BannerVider from "../../bgVideo.mp4"

function HomePageBanner({ login_title, login_description, forget_password, handleShowPassword, show, countryData, navigate, params, getRegionsData, getSectorsData, getCountryData }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const handleClick = (e) => {
        if (e.countryValue) {
            let country = countryData.find((obj) => obj.str_code === e.countryCode);
            console.log(country, "country");
            navigate("/tenders-list", { state: { country: [country] } })
        }
    }

    return (
        <section className="mainBanner p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md-12 px-0 flevalgin`}>                   
                    <video id="bannerVideo" autoPlay muted loop>
                       <source src={BannerVider} type="video/mp4" />
                    </video>                    
                    </div>
                    <div className="seacrh_bar">
                        <div className="bannerText">
                            <h1>Stay ahead with<br/> Competition Analysis Report</h1>
                            <h2>Get detailed insights into your competitors' bidding behaviour</h2>
                        </div>
                    <SearchBar navigate={navigate} getRegionsData={getRegionsData} getSectorsData={getSectorsData} getCountryData={getCountryData} />
                   
                    </div>
                    {/* {
                        queryParams.get("token") && queryParams.get("reset") === "password"
                            ?
                            <div className="col-md-4 bg-grey">
                                <div className="homeLoginMain">
                                    <div className="section-title pb-0">
                                        <h3>Reset Password</h3>
                                    </div>
                                    <ResetPassword token={queryParams.get("token")} />
                                </div>
                            </div>
                            :
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
                                    <ProfileSidebar {...isAuth()} />
                                </div>
                    }
                    <div className="full-wid">
                    </div> */}
                </div>
            </div >
        </section >
    )
}

export default HomePageBanner;