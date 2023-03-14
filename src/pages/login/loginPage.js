import React, { Component } from 'react'


class LoginPage extends Component {   
    render(){        
        return(
            <div>
                <section class="breadcrumbs">
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Login Page</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Login Page</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <main className='bodyMain'>
                    <section className='loginPage'>
                        <div className='container-fluid'>
                            <div className='row'>
                            <div className='col-md-6 bg-grey loginPagePadding'>
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
                                                         <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
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
                                </div>
                            </div>
                            <div className='col-md-6 signupPagePadding'>
                                <div className='homeLoginMain'>
                                    <div className="section-title pb-0">                                
                                        <h3>Create Free Account</h3>                                    
                                    </div>

                                    {/* Login Div Start here  */}
                                    <div className='mainBoxLogin commonBoxShadow' id='loginBox'>
                                        <div className="section-title-p text-center loginBox">                                            
                                            <p className='wid100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <form  method="post" role="form" className="php-email-form">
                                                <div className="d-flex flex-wrap signupflex">
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>Name </label>
                                                         <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                                    </div>
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>Email ID</label>
                                                         <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                                    </div>
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>Phone No</label>
                                                         <input type="number" className="form-control" name="number" id="number" placeholder="Your Phone No" required="" />
                                                    </div>
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>Organization name*</label>
                                                         <input type="text" className="form-control" name="organizationName" id="organizationName" placeholder="Your Organization name" required="" />
                                                    </div>
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>website url</label>
                                                         <input type="url" className="form-control" name="websiteUrl" id="websiteUrl" placeholder="Your website url" required="" />
                                                    </div>
                                                    <div className="form-group mb-40 wid-50">
                                                        <label>Country</label>
                                                        <select class="form-control customInput customInputIcon" id="select1" name="type">
                                                            <option value="" selected disabled>Country</option>
                                                            <option value="Africa">Africa </option>
                                                            <option value="UAE">UAE</option>
                                                            <option value="India">India</option>                                            
                                                        </select>
                                                    </div>
                                                </div>                                               
                                                <div className="text-center"><button type="submit" className='commonBtn loginBtn'>Sign Up</button></div>
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
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>                    
                </main>                
            </div>
        );
    }
}
export default LoginPage;