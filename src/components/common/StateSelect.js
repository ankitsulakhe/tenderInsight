
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";


export default function StateSelect({ getStatesData, name, multiple, onChange, id, value, placeholder = "Type state here" }) {
    const [records, setRecords] = useState([]);

    const fetchFunction = async (event) => {

        setTimeout(async () => {
            let keyword = event.query.toLowerCase();
            let res = await getStatesData({
                pageNo: "0",
                limit: "10",
                sortBy: "1",
                sortField: "code",
                keyword: keyword
            })
            setRecords(res.data?.result || [])

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
            placeholder={placeholder}
        />
    )
}