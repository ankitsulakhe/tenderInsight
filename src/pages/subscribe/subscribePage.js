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
                  class="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="box">
                    <h3>Basic</h3>
                    <h4>
                      <sup>Rs.</sup>0<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information</li>
                      <li>Dashboard</li>
                      <li>Customer Care Support</li>
                      <li class="na">Project Information</li>
                      <li class="na">Periodical Excel Alerts</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 mt-4 mt-md-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="box featured">
                    <h3>Standard</h3>
                    <h4>
                      <sup>Rs.</sup>1900<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information</li>
                      <li>Dashboard</li>
                      <li>Customer Care Support</li>
                      <li>Project Information</li>
                      <li class="na">Periodical Excel Alerts</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 mt-4 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="box">
                    <h3>Premium</h3>
                    <h4>
                      <sup>Rs.</sup>2900<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information</li>
                      <li>Dashboard</li>
                      <li>Customer Care Support</li>
                      <li>Project Information</li>
                      <li>Periodical Excel Alerts</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 mt-4 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div class="box">
                    <span class="advanced">Advanced</span>
                    <h3>Enterprise</h3>
                    <h4>
                      <sup>Rs.</sup>3900<span> / month</span>
                    </h4>
                    <ul>
                      <li>Tender Information</li>
                      <li>Dashboard</li>
                      <li>Customer Care Support</li>
                      <li>Project Information</li>
                      <li>Periodical Excel Alerts</li>
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
