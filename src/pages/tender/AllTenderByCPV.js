import React, { Component, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import radar from "./radar.png";
import defence from "./defence.png";
import consultation from "./consultation.png";
import pharmaceutical from "./pharmaceutical.png";
import patient from "./patient.png";
import transportation from "./transportation.png";
import airport from "./airport.png";
import architect from "./architect.png";

export default function StripedRowsDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Tenders By Products/Services/CPV</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Tender</li>
            </ol>
          </div>
        </div>
      </section>
      <main className="bodyMain">
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title sectionList ListPageSection">
              <h3>View latest Tenders by Sectors - complete list</h3>
              <p>
                bidsinfoglobal has the most comprehensive database of Tenders
                from 150+ Sectors and industries Globally. Find Sector-wise
                bids, eprocurement notices, etenders and more. Get Tenders by
                local and international government authorities for your sector
                on daily basis. We provide valuable opportunities for a wide
                range of businesses, manufacturers, service providers, MSMEs,
                SMEs and more, across various sub-industries and sectors.
                <span className="readMoreLink" onClick={() => setVisible(true)}>
                  Read more
                </span>
                <Dialog
                  className="ModalMaindiwo"
                  header="Consultancy Tenders - Govt eTender, Consultancy eProcurement Notice, RFP, bids"
                  visible={visible}
                  style={{ width: "80vw" }}
                  onHide={() => setVisible(false)}
                >
                  <p className="m-0">
                    Consultancy Tenders: Find Latest Tender Notices, for
                    thousands of Consultancy eTenders, eProcurement Notices,
                    Bids, Updates & more. Search Government & Private
                    Consultancy Tenders published on various tender and
                    eProcurement portals worldwide. bidsinfoglobal Has the
                    Largest Database of Global Consultancy Tenders online. We
                    cover Consultancy Tenders published on thousands of online
                    Tender portals and Newspapers. So that you do not have to
                    visit 100s of websites to find perfect Consultancy tender
                    for your Businesss. Get 100% accurate Tender information for
                    Consultancy tenders & find Complete tender details. along
                    with that you can also get tender results, tender updates,
                    procurement notice, Govt Projects, Tender notifications &
                    govt contracts.
                  </p>
                  <div className="modal_dialog_box">
                    <h3 className="ModalTitle">
                      Discover Global Consultancy Tenders
                    </h3>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                    <ul>
                      <li>Consultancy tenders by cities</li>
                      <li>Consultancy tenders by states</li>
                      <li>Consultancy tenders by coutries</li>
                      <li>Consultancy tenders by Value</li>
                      <li>Consultancy tenders by opening & Closing Date</li>
                      <li>Consultancy tenders by Authority</li>
                    </ul>
                  </div>
                  <div className="modal_dialog_box">
                    <h3 className="ModalTitle">
                      Discover Global Consultancy Tenders
                    </h3>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                  </div>
                  <div className="modal_dialog_box">
                    <h3 className="ModalTitle">
                      Discover Global Consultancy Tenders
                    </h3>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender
                      aggergator for Consultancy tenders of all types where
                      users can find
                    </p>
                  </div>
                </Dialog>
              </p>
            </div>
          </div>
        </section>
        <section className="CategoryLst services section-bg pd10">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="catListCount">(343)</div>
                  <div className="icon nobg">
                    <img src={defence} />
                  </div>
                  <h4>
                    <a href="">Defence</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="catListCount">(565)</div>
                  <div className="icon nobg">
                    <img src={radar} />
                  </div>
                  <h4>
                    <a href="">Telecommunication </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={defence} />
                  </div>
                  <h4>
                    <a href="">Engineering & Consultancy</a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="catListCount">(44)</div>
                  <div className="icon nobg">
                    <img src={consultation} />
                  </div>
                  <h4>
                    <a href="">Construction </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="catListCount">(112)</div>
                  <div className="icon nobg">
                    <img src={airport} />
                  </div>
                  <h4>
                    <a href="">Aviation </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(7856)</div>
                  <div className="icon nobg">
                    <img src={transportation} />
                  </div>
                  <h4>
                    <a href="">Transportation </a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(5684)</div>
                  <div className="icon nobg">
                    <img src={patient} />
                  </div>
                  <h4>
                    <a href="">Medical & Healthcare</a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={pharmaceutical} />
                  </div>
                  <h4>
                    <a href="">Pharmaceutical </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={radar} />
                  </div>
                  <h4>
                    <a href="">Information Technology </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={consultation} />
                  </div>
                  <h4>
                    <a href="">Textile </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={airport} />
                  </div>
                  <h4>
                    <a href="">Automobile </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={architect} />
                  </div>
                  <h4>
                    <a href="">Water And Sanitation </a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="catListCount">(44)</div>
                  <div className="icon nobg">
                    <img src={consultation} />
                  </div>
                  <h4>
                    <a href="">Construction </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="catListCount">(112)</div>
                  <div className="icon nobg">
                    <img src={airport} />
                  </div>
                  <h4>
                    <a href="">Aviation </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(7856)</div>
                  <div className="icon nobg">
                    <img src={transportation} />
                  </div>
                  <h4>
                    <a href="">Transportation </a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(5684)</div>
                  <div className="icon nobg">
                    <img src={patient} />
                  </div>
                  <h4>
                    <a href="">Medical & Healthcare</a>
                  </h4>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={pharmaceutical} />
                  </div>
                  <h4>
                    <a href="">Pharmaceutical </a>
                  </h4>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="catListCount">(21320)</div>
                  <div className="icon nobg">
                    <img src={radar} />
                  </div>
                  <h4>
                    <a href="">Information Technology </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
