import React, { Component,useState } from 'react'
import wordMap from './map.png'; 
import Header  from '../../header/header';
import Footer from '../../footer/footer'

class HomePage extends Component {   
    render(){        
        return(
            <div className='Wrapper'>
            <Header/>
                <main className='bodyMain'>
                    <section className='mainBanner p-0'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-8 px-0 flevalgin'>
                                <img src={wordMap} alt="mapImage" className='imgWorldMap' />    
                                <div className="searcHhome">
                                    <div className='mainSearchflex'>
                                    <div className='flexSearch'>
                                        <div class="selectInput">
                                            <input type="text" size="30" name="search_text" class="form-control customInput customInputIcon" id="input1" placeholder="Free text search..." />
                                            <div id="livesearch"></div>
                                        </div>
                                        <div class="selectSearch">
                                        <select class="form-control customInput customInputIcon" id="select1" name="type">
                                            <option value="" selected disabled>Country</option>
                                                <option value="Africa">Africa </option>
                                                <option value="UAE">UAE</option>
                                                <option value="India">India</option>                                            
                                            </select>
                                        </div>
                                        <div class="selectSearch">
                                            <select class="form-control customInput customInputIcon" id="select1" name="type">
                                            <option value="" selected disabled>Region</option>
                                                <option value="Africa">Africa </option>
                                                <option value="UAE">UAE</option>
                                                <option value="India">India</option>                                            
                                            </select>
                                        </div>
                                        
                                        <div class="selectButton">
                                            <button class="awe-btn awe-btn-13 custombutton" id="btn-search1" ><i class="bi bi-search"></i> Search</button>
                                        </div>                                
                                    </div>
                                    <a className='advancBtn'><i className="bi bi-funnel-fill"></i>Advanced Search</a>
                                    </div>
                                </div>                                                   
                                </div>
                                <div className='col-md-4 bg-grey'>
                                    <div className='homeLoginMain'>
                                        <div className="section-title pb-0">                                
                                            <h3>Customer Login</h3>                                    
                                        </div>

                                        {/* Login Div Start here  */}
                                        <div className='mainBoxLogin commonBoxShadow' id='loginBox'>
                                            <div className="section-title-p text-center loginBox">                                            
                                                <p className='wid100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                                <form  method="post" role="form" className="php-email-form">
                                                    <div className="row">
                                                        <div className="form-group mb-40">
                                                            <label>Username</label>
                                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                                        </div>
                                                        <div className="form-group mb-40">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" name="password" id="password" placeholder="Your Password" required="" />
                                                        </div>
                                                    </div>                                               
                                                    <div className="text-center"><button type="submit" className='commonBtn loginBtn'>Login</button></div>
                                                </form>
                                                <span className='d-block forgotLink' id='fogotLoginbtn'>Forgot Password? </span>
                                            </div>
                                        </div> 
                                        {/* Login Div End here  */}


                                        {/* forgot Div start here  */}
                                        <div className='mainBoxLogin commonBoxShadow d-none' id='forgotBox'>
                                            <div className="section-title-p text-center loginBox">                                            
                                                <p className='wid100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                                <form  method="post" role="form" className="php-email-form">
                                                    <div className="row">
                                                        <div className="form-group mb-40">
                                                            <label>Email</label>
                                                            <input type="email" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                                        </div>
                                                                                                        
                                                    </div>                                               
                                                    <div className="text-center"><button type="submit" className='commonBtn loginBtn'>Login</button></div>
                                                </form>
                                                <span className='d-block forgotLink' id='backloginbtn' >Back to login </span>
                                            </div>
                                        </div> 
                                    {/* forgot Div End here  */}
                                        <div className='loginBottom'>
                                            <div className='loginbtmtext text-center'>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur
                                                </p>
                                                <span className='d-block createLink'>
                                                Click for New User
                                                </span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="TopTenders" className="services ">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                            <h2>Tenders</h2>
                            <h3>Top <span>Categories</span></h3>
                            <p className='lg-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>

                            <div className="row">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="">Lorem Ipsum</a></h4>                            
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="">Category Name</a></h4>                        
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-slideshow"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-arch"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-arch"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                <div className="icon"><i className="bx bx-arch"></i></div>
                                <h4><a href="">Category Name</a></h4>                            
                                </div>
                            </div>

                            </div>

                        </div>
                        </section>

                        <section id="GlobalTenders" className="services section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                            <h2>Various</h2>
                            <h3>Top <span>Tenders</span></h3>
                            <p className='lg-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>

                            <div className="row">
                            <div className="col-lg-12 align-items-stretch mb-4 mt-2" data-aos="fade-up" data-aos-delay="100">
                                <div className='tender_tab'>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                            <i className='bx bx-globe'></i>Global Tenders
                                            </button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                            <i className='bx bx-globe'></i>Indian Tenders
                                            </button>                                   
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                            <div className='services TabIconList'>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Software Services</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                        <div className='services TabIconList'>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                                <div className="icon-box tabsIcon">                                            
                                                    <div className='tabListHeader'>
                                                        <h4>Sectors : Metals and Non-Metals</h4>
                                                    </div>
                                                    <div className='tablistbody'><h4><a href="">2023 Regional Management Development Conference</a></h4></div>
                                                    <div className='tabListFooter'>
                                                        <span><strong>Ref No</strong>: 485565659 </span><span><strong>Due Date</strong> : 14 Mar 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>                      

                            </div>

                        </div>
                        </section>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default HomePage;