import React, { Component, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { dataList } from "../tender/dataList";

export default function StripedRowsDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataList.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Global Consultancy Tenders</h2>
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
              <h3>
                Consultancy Tenders - Govt eTender, Consultancy eProcurement
                Notice, RFP, bids
              </h3>
              <p>
                Consultancy Tenders: Find Latest Tender Notices, for thousands
                of Consultancy eTenders, eProcurement Notices, Bids, Updates &
                more. Search Government & Private Consultancy Tenders published
                on various tender and eProcurement portals worldwide.
                Tendersinfo Has the Largest Database of Global Consultancy
                Tenders online. We cover Consultancy Tenders published on
                thousands of online Tender portals and Newspapers. So that you
                do not have to visit 100s of websites to find perfect
                Consultancy tender for your Businesss.
              </p>
            </div>
          </div>
        </section>
        <section className="CategoryLst">
          <div className="container">
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
                <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
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
