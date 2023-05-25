
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";


export default function CpvCodeSelect({ getCpvCodesData, name, multiple, onChange, id, value, className = "w-100" }) {
    const [records, setRecords] = useState([]);

    const fetchFunction = async (event) => {

        setTimeout(async () => {
            let keyword = event.query.toLowerCase();
            let res = await getCpvCodesData({
                pageNo: "0",
                limit: "10",
                sortBy: "1",
                sortField: "code",
                keyword: keyword
            })
            setRecords(res?.data?.result)

        }, 1000);
    }


    return (
        <AutoComplete
            id={id}
            name={name}
            field={"name"}
            multiple={multiple}
            value={value}
            suggestions={records}
            completeMethod={fetchFunction}
            onChange={onChange}
            className="w-100"
            placeholder="Type code or keyword..."
        />
    )
}