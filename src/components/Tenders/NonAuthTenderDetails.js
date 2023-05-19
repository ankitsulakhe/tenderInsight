export default function NonAuthTenderDetails(props) {
    const { tenders_data } = props;

    return (
        <ul className='faq-list'>
            <li>
                <div
                    className='question cursor-not-allowed'
                >
                    Authority Name & Contact
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                </div>
                <div
                    id='TenderDetails'
                    className='collapse'
                    data-bs-parent='.faq-list'
                >
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle='collapse'
                    className='collapsed question'
                    href='#authortyContactDetails'
                >
                    Tender Details
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                </div>
                <div
                    id='authortyContactDetails'
                    className='collapse show'
                    data-bs-parent='.faq-list'
                >
                    <div className='pricing pdlr10'>
                        <div className='row'>
                            <div
                                className='col-md-9 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3> Description </h3>
                                    <p> {tenders_data?.description} </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Published
                                        Date
                                    </h3>
                                    <p>
                                        {tenders_data?.published_date}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Closing Date
                                    </h3>
                                    <p>
                                        {tenders_data?.closing_date}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-md-3 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>Country</h3>
                                    <p>{tenders_data?.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle='collapse'
                    href='#otherInformation'
                    className='collapsed question'
                >
                    Other Information
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                </div>
                <div
                    id='otherInformation'
                    className='collapse'
                    data-bs-parent='.faq-list'
                >
                    <div className='pricing pdlr10'>
                        <div className='row'>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>EMD </h3>
                                    <p>
                                        {tenders_data?.emd}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Estimated
                                        Cost
                                    </h3>
                                    <p>
                                        {tenders_data?.estimated_cost}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Document
                                    </h3>
                                    <p>{tenders_data?.documents}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}