import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footermain'>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Bidsinfoglobal</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i>  <Link to="">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="about">About Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="advanceSearch">Advanced Search</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="Contact">Contact Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="login">Login / Register</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="termandcondition">Terms and condition </Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i><Link to="tender">Tenders</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="project">Project</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="contaractAward">Contract Awards</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="grantsDetails">Grants </Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="subscribe">Subscribe</Link></li>
                                    <li><i className="bx bx-chevron-right"></i><Link to="EProcurement">E - Procurement</Link></li>


                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                    <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                    <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                    <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link>
                                    <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                                    <Link to="/" className="linkedin"><i className="bx bxl-whatsapp"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-3">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Bidsinfoglobal</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
            <Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </div>
    )
}

export default Footer;