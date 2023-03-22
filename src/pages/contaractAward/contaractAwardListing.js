import React, { Component, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { dataList } from "../tender/dataList";
import { Dialog } from "primereact/dialog";
export default function StripedRowsDemo() {
  const [TenderList, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dataList.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contaract Award Listing</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contaract Award Listing</li>
            </ol>
          </div>
        </div>
      </section>
      <main className="bodyMain">
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title sectionList ListPageSection">
              <h3>
                Consultancy Tenders - Govt eTender, Consultancy eProcurement
                Notice, RFP, bids
              </h3>
              <p>
                Consultancy Tenders: Find Latest Tender Notices, for thousands
                of Consultancy eTenders, eProcurement Notices, Bids, Updates &
                more. Search Government & Private Consultancy Tenders published
                on various tender and eProcurement portals worldwide.
                bidsinfoglobal Has the Largest Database of Global Consultancy
                Tenders online. We cover Consultancy Tenders published on
                thousands of online Tender portals and Newspapers. So that you
                do not have to visit 100s of websites to find perfect
                Consultancy tender for your Businesss...
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
                    eProcurement portals worldwide. bidsinfoglobal Has the Largest
                    Database of Global Consultancy Tenders online. We cover
                    Consultancy Tenders published on thousands of online Tender
                    portals and Newspapers. So that you do not have to visit
                    100s of websites to find perfect Consultancy tender for your
                    Businesss. Get 100% accurate Tender information for
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
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
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
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
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
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
                    </p>
                    <p>
                      bidsinfoglobal has the most comprehensive coverage for
                      Consultancy tenders in 200+ countries globally. So Whether
                      you are looking for small value local tender or a High
                      Value International Consultancy Tender, You can be assured
                      to find the Perfect Business opportunity from any corner
                      of the world as bidsinfoglobal is largest tender aggergator
                      for Consultancy tenders of all types where users can find
                    </p>
                  </div>
                </Dialog>
              </p>
            </div>
          </div>
        </section>
        <section className="CategoryLst spacelr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="FLiterListDiv">
                  <div className="filterTitle">
                    <h2>Filter Your Data</h2>
                  </div>
                  <div className="FilterSerach">
                    <form
                      action="forms/contact.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="flex">
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                        <div className="colsP form-group">
                          <label for="exampleInputEmail1">Free Text</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Free Text"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="ListDetailsDiv">
                  <div>
                    <h3 className="result_page">26892 - Document matches your request</h3>
                  </div>
                  <DataTable
                    value={TenderList}
                    paginator
                    rows={12}
                    sortMode="multiple"
                    className="TableMainData"
                    showGridlines
                    rowsPerPageOptions={[15, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column className="TableHeader" field="location" sortable  header="Location"></Column>
                    <Column className="TableHeader" field="sector" sortable  header="Sector"></Column>
                    <Column className="TableHeader" field="summary"sortable   header="Summary"></Column>
                    <Column className="TableHeader" field="date" sortable  header="Date"></Column>
                    <Column className="TableHeader" field="deadline" sortable  header="Deadline"></Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
