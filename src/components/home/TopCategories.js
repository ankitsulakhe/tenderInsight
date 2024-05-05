import { Link } from "react-router-dom";
import tenderImages from "../../tenderWhy.png";

export default function TopCategories({ data }) {
    return (
        <div>
            <section id="TopTenders" className="services ">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Tenders</h2>
                        <h3>
                            {data?.category_title}
                        </h3>
                        <p className="lg-font">
                            {data?.category_description}
                        </p>
                    </div>

                    <div className="row justify-center">

                        {
                            data?.category_data.map(function (val, ind) {
                                return (
                                    <div
                                        className="top-item-flex"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        key={ind}
                                    >
                                        <div className="icon-box" >
                                            <div className="icon nobg">
                                                <img src={val.icon} alt={val.name} />
                                            </div>
                                            <h4>
                                                <Link href="">{val.name}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="tender-cat-flex">
                <div className="tend-count-flex" data-aos="fade-up">
                    <div className="count-tent-item">
                        <div className="count-img operation-img"></div>
                        <div className="count-cat">20
                        </div>
                        <div className="cat-clas-desc">
                            Years of operations
                        </div>
                    </div>
                    <div className="count-tent-item">
                        <div className="count-img tender-img"></div>
                        <div className="count-cat">1,36,452+
                        </div>
                        <div className="cat-clas-desc">
                            Total Live Tender
                        </div>
                    </div>
                    <div className="count-tent-item">
                        <div className="count-img archive-img"></div>
                        <div className="count-cat">856521
                        </div>
                        <div className="cat-clas-desc">
                            Archive Tender
                        </div>
                    </div>
                    <div className="count-tent-item">
                        <div className="count-img agent-img"></div>
                        <div className="count-cat">65+
                        </div>
                        <div className="cat-clas-desc">
                            Local Agents
                        </div>
                    </div>
                    <div className="count-tent-item">
                        <div className="count-img funding-img"></div>
                        <div className="count-cat">170+
                        </div>
                        <div className="cat-clas-desc">
                            Funding Agencies
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" class="about services section-bg">
                <div class="container " data-aos="fade-up">
                    <div class="section-title">
                        <h2>Welcome to TenderInsight</h2>
                        <p> Your Gateway to Opportunities</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                            <img src={tenderImages} alt="main logo" className="tendeWhyImag" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <p class="fst-italic">At TenderInsight, we believe that every opportunity begins with a tender. Whether you're a seasoned contractor, a budding entrepreneur, or a supplier looking to expand your horizons, you've come to the right place. Our platform is designed to connect you with a myriad of tender opportunities, simplifying the process and opening doors to new ventures.</p>
                            <p class="fst-italic">At TenderInsight, we believe that every opportunity begins with a tender. Whether you're a seasoned contractor, a budding entrepreneur, or a supplier looking to expand your horizons, you've come to the right place. Our platform is designed to connect you with a myriad of tender opportunities, simplifying the process and opening doors to new ventures.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" class="about services">
                <div class="container " data-aos="fade-up">
                    <div class="section-title">
                        <h2>Why Choose TenderInsight</h2>
                        <p> Your Gateway to Opportunities</p>
                    </div>
                    <div class="row">

                        <div class="col-lg-12 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <ul className="why-us-naos">
                                <li><span className="icon-why-img comp-icon-img"></span><span>Comprehensive Listings</span> Explore a diverse range of tenders from various industries and sectors, all in one place. Our extensive database ensures that you never miss out on a potential opportunity.</li>
                                <li><span className="icon-why-img interface-icon-img"></span><span>User-Friendly Interface</span> Navigating through tender opportunities has never been easier. Our intuitive platform allows you to search, filter, and apply for tenders effortlessly, saving you valuable time and effort.</li>
                                <li><span className="icon-why-img alert-icon-img"></span><span>Personalized Alerts</span> Stay ahead of the curve with customized tender alerts tailored to your preferences. Receive real-time notifications about relevant opportunities, ensuring that you're always in the loop.</li>
                                <li><span className="icon-why-img expert-icon-img"></span><span>Expert Guidance</span> Access expert insights and resources to enhance your tendering experience. From tips on writing winning proposals to guidance on compliance requirements, we're here to support you every step of the way.</li>
                                <li><span className="icon-why-img secure-icon-img"></span><span>Secure and Reliable</span> Trust is paramount in the world of tenders. Rest assured, our platform prioritizes security and reliability, providing a safe environment for you to explore and engage with tender opportunities.</li>
                            </ul>


                        </div>
                        {/* <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img class="img-fluid" alt="" />

            </div> */}
                        <div className="hig-whys">
                            Don't let opportunities slip through your fingers. Join TenderInsight today and unlock a world of possibilities. Whether you're a buyer seeking competitive bids or a supplier eager to showcase your offerings, we're here to facilitate connections and foster growth.
                            <br />
                            Explore. Bid. Win. With TenderInsight, the future is yours to seize.

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}