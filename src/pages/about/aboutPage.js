import React, { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import imageAbout from "./about.jpg";

class AboutPage extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header />
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Login Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Login Page</li>
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
                  className="col-lg-6"
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
        </main>
        <Footer />
      </div>
    );
  }
}
export default AboutPage;
