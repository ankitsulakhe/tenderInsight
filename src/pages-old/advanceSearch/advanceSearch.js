import React, { useState, useRef, useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useOverlayScrollListener } from "primereact/hooks";
import { OverlayPanel } from "primereact/overlaypanel";
import { Calendar } from "primereact/calendar";
import { Tree } from "primereact/tree";
import { NodeService } from "./NodeService";
import { TabView, TabPanel } from "primereact/tabview";

export default function AdvanceSearch() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);
  const op = useRef(null);
  const cpv = useRef(null);
  const region = useRef(null);
  const [dates, setDates] = useState(null);
  const handleScroll = () => {
    setVisible(false);
  };
  const [nodes, setNodes] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);
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

  const [searchselectedItem, searchsetSelectedItem] = useState(null);
  const searchselitems = ["Exact Phrase", "Relevant Word", "Any Word"];

  const [tenderType, settenderType] = useState(null);
  const tenderTypetems = ["Live  ", "Archive"];

  const [noticType, setnoticType] = useState(null);
  const noticTypetems = ["Tender  ", "Project", "Contract Award", "Grants"];

  const [geographicalselectedItem, geographicalsetSelectedItem] =
    useState(null);
  const geographicalselitems = ["Region  ", "Country", "State & City"];

  const [selectedMFA, setSelectedMFA] = useState(null);
  const MFA = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

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
        <section className="formContact section-bg" id="advanceSerachBg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 signupPagePadding">
                <div className="homeLoginMain">
                  {/* Login Div Start here  */}
                  <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                    <div
                      className="section-title-p text-center loginBox"
                      id="advabceSearch"
                    >
                      <TabView>
                        <TabPanel
                          header="Keyword Search"
                          leftIcon="pi pi-filter mr-2"
                        >
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-30">
                              <label>Search Type </label>
                              <Dropdown
                                value={searchselectedItem}
                                onChange={(e) => searchsetSelectedItem(e.value)}
                                options={searchselitems}
                                placeholder="Select Search Type"
                                className="w-full md:w-14rem"
                              />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>&nbsp;</label>
                              <InputText value="Search type" />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>Exclude Word</label>
                              <InputText value="Exclude Word" />
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel
                          header="Product & Sector and Geographical Search"
                          leftIcon="pi pi-map-marker mr-2"
                        >
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-30">
                              <label>CPV Codes</label>
                              <div className="card flex justify-content-center">
                                <span
                                  className="postingText"
                                  onClick={(e) => cpv.current.toggle(e)}
                                >
                                  CPV Codes
                                </span>
                                <OverlayPanel ref={cpv}>
                                  <Tree
                                    value={nodes}
                                    filter
                                    filterMode="lenient"
                                    filterPlaceholder="Lenient Filter"
                                    selectionMode="checkbox"
                                    selectionKeys={selectedKeys}
                                    onSelectionChange={(e) =>
                                      setSelectedKeys(e.value)
                                    }
                                    className="w-full md:w-30rem"
                                  />
                                </OverlayPanel>
                              </div>
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>Sector Search</label>
                              <InputText value="Sector Search" />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>Geographical Location Search</label>
                              <Dropdown
                                value={geographicalselectedItem}
                                onChange={(e) =>
                                  geographicalsetSelectedItem(e.value)
                                }
                                options={geographicalselitems}
                                placeholder="Select a Country / Region / State & City"
                                className="w-full md:w-14rem"
                              />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>&nbsp;&nbsp;</label>
                              <Dropdown
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.value)}
                                options={countries}
                                optionLabel="name"
                                placeholder="Select a Country / Region / State & City"
                                filter
                                valueTemplate={selectedCountryTemplate}
                                itemTemplate={countryOptionTemplate}
                                className="w-full md:w-14rem"
                              />
                            </div>
                          </div>
                        </TabPanel>
                      
                        <TabPanel
                          header="Funding Agencies & Tender Types Search"
                          leftIcon="pi pi-search mr-2"
                        >
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-30">
                              <label>MFA (Funding Agencies) </label>
                              <MultiSelect
                                value={selectedMFA}
                                onChange={(e) => setSelectedMFA(e.value)}
                                options={MFA}
                                optionLabel="name"
                                filter
                                placeholder="Select MFA"
                                maxSelectedLabels={3}
                                className="w-full md:w-20rem"
                              />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>Contract Value </label>
                              <InputText value="Type Contract Value " />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>Tender No: </label>
                              <InputText value="Type Tender No: " />
                            </div>
                            <div className="form-group mb-40 wid-30">
                              <label>BIG Ref No: </label>
                              <InputText value="Type BIG Ref No: " />
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
                              <label>Notice type</label>
                              <Dropdown
                                value={noticType}
                                onChange={(e) => setnoticType(e.value)}
                                options={noticTypetems}
                                placeholder="Select Notice type"
                                className="w-full md:w-14rem"
                              />
                            </div>
                            <div className="form-group mb-40 wid-30">
                          <label>Tender Type</label>
                          <Dropdown
                            value={tenderType}
                            onChange={(e) => settenderType(e.value)}
                            options={tenderTypetems}
                            placeholder="Select Tender Type"
                            className="w-full md:w-14rem"
                          />
                        </div>
                          </div>
                        </TabPanel>
                        <TabPanel
                          header="Key Dates"
                          leftIcon="pi pi-calendar mr-2"
                        >
                          <div className="d-flex flex-wrap signupflex">
                          <div className="form-group mb-40 wid-30">
                          <label>Posting Date: </label>
                          <div className="card flex justify-content-center">
                            <span
                              className="postingText"
                              onClick={(e) => op.current.toggle(e)}
                            >
                              Select Posting Date
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
                              Select Closing Date
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
                          </div>
                        </TabPanel>
                      </TabView>                      
                      <div className="text-center">
                        <button type="submit" className="commonBtn loginBtn">
                          <i className="pi pi-search"></i> Apply
                        </button>
                      </div>
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
