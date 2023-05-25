export default function NonAuthGrantsDetails(props) {
    const { grants_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    href="#TenderDetails"
                    className="question cursor-not-allowed"
                >
                    Donor Name & Contact
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="TenderDetails"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#authortyContactDetails"
                >
                    Grants Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="authortyContactDetails"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>BIG Ref No</h3>
                                    <p>{grants_data?.big_ref_no}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Title </h3>
                                    <p>{grants_data?.title}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Sector </h3>
                                    <p>{grants_data?.sectors}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#otherInformation"
                    className="collapsed question"
                >
                    Other Information
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="otherInformation"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Deadline</h3>
                                    <p>{grants_data?.deadline}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Post Date</h3>
                                    <p>{grants_data?.post_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}