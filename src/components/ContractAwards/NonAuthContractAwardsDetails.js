export default function NonAuthContractAwardsDetails(props) {
    const { contract_awards_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    href="#ContractAwardDetails"
                    className="question cursor-not-allowed"
                >
                    Authority Name & Address
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="ContractAwardDetails"
                    className="collapse show"
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
                    Contract Awards Details
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
                                    <p>{contract_awards_data?.big_ref_no}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Project Location</h3>
                                    <p>{contract_awards_data?.project_location}</p>
                                </div>
                            </div>
                            <div
                                className="col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Contractor Details</h3>
                                    <p>
                                        {contract_awards_data?.contractor_details}
                                    </p>
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
                                    <h3>CPV</h3>
                                    <p>{contract_awards_data?.cpv_codes}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Sector </h3>
                                    <p>{contract_awards_data?.sectors}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Award Publish Date</h3>
                                    <p>{contract_awards_data?.awards_publish_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}