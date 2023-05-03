import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";

class TenderDetails extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Consultancy - Engineering Tenders</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Tender</li>
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
                  Tender <span>Information</span>
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
                        Authority Name & Contact
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
                                <h3>Authority Name </h3>
                                <p>Global Tender Org</p>
                              </div>
                            </div>
                            <div
                              class="col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Address</h3>
                                <p>
                                  501 Prodinsa Building, Cnr Steve Bhiko and
                                  Pretorius Street - Arcadia - Pretoria - 0001
                                </p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Telephone</h3>
                                <p>012-14400-21071</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>FAX Number</h3>
                                <p> N/A</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Email</h3>
                                <p>luckym@visava.in</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Contact Person</h3>
                                <p> Laxman Singh</p>
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
                        Tender Details
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
                              class="col-md-9 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Description</h3>
                                <p>
                                  The Provision Of Services For The Service Of
                                  Engineering Systems Of Buildings Of
                                  Educational Organizations Subordinate To The
                                  Department Of Education And Science Of The
                                  City Of Moscow In 2023-2025.
                                </p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Tender Type</h3>
                                <p>Defense Forces</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Tender No</h3>
                                <p>RFQ:238-22-IA</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Financer</h3>
                                <p>WorldBank</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Tender Competition</h3>
                                <p>International </p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Published Date</h3>
                                <p>30 Mar 2023</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Closing Date</h3>
                                <p>30 Mar 2023</p>
                              </div>
                            </div>
                            <div
                              class="col-md-3 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Country</h3>
                                <p>India</p>
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
                                <h3>EMD </h3>
                                <p>Laxman Singh</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Estimated Cost</h3>
                                <p>10 - 15 Million</p>
                              </div>
                            </div>
                            <div
                              class="col-lg-3 col-md-6 mgbtmxy"
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                              <div class="box">
                                <h3>Document</h3>
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
