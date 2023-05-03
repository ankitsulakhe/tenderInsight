import React, { Component, useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function SubscribeData() {
  const categories = [
    { name: "Tender Information", key: "A" },
    { name: "Contract Awards", key: "B" },
    { name: "Project Information", key: "C" },
    { name: "Grants", key: "D" },
    { name: "Customer Care", key: "E" },
    { name: "Access to Historical Tender Data", key: "F" },
    { name: "Key Account Manager", key: "G" },
    { name: "Customised Intranet", key: "H" },
    { name: "Micro Site", key: "I" },
    { name: "Company Data Research", key: "J" },
    { name: "Email Alerts", key: "K" },
    { name: "User Id", key: "L" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };
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
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
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
                    <sup>USD</sup>99 <span> / 1 month</span>
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
                    <sup>USD </sup>399<span> / 6 month</span>
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
                    <sup>USD </sup>199<span> / month</span>
                  </h4>
                  <ul className="checboixpackage">
                    {categories.map((category) => {
                      return (
                        <li
                          key={category.key}
                          className="flex align-items-center"
                        >
                          <Checkbox
                            inputId={category.key}
                            name="category"
                            value={category}
                            onChange={onCategoryChange}
                            checked={selectedCategories.some(
                              (item) => item.key === category.key
                            )}
                          />
                          <label htmlFor={category.key} className="ml-2">
                            {category.name}
                          </label>
                        </li>
                      );
                    })}
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
