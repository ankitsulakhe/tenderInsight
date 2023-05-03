import React, { Component } from "react";
import imageAbout from "./about.jpg";
import imageAboutFeature from "./aboutFetures.jpg";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>About Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>About Page</li>
              </ol>
            </div>
          </div>
        </section>
        <main className="bodyMain">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>About</h2>
                <h3>
                  Find Out More <span>About Us</span>
                </h3>
                <p>International Public Procurement</p>
              </div>

              <div className="row">
                <div
                  className="col-lg-6 "
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={imageAbout} className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>
                    Bidsinfoglobal is world's one of the largest Public
                    Procurement Services portals.
                  </h3>
                  <p className="fst-italic">
                    With most comprehensive database of International Tenders,
                    Projects, Company Data and Contract Award from Multilateral
                    Funding agencies, Federal, State, County Government,
                    Utilities sector, Defence, Telecommunication, Engineering,
                    Schools, Ports, NGO's, etc. In addition, it also offers
                    market & Company Intelligence information, Bid Outsourcing,
                    e-Tender submission, Vendor Registration & E-procurement
                    support as its major service offerings supporting SME's to
                    Fortune 500 companies world over.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>About</h2>
                <h3>KEY FEATURE</h3>
              </div>

              <div className="row">
                <div
                  className="col-lg-7 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <ul class="cstm_list">
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-globe-americas"></i>
                        <h5>
                          4,00,000+ Public / Private Procurement Opportunities
                          from all over the Globe
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-briefcase"></i>
                        <h5>
                          30000+ New Business Opportunities posted on
                          Bidsinfoglobal.
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-info"></i>
                        <h5>
                          Different Information Sources from across the world
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-shield-check"></i>
                        <h5>Global comprehensive coverage</h5>
                      </div>
                    </li>
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-search"></i>
                        <h5>150+ Researchers</h5>
                      </div>
                    </li>
                    <li>
                      <div className="abtflex">
                        <i class="bi bi-bank"></i>
                        <h5>
                          170+ Multilateral and Bi-lateral Funding Agencies
                          coverage
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-5 d-flex align-center"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <img src={imageAboutFeature} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default AboutPage;
