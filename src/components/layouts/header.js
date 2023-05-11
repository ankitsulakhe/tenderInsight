import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <Link to="">
                    <img src="https://bidsinfoglobal.com/static/media/logo.96dc4c1272d7ec77c64e.jpg" alt="main logo" className="logo" />
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About Us</Link>
                        </li>
                        <li className="dropdown">
                            <Link to="/">
                                <span>Tenders</span> <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul>
                                <li className="dropdown">
                                    <Link to="TenderListingBySector">
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
                                            <Link to="AllTenderBySector" className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="TenderListingByRegion">
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
                                            <Link to="AllTenderByRegion" className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="TenderListingByCPV">
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
                                            <Link to="AllTenderByCPV" className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/">
                                <span>Project</span> <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul>
                                <li className="dropdown">
                                    <Link to="ProjectListingBySector">
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
                                            <Link to="AllProjectBySector" className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="ProjectListingByRegion">
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
                                            <Link to="AllProjectByRegion" className="AllcatLink">
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
                            <Link to="grantsDetails">
                                Grants
                            </Link>
                        </li>
                        <li>
                            <Link to="ServicePage">
                                Services
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header;