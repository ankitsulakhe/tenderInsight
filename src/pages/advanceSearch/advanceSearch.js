import React, { useState, useRef, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useOverlayScrollListener } from "primereact/hooks";
import { OverlayPanel } from "primereact/overlaypanel";
import { Calendar } from "primereact/calendar";

export default function AdvanceSearch() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);
  const op = useRef(null);
  const [dates, setDates] = useState(null);
  const handleScroll = () => {
    setVisible(false);
  };

  const [bindOverlayScrollListener, unbindOverlayScrollListener] =
    useOverlayScrollListener({
      target: buttonRef.current,
      listener: handleScroll,
      options: { passive: true },
      when: visible,
    });

  useEffect(() => {
    bindOverlayScrollListener();

    return () => {
      unbindOverlayScrollListener();
    };
  }, [bindOverlayScrollListener, unbindOverlayScrollListener]);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const search = (event) => {
    let _items = [...Array(10).keys()];
    setItems(
      event.query
        ? [...Array(10).keys()].map((item) => event.query + "-" + item)
        : _items
    );
  };
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "Australia Tender", code: "AU" },
    { name: "Brazil Tender", code: "BR" },
    { name: "China Tender", code: "CN" },
    { name: "Egypt Tender", code: "EG" },
    { name: "France Tender", code: "FR" },
    { name: "Germany Tender", code: "DE" },
    { name: "India Tender", code: "IN" },
    { name: "Japan Tender", code: "JP" },
    { name: "Spain Tender", code: "ES" },
    { name: "United States Tender", code: "US" },
  ];
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const selitems = ["Domestic ", "International", "Both"];
  
  const [tenderType, settenderType] = useState(null);
  const tenderTypetems = ["Live  ", "Archive"];

  const [noticType, setnoticType] = useState(null);
  const noticTypetems = ["Tender  ", "Project","Contract Award","Grants"];

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Advance Search</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Advance Search</li>
            </ol>
          </div>
        </div>
      </section>
      <main className="bodyMain">
        <section id="about" className="about pb-2">
          <div className="container" data-aos="fade-up">
            <div className="section-title fullwidth">
              <h2>Advance Search</h2>
              <h3 className="pt-2">
                Advance Search <span>For Better Result</span>
              </h3>
              <p>
                The Advance Search enables the companies to automate their
                procurement processes, We BidsInfoGlobal would be glad to help
                you automate your procurement processes. Kindly find below list
                of E-Procurement system packages offered by BidsInfoGlobal.
              </p>
            </div>
          </div>
        </section>
        <section className="formContact section-bg" id="advanceSerachBg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 signupPagePadding">
                <div className="homeLoginMain">
                  {/* Login Div Start here  */}
                  <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                    <div className="section-title-p text-center loginBox" id="advabceSearch">
                      <form
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="d-flex flex-wrap signupflex">
                          <div className="form-group mb-40 wid-30">
                            <label>Free Text </label>
                            <AutoComplete
                              value={value}
                              suggestions={items}
                              completeMethod={search}
                              onChange={(e) => setValue(e.value)}
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Exact Word </label>
                            <InputText value="Type Exact Word" />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Any Word </label>
                            <InputText value="Type Any Word" />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Relevant Word </label>
                            <InputText value="Type Relevant Word" />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Exclude Word </label>
                            <InputText value="Type Exclude Word" />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>CPV Codes</label>
                            <Dropdown
                              value={selectedCountry}
                              onChange={(e) => setSelectedCountry(e.value)}
                              options={countries}
                              optionLabel="name"
                              placeholder="Select a Country"
                              filter
                              valueTemplate={selectedCountryTemplate}
                              itemTemplate={countryOptionTemplate}
                              className="w-full md:w-14rem"
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Geographical Location Search</label>
                            <Dropdown
                              value={selectedCountry}
                              onChange={(e) => setSelectedCountry(e.value)}
                              options={countries}
                              optionLabel="name"
                              placeholder="Select a Country"
                              filter
                              valueTemplate={selectedCountryTemplate}
                              itemTemplate={countryOptionTemplate}
                              className="w-full md:w-14rem"
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Region </label>
                            <AutoComplete
                              value={value}
                              suggestions={items}
                              completeMethod={search}
                              onChange={(e) => setValue(e.value)}
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Country </label>
                            <AutoComplete
                              value={value}
                              suggestions={items}
                              completeMethod={search}
                              onChange={(e) => setValue(e.value)}
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>State & City </label>
                            <AutoComplete
                              value={value}
                              suggestions={items}
                              completeMethod={search}
                              onChange={(e) => setValue(e.value)}
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Contract Value </label>
                            <InputText value="Type Contract Value " />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Competition Type </label>
                            <Dropdown
                              value={selectedItem}
                              onChange={(e) => setSelectedItem(e.value)}
                              options={selitems}
                              placeholder="Select Competition Type"
                              className="w-full md:w-14rem"
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>BIG Ref No: </label>
                            <InputText value="Type BIG Ref No: " />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Tender No: </label>
                            <InputText value="Type Tender No: " />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Posting Date: </label>
                            <div className="card flex justify-content-center">
                              <span
                                className="postingText"
                                onClick={(e) => op.current.toggle(e)}
                              >
                                Posting Date
                              </span>
                              <OverlayPanel ref={op}>
                                <ul>
                                  <li>Today</li>
                                  <li class="active">Yesterday</li>
                                  <li class="">Last 7 Days</li>
                                  <li class="">Last 15 Days</li>
                                  <li class="">Last 30 Days</li>
                                  <li>This Month</li>
                                  <li>Last Month</li>
                                  <li>Custom Range</li>
                                </ul>
                                <Calendar
                                  value={dates}
                                  onChange={(e) => setDates(e.value)}
                                  selectionMode="range"
                                  readOnlyInput
                                  placeholder="Custome Date Picker"
                                />
                              </OverlayPanel>
                            </div>
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Closing Date: </label>
                            <div className="card flex justify-content-center">
                              <span
                                className="postingText"
                                onClick={(e) => op.current.toggle(e)}
                              >
                                Closing Date
                              </span>
                              <OverlayPanel ref={op}>
                                <ul>
                                  <li>Today</li>
                                  <li class="active">Yesterday</li>
                                  <li class="">Last 7 Days</li>
                                  <li class="">Last 15 Days</li>
                                  <li class="">Last 30 Days</li>
                                  <li>This Month</li>
                                  <li>Last Month</li>
                                  <li>Custom Range</li>
                                </ul>
                                <Calendar
                                  value={dates}
                                  onChange={(e) => setDates(e.value)}
                                  selectionMode="range"
                                  readOnlyInput
                                  placeholder="Custome Date Picker"
                                />
                              </OverlayPanel>
                            </div>
                          </div>                          
                          <div className="form-group mb-40 wid-30">
                            <label>Tender Type</label>
                            <Dropdown
                              value={tenderType}
                              onChange={(e) => settenderType(e.value)}
                              options={tenderTypetems}
                              placeholder="Select Competition Type"
                              className="w-full md:w-14rem"
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>Notice type</label>
                            <Dropdown
                              value={noticType}
                              onChange={(e) => setnoticType(e.value)}
                              options={noticTypetems}
                              placeholder="Select Competition Type"
                              className="w-full md:w-14rem"
                            />
                          </div>
                          <div className="form-group mb-40 wid-30">
                            <label>MFA (Funding Agencies) </label>
                            <InputText value="Type MFA (Funding Agencies)" />
                          </div>
                         
                        </div>
                        <div className="text-center">
                          <button type="submit" className="commonBtn loginBtn">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
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
