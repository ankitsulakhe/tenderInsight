import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

function Footer({ links, contactDetails }) {
    return (
        <div className='footermain'>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 footer-contact">
                            <img src={logo} alt="main logo" className="logo" />
                                <h2 className="titlepsocons">Contact Info :</h2>
                                <p>{contactDetails?.address}</p>
                                <div className="flex-contacts">
                                <p><strong>Phone:</strong> {contactDetails?.phone}</p>
                                <p><strong>Email:</strong> {contactDetails?.email}</p>
                                </div>
                                <div className="footer-links">
                                <h4>{links?.title}</h4>
                                <p>{links?.description}</p>
                                <div className="social-links mt-3">
                                    {links?.twitter ? <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link> : null}
                                    {links?.facebook ? <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link> : null}
                                    {links?.instagram ? <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link> : null}
                                    {links?.skype ? <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link> : null}
                                    {links?.linkedin ? <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link> : null}
                                    {links?.whatsapp ? <Link to="/" className="linkedin"><i className="bx bxl-whatsapp"></i></Link> : null}
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-6 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i>  <Link to="">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/advance-search">Advanced Search</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/contact">Contact Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/login">Login / Register</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/tenders-list">Tenders</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/projects-list">Project</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/contract-awards-list">Contract Awards</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/grants-list">Grants </Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/subscribe">Subscribe</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="/EProcurement">E - Procurement</Link></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container py-3">
                    <div className="copyright">
                        &copy; Copyright <strong><span>TenderInsight</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
            <Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </div>
    )
}

export default Footer;