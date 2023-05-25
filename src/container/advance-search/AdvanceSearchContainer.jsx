import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";

class AdvanceSearchContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <BreadCrumbs main='Advance Search' current={"Advance Search"} />

                <main className='bodyMain'>
                    <section
                        className='formContact section-bg'
                        id='advanceSerachBg'
                    >
                        <AdvanceSearch {...this.props} />
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default AdvanceSearchContainer;
