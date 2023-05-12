export default function RegisterComponent({ register_description, register_title }) {
    return (
        <div className='col-md-6 signupPagePadding'>
            <div className='homeLoginMain'>
                <div className="section-title pb-0">
                    <h3>{register_title}</h3>
                </div>

                <div className='mainBoxLogin commonBoxShadow'>
                    <div className="section-title-p text-center loginBox">
                        <p className='wid100'>{register_description}</p>
                        <form method="post" className="php-email-form">
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
                                    <select className="form-control customInput customInputIcon" id="select1" name="type">
                                        <option value="" selected disabled>Country</option>
                                        <option value="Africa">Africa </option>
                                        <option value="UAE">UAE</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center"><button type="submit" className='commonBtn loginBtn'>Sign Up</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}