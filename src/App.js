import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import logo from "./logo.jpg";
import LoginPage from "./pages/login/loginPage";
import AboutPage from "./pages/about/aboutPage";
import Footer from "./footer/footer";
import "./App.css";
import TenderDetails from "./pages/TenderDetails/TenderDetails";

function App() {
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loaderPre");
      if (loaderElement) {
        loaderElement.remove();
      }
    });
  });

  return (
    <div className="WebsitePage">
      <div className="Wrapper">
        <Router>
          <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center">
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </i>
                <i className="bi bi-phone d-flex align-items-center ms-4">
                  <span>+1 5589 55488 55</span>
                </i>
              </div>
              <div className="social-links d-none d-md-flex align-items-center">
                <ul className="d-flex topBarMenu">
                  <li>
                    <a className="nav-link scrollto active" href="#hero">
                      Advanced Search
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      E - Procurement
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#services">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                      Subscribe
                    </a>
                  </li>
                  <li>
                    <Link to="bidsinfoglobal/login" className="nav-link scrollto ">
                      Login / Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
            <Link to="bidsinfoglobal/">
                <img src={logo} alt="main logo" className="logo" />
             </Link>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link to="bidsinfoglobal/">Home</Link>
                  </li>
                  <li>
                    <Link to="bidsinfoglobal/about">About Us</Link>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Tenders</span> <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li class="dropdown">
                        <a href="#">
                          <span>Tenders By Sector</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Defence</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                          <li>
                            <a href="#">Construction</a>
                          </li>
                          <li>
                            <a href="#">Aviation</a>
                          </li>
                          <li>
                            <a href="#" className="AllcatLink">
                              More...
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">
                          <span>Tenders By Region</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Africa Tenders</a>
                          </li>
                          <li>
                            <a href="#">Asia Pacific Tenders</a>
                          </li>
                          <li>
                            <a href="#">Balkan Region Tenders</a>
                          </li>
                          <li>
                            <a href="#">Europe Tenders</a>
                          </li>
                          <li>
                            <a href="#" className="AllcatLink">
                              More...
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">
                          <span>Tenders By Products/Services/CPV</span>
                        </a>
                        <ul>
                          <li>
                            <a href="" target="_blank">
                              Chemical products Tenders
                            </a>
                          </li>
                          <li>
                            <a href="" target="_blank">
                              Construction materials Tenders
                            </a>
                          </li>
                          <li>
                            <a href="" target="_blank">
                              Fabricated products and materials Tenders
                            </a>
                          </li>
                          <li>
                            <a href="" target="_blank">
                              Road construction works Tenders
                            </a>
                          </li>
                          <li>
                            <a className="AllcatLink" href="" target="_blank">
                              More
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Project</span> <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li class="dropdown">
                        <a href="#">
                          <span>Project By Sector</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Defence</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                          <li>
                            <a href="#">Construction</a>
                          </li>
                          <li>
                            <a href="#">Aviation</a>
                          </li>
                          <li>
                            <a href="#" className="AllcatLink">
                              More...
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">
                          <span>Project By Region</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Africa Projects</a>
                          </li>
                          <li>
                            <a href="#">Asia Pacific Projects</a>
                          </li>
                          <li>
                            <a href="#">Balkan Region Projects</a>
                          </li>
                          <li>
                            <a href="#">Europe Projects</a>
                          </li>
                          <li>
                            <a href="#" className="AllcatLink">
                              More...
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="#team">
                      Contract Awards
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contact">
                    Grants
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contact">
                      Services
                    </a>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
          <Routes>
            <Route exact path="bidsinfoglobal/" Component={HomePage} />
            <Route path="bidsinfoglobal/about" Component={AboutPage} />
            <Route path="bidsinfoglobal/login" Component={LoginPage} />
            <Route path="bidsinfoglobal/TenderDetails" Component={TenderDetails} />
          </Routes>
          <Footer />
        </Router>
      </div>
      <div id="preloader" className="loaderPre"></div>
    </div>
  );
}

export default App;
