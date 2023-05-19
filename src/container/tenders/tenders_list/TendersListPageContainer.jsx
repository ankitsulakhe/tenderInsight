import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import TenderListInfo from "../../../components/Tenders/TenderListInfo";
import TendersList from "../../../components/Tenders/TendersList";

class TendersListPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            tenders_loading: true,
            tenders_data: {},
        };
    }

    fetchTenders = async (payload) => {
        let tenderRes = await this.props.getTendersData(payload);
        if (tenderRes.isSuccess) {
            this.setState({
                tenders_loading: false,
                tenders_data: tenderRes.data,
            });
        }
    };

    componentDidMount() {
        let extra = {};
        const { state } = this.props.location;

        if (state?.sectorVal && state.sectorVal.length > 0)
            extra.sectors = state.sectorVal
                .map((val) => {
                    return val.name;
                })
                .join(",");

        if (state?.regionsVal && state.regionsVal.length > 0)
            extra.regions = state.regionsVal
                .map((val) => {
                    return val.name;
                })
                .join(",");
        if (state?.cpvCodesVal && state.cpvCodesVal.length > 0)
            extra.cpv_codes = state.cpvCodesVal
                .map((val) => {
                    return val.name;
                })
                .join(",");

        this.fetchTenders({
            pageNo: "0",
            limit: "15",
            sortBy: "1",
            sortField: "address",
            ...extra,
        });
    }

    render() {
        if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
        return (
            <Fragment>
                <BreadCrumbs main='Tenders List' current={"Tenders List"} />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <TenderListInfo />
                        </div>
                    </section>
                    <section className='CategoryLst spacelr'>
                        <div className='container-fluid'>
                            <TendersList
                                {...this.props}
                                loading={this.state.tenders_loading}
                                data={this.state.tenders_data}
                                fetchTenders={this.fetchTenders}
                            />
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default TendersListPageContainer;
