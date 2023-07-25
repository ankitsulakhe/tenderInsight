import React, { Fragment } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TenderSidebarFilter from "../common/TendersSidebarFilter";
import FullScreenLoadingGrow from "../common/FullScreenLoadingGrow";
import { Paginator } from "primereact/paginator";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { format, parseISO } from "date-fns";

export default function ProjectsList({ getRegionsData, getSectorsData, getCpvCodesData, getFundingAgencyData, data, loading, fetchProjects }) {
    const location = useLocation();

    const handleFilter = (payload, extra = {}) => {
        fetchProjects({
            pageNo: payload.page && payload.page !== "" ? payload?.page : data.pageNo,
            limit: payload?.rows || data.limit,
            sortBy: payload?.sortOrder || data.sortBy,
            sortField: payload?.sortField || data.sortField,
            ...extra
        })
    }

    const DescriptionRow = (rowData) => {
        return <Link target="_blank" to={`/projects/${rowData?.project_id}`}>{rowData.project_background}</Link>;
    };

    const publishDateRow = (rowData) => {
        return format(parseISO(rowData.project_publishing_date), "dd/MM/yyyy");
    };

    const estimatedDateRow = (rowData) => {
        return format(parseISO(rowData.estimated_project_completion_date), "dd/MM/yyyy");
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
                                noticeType={"Project"}
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
                                        field='project_location'
                                        sortable
                                        header='Location'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='sectors'
                                        sortable
                                        header='Project Sector'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={DescriptionRow}
                                        sortable
                                        header='Project Background'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={publishDateRow}
                                        sortable
                                        header='Project Date'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={estimatedDateRow}
                                        sortable
                                        header='Project Deadline'
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