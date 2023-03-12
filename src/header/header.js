import React, { Component } from 'react'
import logo from './logo.jpg'; 

class Header extends Component {
    render(){
       return(
        <div className='headermain'>            
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                    <ul className='d-flex topBarMenu'>
                        <li><a className="nav-link scrollto active" href="#hero">Advanced Search </a></li>
                        <li><a className="nav-link scrollto" href="#about">Public Procurement</a></li>
                        <li><a className="nav-link scrollto" href="#services">Contact Us </a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Subscribe </a></li>
                        <li><a className="nav-link scrollto" href="#team"> Login /  Register </a></li>
                    </ul>
                    </div>
                </div>
            </section>            
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                <a href="index.html"><img src={logo} alt="main logo" className="logo"/></a>
                
                

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link active" href="#hero">Home</a></li>
                    <li><a className="nav-link" href="#about">About Us </a></li>
                    <li><a className="nav-link" href="#services">Tenders </a></li>
                    <li><a className="nav-link " href="#portfolio">Project</a></li>
                    <li><a className="nav-link" href="#team">Contract Awards </a></li>                    
                    <li><a className="nav-link" href="#contact">Company Data </a></li>
                    <li><a className="nav-link" href="#contact">Services  </a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
        </div>
       );
    }
}
export default Header;