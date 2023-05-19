import { useFormik } from "formik";
import Input from "../common/Input";
import { Button } from "../common/Button";
import { Dropdown } from "primereact/dropdown";
import CpvCodeSelect from "./CpvCodeSelect";
import SectorSelect from "./SectorSelect";
import RegionSelect from "./RegionSelect";

export default function TenderSidebarFilter({ onSubmit, loading, getRegionsData, getSectorsData, getCpvCodesData, sectorVal = [], cpvCodesVal = [], regionsVal = [], noticeType }) {

    const noticeTypetems = ["Tender", "Project", "Contract Award", "Grants"];

    const handleSubmit = (values) => {
        let payload = { ...values };

        payload.sectors = payload.sectors && payload.sectors.map((val) => {
            return val.name
        }).join(",");
        payload.regions = payload.regions && payload.regions.map((val) => {
            return val.name
        }).join(",");
        payload.cpv_codes = payload.cpv_codes && payload.cpv_codes.map((val) => {
            return val.name
        }).join(",");

        onSubmit(payload);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            keywords: "",
            cpv_codes: cpvCodesVal,
            sectors: sectorVal,
            regions: regionsVal,
            location: "",
            notice_type: "",
            funding_agency: ""
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    return (
        <div className='FilterSerach'>
            <form
                className='php-email-form'
                onSubmit={formik.handleSubmit}
            >
                <div className='flex'>
                    <div className='colsP form-group'>
                        <label htmlFor='keywords'>
                            Free Text
                        </label>
                        <Input
                            type='text'
                            className='form-control'
                            id='keywords'
                            name="keywords"
                            placeholder='Enter your keywords'
                            onChange={formik.handleChange("keywords")}
                            value={formik?.values?.keywords || ""}
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='cpv_codes'>
                            Industry & Product Code (CPV)
                        </label>
                        <CpvCodeSelect
                            name="cpv_codes"
                            id="cpv_codes"
                            onChange={formik.handleChange("cpv_codes")}
                            value={formik?.values?.cpv_codes || []}
                            multiple={true}
                            getCpvCodesData={getCpvCodesData}
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='sectors'>
                            Sector
                        </label>
                        <SectorSelect
                            name="sectors"
                            id="sectors"
                            onChange={formik.handleChange("sectors")}
                            value={formik?.values?.sectors || []}
                            multiple={true}
                            getSectorsData={getSectorsData}
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='regions'>
                            Region / Country
                        </label>
                        <RegionSelect
                            name="regions"
                            id="regions"
                            onChange={formik.handleChange("regions")}
                            value={formik?.values?.regions || []}
                            multiple={true}
                            getRegionsData={getRegionsData}
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='state'>
                            Location / State Or City
                        </label>
                        <Input
                            type='text'
                            className='form-control'
                            id='location'
                            name="location"
                            placeholder='State / City'
                            onChange={formik.handleChange("location")}
                            value={formik?.values?.location || ""}
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='notice_type'>
                            Notice Type
                        </label>
                        <Dropdown
                            name="notice_type"
                            id="notice_type"
                            value={formik?.values?.notice_type || noticeType}
                            onChange={formik.handleChange("notice_type")}
                            options={noticeTypetems}
                            placeholder="Select Notice type"
                            className="w-full md:w-14rem"
                        />
                    </div>
                    <div className='colsP form-group'>
                        <label htmlFor='funding_agency'>
                            Funding Agency
                        </label>
                        <Input
                            type='text'
                            className='form-control'
                            id='funding_agency'
                            name="funding_agency"
                            placeholder='Enter funding agency'
                            onChange={formik.handleChange("funding_agency")}
                            value={formik?.values?.funding_agency || ""}
                        />
                    </div>
                    <div className='text-center'>
                        <Button className={"commonBtn loginBtn"} type={"submit"} id={"search-submit"} value={"Apply Filter"} loading={loading} />
                    </div>
                </div>
            </form>
        </div>
    )
}