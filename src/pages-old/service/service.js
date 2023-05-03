import React, { Component } from "react";
import imageAbout from "./about.jpg";

class ServicePage extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Service Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Service Page</li>
              </ol>
            </div>
          </div>
        </section>
        <main className="bodyMain">
          <section id="about" className="about pb-2">
            <div className="container" data-aos="fade-up">
              <div className="section-title fullwidth">
                <h2>Service</h2>
                <h3 className="pt-2">
                  Find Out More <span>About Us</span>
                </h3>
                <p>
                  TendersInfo as a service provides daily and detailed alerts on
                  International public tenders, RFP's, RFQ's, Prequalifications,
                  EOI's, etc. from across the globe, which are funded by
                  Multilateral Funding Agencies, Federal, State, County
                  Governments, Utilities Sector, Hospitals, Schools, Ports,
                  NGO's, etc. from diversified sectors in Public Procurement
                  Domain.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
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
                  <h3>Tender Notice Alerts</h3>
                  <p>
                    {" "}
                    Its simple and intuitive online search system allows members
                    with quick and easy access to over 3,00,000+ Live
                    Procurement Opportunities at any point in time encompassing
                    requirements from 150+ countries and all Industry segments.
                    This database is updated 365 days a year, with close to
                    25000+ new opportunities being added each day.
                  </p>
                  <p>
                    Members of TendersInfo receive a daily email alert
                    consisting of bid opportunities from their chosen Business
                    Area and Geographies. Accurate search profiles are composed
                    ensuring that members receive only those opportunities that
                    exactly match their product profile and target market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>Projects & Procurement News</h3>
                  <p>
                    TendersInfo members receive alerts on Projects & Procurement
                    News. Projects Information are the initial "broad" notices
                    published prior to tenders which mainly indicate the sector
                    in which the buyer will procure multiple goods or services
                    in near future with estimated budget and estimated
                    start/close date. Further, multiple tenders could be
                    expected from a single project for different goods or
                    services to be procured in the near future.
                  </p>
                  <p>
                    Procurement News provides business development opportunities
                    from the private and public sector, subcontracting
                    opportunities, procurement laws of the country, a way to
                    keep you updated all the time.
                  </p>
                </div>
                <div
                  className="col-lg-6 "
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={imageAbout} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="featured-services" class="featured-services section-bg">
            <div class="container" data-aos="fade-up">
              <div class="row">
                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Contract Awards</a>
                    </h4>
                    <p class="description">
                    Contract Awards are the notifications about the companies who had won the contracts in the recent past with description of the won contract and other details as and when available.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">TendersInfo Research Archives</a>
                    </h4>
                    <p class="description">
                    TendersInfo members have access to Research Archives created over the last few years and containing more than 50,00,000 bid opportunities, projects, profiles that are categorized by date, country, sub-sector & key word to assist in backdated research and further help forecasting.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Key Account Manager Service</a>
                    </h4>
                    <p class="description">
                    At TendersInfo, a dedicated Key Account Manager is allocated to every member, who on request gathers more information, assists member on any tender or project that they may be interested in (at no additional costs). Key Account Managers try their best to make available to members with the Schedule of Requirements or Scope of work or even a draft copy of the tender document of various tenders before you make an investment in purchasing the tender document.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Request For Future Updates</a>
                    </h4>
                    <p class="description">
                    TendersInfo members are entitled to 24*7 personalised services for getting more information on any particular Tender/Project of their interest. Members can request for more information or further update on any opportunity of their interest and concerned team will revert them with requested information instantly.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Personalised Customer Care</a>
                    </h4>
                    <p class="description">
                    We establish a regular cadence of calls with our clients to review their business requirements and to ensure those are being met. Adjustments are made throughout the engagement to meet our client's business needs.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">TenderTrends</a>
                    </h4>
                    <p class="description">
                    TenderTrends provides an in-depth view of your Tendering usage, from the number of Tenders viewed to actual downloads of Bid Documents; to usage throughout the length of your contract. We will even provide you an estimated value of the Bids you potentially could have won.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Webinars / Training</a>
                    </h4>
                    <p class="description">
                    The idea behind organizing webinars and e-round tables is to help the Bid Managers and decision makers from various geographies to connect, collaborate and share business opportunities. We aim to bring the best practices in tendering and Bid Management through the expertise and experience of our speaker partners and also to a large extent that of participant.                    
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Personalised Customer Care</a>
                    </h4>
                    <p class="description">
                    We establish a regular cadence of calls with our clients to review their business requirements and to ensure those are being met. Adjustments are made throughout the engagement to meet our client's business needs.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Selling Database</a>
                    </h4>
                    <p class="description">
                    We provide data as per requirement, in terms of product, sector and geography. We provide company's name, Website, country, contact person, Email Id, Designation, Telephone numbers, Product profile to our clients.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon">
                     <img src={imageAbout} className="img-fluid" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="">Lead Generation</a>
                    </h4>
                    <p class="description">
                      We provide leads as per the requirement for each category. We also analyze opportunities, Identify companies for each category, research for right person with his contact details for all companies, building connect strategy, solution design, presentation, drafting emails based on company's profile, product promotions, strategic communication, marketing mailers, and other mass communication. After establishing connects with the companies, we qualify them and share the leads.
                    </p>
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
export default ServicePage;
