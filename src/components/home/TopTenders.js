import { Link } from "react-router-dom";

export default function TopTenders() {
    return (
        <section id="TopTenders" className="services ">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Tenders</h2>
                    <h3>
                        Top <span>Categories</span>
                    </h3>
                    <p className="lg-font">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore
                    </p>
                </div>

                <div className="row">
                    <div
                        className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="icon-box">
                            <div className="icon nobg">
                                {/* <img src={defence} /> */}
                            </div>
                            <h4>
                                <Link href="">Defence</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}