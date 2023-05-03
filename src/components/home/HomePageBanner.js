import SearchBar from "../../pages-old/searchBar/SearchBar";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";

function HomePageBanner() {
    return (
        <section className="mainBanner p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 px-0 flevalgin">
                        <img src="https://bidsinfoglobal.com/static/media/map.390c425edf46634a76e6.png" alt="mapImage" className="imgWorldMap" />
                        <SearchBar />
                    </div>
                    <div className="col-md-4 bg-grey">
                        <div className="homeLoginMain">
                            <div className="section-title pb-0">
                                <h3>Customer Login</h3>
                            </div>

                            {/* Login Div Start here  */}
                            <Login />
                            {/* Login Div End here  */}

                            {/* forgot Div start here  */}
                            <ForgetPassword />
                            {/* forgot Div End here  */}

                            <div className="loginBottom">
                                <div className="loginbtmtext text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    <span className="d-block createLink">
                                        Click for New User
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageBanner;