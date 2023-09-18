import React, { Fragment, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TenderSidebarFilter from "../common/TendersSidebarFilter";
import FullScreenLoadingGrow from "../common/FullScreenLoadingGrow";
import { Paginator } from "primereact/paginator";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { format, parseISO } from "date-fns";

export default function TendersList({ getRegionsData, getSectorsData, getCpvCodesData, getFundingAgencyData, data, loading, fetchTenders }) {
    const location = useLocation();

    useEffect(() => {
        let payload = {};
        if (location.state?.sectorVal && location.state.sectorVal.length > 0)
            payload.sectors = location.state.sectorVal
                .map((val) => {
                    return val.name;
                })
                .join(",");

        if (location.state?.regionsVal && location.state.regionsVal.length > 0)
            payload.regions = location.state.regionsVal
                .map((val) => {
                    return val.name;
                })
                .join(",");
        if (location.state?.cpvCodesVal && location.state.cpvCodesVal.length > 0)
            payload.cpv_codes = location.state.cpvCodesVal
                .map((val) => {
                    return val.name;
                })
                .join(",");

        if (Object.keys(payload).length) {
            handleFilter(payload);
        }

    }, [location.state])

    const handleFilter = (payload, extra = {}) => {
        fetchTenders({
            pageNo: payload.page && payload.page !== "" ? payload?.page : data.pageNo,
            limit: payload?.rows || data.limit,
            sortBy: payload?.sortOrder || data.sortBy,
            sortField: payload?.sortField || data.sortField,
            ...extra
        })
    }

    const DescriptionRow = (rowData) => {
        return <Link target="_blank" to={`/tenders/${rowData?.big_ref_no}`}>{rowData.description}</Link>;
    };

    const publishedDateRow = (rowData) => {
        return format(new Date(rowData?.published_date), "dd/MM/yyyy");
    };

    const closingDateRow = (rowData) => {
        try {
            if (rowData?.closing_date)
                return format(new Date(rowData?.closing_date), "dd/MM/yyyy");
            else
                return "";
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='row'>

            {
                !location?.state?.advance_search
                    ?
                    <div className='col-md-3'>
                        <div className='FLiterListDiv'>
                            <div className='filterTitle'>
                                <h2>Filter Your Data</h2>
                            </div>
                            <TenderSidebarFilter
                                getRegionsData={getRegionsData}
                                getSectorsData={getSectorsData}
                                getCpvCodesData={getCpvCodesData}
                                getFundingAgencyData={getFundingAgencyData}
                                onSubmit={(d) => handleFilter({}, d)}
                                noticeType={"Tender"}
                                {...location.state}
                            />
                        </div>
                    </div>
                    :
                    null
            }
            <div className={`col-md-${location?.state?.advance_search ? "12" : "9"}`}>
                <div className='ListDetailsDiv'>
                    {
                        loading
                            ?
                            <FullScreenLoadingGrow />
                            :
                            <Fragment>
                                <div>
                                    <h3 className='result_page'>
                                        {data?.count || 0} - Document matches your
                                        {location?.state?.advance_search ? " advance search" : ""} request
                                    </h3>
                                </div>
                                <DataTable
                                    value={data.result}
                                    sortField={data.sortField}
                                    sortOrder={Number(data.sortBy)}
                                    className='TableMainData'
                                    showGridlines
                                    tableStyle={{ minWidth: "50rem" }}
                                    onPage={(val) => handleFilter(val)}
                                    onSort={(val) => handleFilter(val)}
                                >
                                    <Column
                                        className='TableHeader'
                                        field='country'
                                        sortable
                                        header='Country'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='sectors'
                                        sortable
                                        header='Sectors'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={DescriptionRow}
                                        sortable
                                        header='Description'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={publishedDateRow}
                                        sortable
                                        header='Date'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={closingDateRow}
                                        sortable
                                        header='Closing Date'
                                    ></Column>
                                </DataTable>
                                <Paginator first={Number(data.pageNo)} rows={Number(data?.limit)} totalRecords={data.count} rowsPerPageOptions={[15, 25, 50]} onPageChange={(val) => handleFilter(val)} />
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}