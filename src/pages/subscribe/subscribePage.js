import React, { Component } from "react";
import imageAbout from "./about.jpg";
import imageAboutFeature from "./aboutFetures.jpg";

class subscribePage extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Subscribe</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Subscribe</li>
              </ol>
            </div>
          </div>
        </section>
        <main className="bodyMain">
          <section id="pricing" class="pricing">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Pricing</h2>
                <h3>
                  Check our <span>Pricing</span>
                </h3>
                <p>
                  Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                  est adipisci expedita at voluptas atque vitae autem.
                </p>
              </div>

              <div class="row">
                <div
                  class="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="box">
                    <h3>Basic Trial</h3>
                    <h4>
                      <sup>Rs.</sup>0<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information </li>
                      <li>Contract Awards</li>
                      <li>Project Information </li>
                      <li>Grants</li>
                      <li>Dashboard</li>
                      <li>Customer Care</li>
                      <li>Alerts Upto 1 Email Id </li>
                      <li>Access to Historical Tender Data</li>
                      <li>1 User Id </li>                      
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 mt-4 mt-md-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="box featured">
                    <h3>Standard</h3>
                    <h4>
                      <sup>Rs.</sup>1900<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information </li>
                      <li>Contract Awards</li>
                      <li>Project Information </li>
                      <li>Grants</li>
                      <li>Dashboard</li>
                      <li>Customer Care</li>
                      <li>Alerts Upto 2 Email Id </li>
                      <li>Access to Historical Tender Data</li>
                      <li>2 User Id </li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 mt-4 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="box">
                    <h3>Customise Package </h3>
                    <h4>
                      <sup>Rs.</sup>2900<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information </li>
                      <li>Contract Awards</li>
                      <li>Project Information </li>
                      <li>Grants</li>
                      <li>Dashboard</li>
                      <li>Customer Care</li>
                      <li>Access to Historical Tender Data </li>
                      <li>Key Account Manager </li>
                      <li>Customised Intranet</li>
                      <li>Micro Site</li>
                      <li>Company Data Research</li>
                      <li>Email Alerts</li>
                      <li>User Id</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
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
export default subscribePage;
