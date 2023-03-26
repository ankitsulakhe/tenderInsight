import React, { Component } from "react";

class eprocurement extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>E - Procurement</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>E - Procurement</li>
              </ol>
            </div>
          </div>
        </section>
        <main className="bodyMain">
          <section id="about" className="about pb-2">
            <div className="container" data-aos="fade-up">
              <div className="section-title fullwidth">
                <h2>E - Procurement</h2>
                <h3 className="pt-2">
                  Welcome to <span>eProcurement System</span>
                </h3>
                <p>
                  The eProcurement System enables the companies to automate
                  their procurement processes, We BidsInfoGlobal would be glad
                  to help you automate your procurement processes. Kindly find
                  below list of E-Procurement system packages offered by
                  BidsInfoGlobal.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="about section-bg iconPlost">
            <div className="container" data-aos="fade-up">
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bxl-dribbble"></i>
                    </div>
                    <h4>
                      <a href="">Plan 2 Paye</a>
                    </h4>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-file"></i>
                    </div>
                    <h4>
                      <a href="">Sourcing</a>
                    </h4>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-tachometer"></i>
                    </div>
                    <h4>
                      <a href="">e - Rfx</a>
                    </h4>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-world"></i>
                    </div>
                    <h4>
                      <a href="">e - Catalogue Management</a>
                    </h4>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-slideshow"></i>
                    </div>
                    <h4>
                      <a href="">e - Invoices Management</a>
                    </h4>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">Budget Management</a>
                    </h4>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">PO/Contract Management</a>
                    </h4>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">Supplier Management</a>
                    </h4>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">eDisposals</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="formContact">
            <div className="container">
              <div className="row">
                <div className="col-md-12 signupPagePadding">
                  <div className="homeLoginMain">
                    <div className="section-title pb-0">
                      <h3>Drop A Demo Request</h3>
                    </div>

                    {/* Login Div Start here  */}
                    <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                      <div className="section-title-p text-center loginBox">
                        <p className="wid100">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod.
                        </p>
                        <form
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-50">
                              <label>Name </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Email ID</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Phone No</label>
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number"
                                placeholder="Your Phone No"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Organization name*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="organizationName"
                                id="organizationName"
                                placeholder="Your Organization name"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>website url</label>
                              <input
                                type="url"
                                className="form-control"
                                name="websiteUrl"
                                id="websiteUrl"
                                placeholder="Your website url"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Country</label>
                              <select
                                class="form-control customInput customInputIcon"
                                id="select1"
                                name="type"
                              >
                                <option value="" selected disabled>
                                  Country
                                </option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>
                              </select>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="commonBtn loginBtn"
                            >
                              Submit
                            </button>
                          </div>
                        </form>                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default eprocurement;
