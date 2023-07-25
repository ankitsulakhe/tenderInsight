import { format, parseISO } from "date-fns";

export default function NonAuthProjectsDetails(props) {
    const { projects_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#TenderDetails"
                    className="question"
                >
                    Project Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="TenderDetails"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Name </h3>
                                    <p>{projects_data?.project_name}</p>
                                </div>
                            </div>
                            <div className="col-md-4 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Location</h3>
                                    <p>{projects_data?.project_location}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Status</h3>
                                    <p>{projects_data?.project_status}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#authortyContactDetails"
                >
                    Dates
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="authortyContactDetails"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Publishing Date</h3>
                                    <p>{projects_data?.project_publishing_date ? format(parseISO(projects_data?.project_publishing_date), "dd/MM/yyyy") : "-"}</p>
                                </div>
                            </div>
                            <div className="col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Estimated Project Completion Date</h3>
                                    <p>{projects_data?.estimated_project_completion_date ? format(parseISO(projects_data?.estimated_project_completion_date), "dd/MM/yyyy") : "-"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    className="collapsed question cursor-not-allowed"
                >
                    Project Financer & Client Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="otherInformation"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                </div>
            </li>  <li>
                <div
                    data-bs-toggle="collapse"
                    href="#otherInformationProject"
                    className="collapsed question"
                >
                    Other Information
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="otherInformationProject"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Sector</h3>
                                    <p>{projects_data?.sectors}</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>CPV</h3>
                                    <p>{projects_data?.cpv_codes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}