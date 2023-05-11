import { Link } from "react-router-dom";

export default function GlobalTenders({ row }) {
    // console.log(row, "row");
    return (
        <div className="services TabIconList">
            {
                row && row.map(function (val, ind) {
                    return (
                        <div className="icon-box tabsIcon" key={ind}>
                            <div className="tabListHeader">
                                <h4>{val?.sector?.name}</h4>
                            </div>
                            <div className="tablistbody">
                                <h4>
                                    <Link to="/">
                                        {val.authority_name}
                                    </Link>
                                </h4>
                            </div>
                            <div className="tabListFooter">
                                <span>
                                    <strong>Ref No</strong>: {val.big_ref_no}{" "}
                                </span>
                                <span>
                                    <strong>Due Date</strong> : {val.closing_date}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}