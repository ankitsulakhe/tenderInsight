import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";

class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Chemical Tenders Project</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Project</li>
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
                Project <span>Information</span>
                </h3>
                <p>
                The Provision Of Services For The Service Of Engineering Systems Of Buildings Of Educational Organizations Subordinate To The Department Of Education And Science Of The City Of Moscow In 2023-2025. 
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
                        Project Details
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
                            <div class="col-lg-12 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Name </h3>
                                <p>Global Tender Org</p>
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Background </h3>
                                <p>Global Tender Org</p>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Id</h3>
                                <p>RFQ:238-22-IA</p>
                              </div>
                            </div>
                            <div class="col-md-4 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Location</h3>
                                <p>Pretoria</p>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Status</h3>
                                <p>Active</p>
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
                       Dates
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
                            <div class="col-lg-6 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Project Publishing Date</h3>
                                <p>RFQ:238-22-IA</p>
                              </div>
                            </div>
                            <div class="col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Estimated Project Completion Date</h3>
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
                        Project Financer & Client Details
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
                            <div class="col-lg-3 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Client Name</h3>
                                <p>Laxman Singh</p>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Client Address</h3>
                                <p>501 Prodinsa Building, Bhiko and Pretorius Street - Arcadia - Pretoria - 0001</p>
                              </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Financer Name</h3>
                                <p>N/A</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>  <li>
                      <div
                        data-bs-toggle="collapse"
                        href="#otherInformationProject"
                        className="collapsed question"
                      >                        
                        Other Information
                        <i className="bi bi-chevron-down icon-show"></i>
                        <i className="bi bi-chevron-up icon-close"></i>
                      </div>
                      <div
                        id="otherInformationProject"
                        className="collapse"
                        data-bs-parent=".faq-list"
                      >
                        <div className="pricing pdlr10">
                          <div class="row">
                            <div class="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>Sector</h3>
                                <p>Chemical Tenders Project</p>
                              </div>
                            </div>
                            <div class="col-lg-5 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                              <div class="box">
                                <h3>CPV</h3>
                                <p>Pretoria - 0001</p>
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
export default ProjectDetails;
