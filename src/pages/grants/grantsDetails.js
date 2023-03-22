import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";

class TenderDetails extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Grants</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Grants</li>
              </ol>
            </div>
          </div>
        </section>
        <div className="innerSearchBar">
          <div className="container">
            <SearchBar></SearchBar>
          </div>
        </div>
        <main className="bodyMain">
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <div className="section-title sectionList">
                <h3>
                Grants <span>Information</span>
                </h3>
                <p>
                  The Provision Of Services For The Service Of Engineering
                  Systems Of Buildings Of Educational Organizations Subordinate
                  To The Department Of Education And Science Of The City Of
                  Moscow In 2023-2025.
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-12">
                  <ul className="faq-list">
                    <li>
                      <div
                        data-bs-toggle="collapse"
                        href="#TenderDetails"
                        className="question"
                      >
                        Donor Name & Contact
                        <i className="bi bi-chevron-down icon-show"></i>
                        <i className="bi bi-chevron-up icon-close"></i>
                      </div>
                      <div
                        id="TenderDetails"
                        className="collapse show"
                        data-bs-parent=".faq-list"
                      >
                        <div className="pricing pdlr10">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Donor</h3>
                                <p>Global Tender Org</p>
                              </div>
                            </div>
                            <div
                              class="col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Contact Information</h3>
                                <p>
                                  501 Prodinsa Building, Cnr Steve Bhiko and
                                  Pretorius Street - Arcadia
                                </p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Location</h3>
                                <p>012-14400-21071</p>
                              </div>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div
                        data-bs-toggle="collapse"
                        className="collapsed question"
                        href="#authortyContactDetails"
                      >
                        Grants Details
                        <i className="bi bi-chevron-down icon-show"></i>
                        <i className="bi bi-chevron-up icon-close"></i>
                      </div>
                      <div
                        id="authortyContactDetails"
                        className="collapse"
                        data-bs-parent=".faq-list"
                      >
                        <div className="pricing pdlr10">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>BIG Ref No</h3>
                                <p>RFQ:238-22-IA</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Title </h3>
                                <p>Defense Forces</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Type </h3>
                                <p>RFQ:238-22-IA</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Status</h3>
                                <p>WorldBank</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Value </h3>
                                <p>International </p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Type Of Services</h3>
                                <p>30 Mar 2023</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Sector </h3>
                                <p>30 Mar 2023</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div
                        data-bs-toggle="collapse"
                        href="#otherInformation"
                        className="collapsed question"
                      >
                        Other Information
                        <i className="bi bi-chevron-down icon-show"></i>
                        <i className="bi bi-chevron-up icon-close"></i>
                      </div>
                      <div
                        id="otherInformation"
                        className="collapse"
                        data-bs-parent=".faq-list"
                      >
                        <div className="pricing pdlr10">
                          <div class="row">
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Deadline</h3>
                                <p>Laxman Singh</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Duration </h3>
                                <p>10 - 15 Million</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Attachment</h3>
                                <p>N/A</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Post Date</h3>
                                <p>N/A</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default TenderDetails;
