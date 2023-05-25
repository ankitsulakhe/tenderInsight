import React, { Fragment } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TenderSidebarFilter from "../common/TendersSidebarFilter";
import FullScreenLoadingGrow from "../common/FullScreenLoadingGrow";
import { Paginator } from "primereact/paginator";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function GrantsList({ getRegionsData, getSectorsData, getCpvCodesData, getFundingAgencyData, data, loading, fetchGrants }) {
    const location = useLocation();

    const handleFilter = (payload, extra = {}) => {
        fetchGrants({
            pageNo: payload.page && payload.page !== "" ? payload?.page : data.pageNo,
            limit: payload?.rows || data.limit,
            sortBy: payload?.sortOrder || data.sortBy,
            sortField: payload?.sortField || data.sortField,
            ...extra
        })
    }

    const DescriptionRow = (rowData) => {
        return <Link target="_blank" to={`/grants/${rowData?.big_ref_no}`}>{rowData.title}</Link>;
    };

    return (
        <div className='row'>
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
                        noticeType="Grants"
                        {...location.state}
                    />
                </div>
            </div>
            <div className='col-md-9'>
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
                                        request
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
                                        field='location'
                                        sortable
                                        header='Location'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='sectors'
                                        sortable
                                        header='Grant Sector'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={DescriptionRow}
                                        sortable
                                        header='Grant Title'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='post_date'
                                        sortable
                                        header='Grant Date'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='deadline'
                                        sortable
                                        header='Grant Deadline'
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