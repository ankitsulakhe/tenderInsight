import React, { Component } from "react";
import wordMap from "./map.png";
import radar from "./radar.png";
import defence from "./defence.png";
import consultation from "./consultation.png";
import pharmaceutical from "./pharmaceutical.png";
import patient from "./patient.png";
import transportation from "./transportation.png";
import airport from "./airport.png";
import architect from "./architect.png";
import SearchBar from "../searchBar/SearchBar";

class HomePage extends Component {
  render() {
    return (
      <main className="bodyMain">
        <section className="mainBanner p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 px-0 flevalgin">
                <img src={wordMap} alt="mapImage" className="imgWorldMap" />
                <SearchBar></SearchBar>
              </div>
              <div className="col-md-4 bg-grey">
                <div className="homeLoginMain">
                  <div className="section-title pb-0">
                    <h3>Customer Login</h3>
                  </div>

                  {/* Login Div Start here  */}
                  <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                    <div className="section-title-p text-center loginBox">
                      <p className="wid100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <form
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="form-group mb-40">
                            <label>Username</label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div className="form-group mb-40">
                            <label>Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Your Password"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="commonBtn loginBtn">
                            Login
                          </button>
                        </div>
                      </form>
                      <span className="d-block forgotLink" id="fogotLoginbtn">
                        Forgot Password?{" "}
                      </span>
                    </div>
                  </div>
                  {/* Login Div End here  */}

                  {/* forgot Div start here  */}
                  <div
                    className="mainBoxLogin commonBoxShadow d-none"
                    id="forgotBox"
                  >
                    <div className="section-title-p text-center loginBox">
                      <p className="wid100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <form
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="form-group mb-40">
                            <label>Email</label>
                            <input
                              type="email"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="commonBtn loginBtn">
                            Login
                          </button>
                        </div>
                      </form>
                      <span className="d-block forgotLink" id="backloginbtn">
                        Back to login{" "}
                      </span>
                    </div>
                  </div>
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
        <section id="TopTenders" className="services ">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Tenders</h2>
              <h3>
                Top <span>Categories</span>
              </h3>
              <p className="lg-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={defence} />
                  </div>
                  <h4>
                    <a href="">Defence</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={radar} />
                  </div>
                  <h4>
                    <a href="">Telecommunication </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={defence} />
                  </div>
                  <h4>
                    <a href="">Engineering & Consultancy</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={consultation} />
                  </div>
                  <h4>
                    <a href="">Construction </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={airport} />
                  </div>
                  <h4>
                    <a href="">Aviation </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={transportation} />
                  </div>
                  <h4>
                    <a href="">Transportation </a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={patient} />
                  </div>
                  <h4>
                    <a href="">Medical & Healthcare</a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={pharmaceutical} />
                  </div>
                  <h4>
                    <a href="">Pharmaceutical </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={radar} />
                  </div>
                  <h4>
                    <a href="">Information Technology </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={consultation} />
                  </div>
                  <h4>
                    <a href="">Textile </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={airport} />
                  </div>
                  <h4>
                    <a href="">Automobile </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon nobg">
                    <img src={architect} />
                  </div>
                  <h4>
                    <a href="">Water And Sanitation </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="GlobalTenders" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Various</h2>
              <h3>
                Top <span>Tenders</span>
              </h3>
              <p className="lg-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-12 align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="tender_tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        <i className="bx bx-globe"></i>Global Tenders
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        <i className="bx bx-globe"></i>Indian Tenders
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                      tabindex="0"
                    >
                      <div className="services TabIconList">
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Software Services</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabindex="0"
                    >
                      <div className="services TabIconList">
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                        <div className="icon-box tabsIcon">
                          <div className="tabListHeader">
                            <h4>Sectors : Metals and Non-Metals</h4>
                          </div>
                          <div className="tablistbody">
                            <h4>
                              <a href="">
                                2023 Regional Management Development Conference
                              </a>
                            </h4>
                          </div>
                          <div className="tabListFooter">
                            <span>
                              <strong>Ref No</strong>: 485565659{" "}
                            </span>
                            <span>
                              <strong>Due Date</strong> : 14 Mar 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default HomePage;
