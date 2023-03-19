import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import logo from "./logo.jpg";
import LoginPage from "./pages/login/loginPage";
import AboutPage from "./pages/about/aboutPage";
import Footer from "./footer/footer";
import ContactPage from "./pages/contact/contactPage";
import "./App.css";
import allTenderCatrgory from "./pages/tender/AllTenderCategory";
import TenderListing from "./pages/tender/TenderListing";
import allProjectCatrgory from "./pages/project/AllProjectCategory";
import ProjectListing from "./pages/project/ProjectListing";
import TenderDetails from "./pages/tender/TenderDetails";
import ProjectDetails from "./pages/project/ProjectDetails";
import  ContractAwardDetails from "./pages/contaractAward/contaractAwardDetails";
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
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                    E - Procurement
                    </a>
                  </li>                  
                  </li>
                  <li>
                    <Link to="contact" className="nav-link scrollto ">
                        Contact Us
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                      Subscribe
                    </a>
                  </li>
                  <li>
                    <Link to="login" className="nav-link scrollto ">
                      Login / Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
            <Link to="">
                <img src={logo} alt="main logo" className="logo" />
             </Link>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Tenders</span> <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li class="dropdown">
                       <Link to="TenderListing">
                          <span>Tenders By Sector</span>
                        </Link>
                        <ul>
                          <li>
                             <Link to="TenderDetails">
                              Defence
                              </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Telecommunication
                              </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Construction
                              </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Aviation
                              </Link>
                          </li>
                          <li>
                          <Link to="TenderCategory" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                       <Link to="TenderListing">
                          <span>Tenders By Region</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="TenderDetails">Africa Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Asia Pacific Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Balkan Region Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Europe Tenders</Link>
                          </li>
                          <li>                          
                          <Link to="TenderCategory"className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                       <Link to="TenderListing">
                          <span>Tenders By Products/Services/CPV</span>
                        </Link>
                        <ul>
                          <li>
                             <Link to="TenderDetails">
                              Chemical products Tenders
                            </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Construction materials Tenders
                            </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Fabricated products and materials Tenders
                            </Link>
                          </li>
                          <li>
                             <Link to="TenderDetails">
                              Road construction works Tenders
                            </Link>
                          </li>
                          <li>
                          <Link to="TenderCategory"className="AllcatLink">
                              More...
                            </Link>
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
                        <Link to="ProjectListing">
                          <span>Project By Sector</span>
                        </Link>
                        <ul>
                          <li>
                             <Link to="ProjectDetails">Defence</Link>
                          </li>
                          <li>
                             <Link to="ProjectDetails">Telecommunication</Link>
                          </li>
                          <li>
                             <Link to="ProjectDetails">Construction</Link>
                          </li>
                          <li>
                             <Link to="ProjectDetails">Aviation</Link>
                          </li>
                          <li>
                          <Link to="ProjectCategory"className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                      <Link to="ProjectListing">
                          <span>Project By Region</span>
                        </Link>
                        <ul>
                          <li>
                           <Link to="ProjectDetails">Africa Projects</Link>
                          </li>
                          <li>
                           <Link to="ProjectDetails">Asia Pacific Projects</Link>
                          </li>
                          <li>
                           <Link to="ProjectDetails">Balkan Region Projects</Link>
                          </li>
                          <li>
                           <Link to="ProjectDetails">Europe Projects</Link>
                          </li>
                          <li>
                          <Link to="ProjectCategory"className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="contaractAwardDetails">
                      Contract Awards
                    </Link>
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
            <Route exact path="" Component={HomePage} />
            <Route path="about" Component={AboutPage} />
            <Route path="login" Component={LoginPage} />            
            <Route path="contact" Component={ContactPage} />
            <Route path="TenderListing" Component={TenderListing} />
            <Route path="TenderDetails" Component={TenderDetails} />
            <Route path="ContractAwardDetails" Component={ContractAwardDetails} /> 
            <Route path="ProjectListing" Component={ProjectListing} />
            <Route path="ProjectDetails" Component={ProjectDetails} />   
            <Route path="ProjectCategory" Component={allProjectCatrgory} />  
            <Route path="TenderCategory" Component={allTenderCatrgory} />   
            <Route path="contaractAwardDetails" Component={ContractAwardDetails} />                                 
          </Routes>
          <Footer />
        </Router>
      </div>
      <div id="preloader" className="loaderPre"></div>
    </div>
  );
}

export default App;
