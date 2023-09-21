import React, { Component, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "./common/Button";

export default function SubscribeComponent({ data, handlePlan, submit_loading, success }) {
    console.log(data, "data");
    const categories = [
        { name: "Tender Information", key: "A" },
        { name: "Contract Awards", key: "B" },
        { name: "Project Information", key: "C" },
        { name: "Grants", key: "D" },
        { name: "Customer Care", key: "E" },
        { name: "Access to Historical Tender Data", key: "F" },
        { name: "Key Account Manager", key: "G" },
        { name: "Customised Intranet", key: "H" },
        { name: "Micro Site", key: "I" },
        { name: "Company Data Research", key: "J" },
        { name: "Email Alerts", key: "K" },
        { name: "User Id", key: "L" },
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(
                (category) => category.key !== e.value.key
            );

        setSelectedCategories(_selectedCategories);
    };

    return (

        <div className="row">
            {
                success ?
                    <div className="alert alert-success">
                        {success.message}
                    </div>
                    :
                    null
            }
            {
                data.map(function (val, key) {
                    return (
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            key={key}
                        >
                            <div className="box" >
                                <h3>{val.title}</h3>
                                <h4>
                                    <sup>USD</sup>{val.amount} <span> / {val.validity_days} month</span>
                                </h4>
                                <div dangerouslySetInnerHTML={{ __html: val.access }}></div>
                                <div className="btn-wrap">
                                    <Button value={"Choose Plan"} loading={submit_loading} className="btn-buy" onClick={() => handlePlan({ plan_id: val.plan_id })} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }



            {/* <div
                className="col-lg-4 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="box">
                    <h3>Customise Package </h3>
                    <h4>
                        <sup>USD </sup>199<span> / month</span>
                    </h4>
                    <ul className="checboixpackage">
                        {categories.map((category) => {
                            return (
                                <li
                                    key={category.key}
                                    className="flex align-items-center"
                                >
                                    <Checkbox
                                        inputId={category.key}
                                        name="category"
                                        value={category}
                                        onChange={onCategoryChange}
                                        checked={selectedCategories.some(
                                            (item) => item.key === category.key
                                        )}
                                    />
                                    <label htmlFor={category.key} className="ml-2">
                                        {category.name}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                            Choose Plan
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
