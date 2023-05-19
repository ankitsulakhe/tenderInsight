import React from "react";
import { Link } from "react-router-dom";

function Header({
    sectors_data, sectors_data_loading,
    regions_data, regions_data_loading,
    cpv_codes_data, cpv_codes_data_loading,
    navigate
}) {

    const handleActionClick = (e, payload, type, url) => {
        e.preventDefault();
        navigate(url, { state: { [type]: [payload] } })
    }
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
                                    <Link to={"/tenders-list"}>
                                        <span>Tenders By Sector</span>
                                    </Link>
                                    <ul>
                                        {
                                            sectors_data_loading
                                                ?
                                                <>Loading...</>
                                                :
                                                sectors_data && sectors_data.map(function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <Link to={"/tenders-list"} onClick={(e) => handleActionClick(e, val, "sectorVal", "/tenders-list")}>
                                                                {val.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                        }
                                        <li>
                                            <Link to={"/tenders-by-sectors"} className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to={"/tenders-list"}>
                                        <span>Tenders By Region</span>
                                    </Link>
                                    <ul>
                                        {
                                            regions_data_loading
                                                ?
                                                <>Loading...</>
                                                :
                                                regions_data && regions_data.map(function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <Link to={"/tenders-list"} onClick={(e) => handleActionClick(e, val, "regionsVal", "/tenders-list")}>
                                                                {val.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                        }
                                        <li>
                                            <Link to={"/tenders-by-regions"} className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to={"/tenders-list"}>
                                        <span>Tenders By Products/Services/CPV</span>
                                    </Link>
                                    <ul>
                                        {
                                            cpv_codes_data_loading
                                                ?
                                                <>Loading...</>
                                                :
                                                cpv_codes_data && cpv_codes_data.map(function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <Link to={"/tenders-list"} onClick={(e) => handleActionClick(e, val, "cpvCodesVal", "/tenders-list")}>
                                                                {val.code}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                        }
                                        <li>
                                            <Link to={"/tenders-by-cpvcodes"} className="AllcatLink">
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
                                    <Link to={"/projects-list"}>
                                        <span>Project By Sector</span>
                                    </Link>
                                    <ul>
                                        {
                                            sectors_data_loading
                                                ?
                                                <>Loading...</>
                                                :
                                                sectors_data && sectors_data.map(function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <Link to={"/projects-list"} onClick={(e) => handleActionClick(e, val, "sectorVal", "/projects-list")}>
                                                                {val.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                        }
                                        <li>
                                            <Link to={"/projects-by-sectors"} className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to={"/projects-list"}>
                                        <span>Project By Region</span>
                                    </Link>
                                    <ul>
                                        {
                                            regions_data_loading
                                                ?
                                                <>Loading...</>
                                                :
                                                regions_data && regions_data.map(function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <Link to={"/projects-list"} onClick={(e) => handleActionClick(e, val, "regionsVal", "/projects-list")}>
                                                                {val.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                        }
                                        <li>
                                            <Link to={"/projects-by-regions"} className="AllcatLink">
                                                More...
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"contract-awards-list"}>
                                Contract Awards
                            </Link>
                        </li>
                        <li>
                            <Link to={"grants-list"}>
                                Grants
                            </Link>
                        </li>
                        <li>
                            <Link to="service">
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