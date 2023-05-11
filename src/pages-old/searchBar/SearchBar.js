import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class SearchBar extends Component {
    render() {
        return (
            <div className="searcHhome">
                <div className='mainSearchflex'>
                    <div className='flexSearch'>
                        <div className="selectInput">
                            <input type="text" size="30" name="search_text" className="form-control customInput customInputIcon" id="input1" placeholder="Free text search..." />
                            <div id="livesearch"></div>
                        </div>
                        <div className="selectSearch">
                            <select className="form-control customInput customInputIcon" id="select1" name="type" defaultValue={""}>
                                <option value="" disabled>Country</option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>
                            </select>
                        </div>
                        <div className="selectSearch">
                            <select className="form-control customInput customInputIcon" id="select1" name="type" defaultValue={""}>
                                <option value="" disabled>Region</option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div className="selectButton">
                            <button className="awe-btn awe-btn-13 custombutton" id="btn-search1" ><i className="bi bi-search"></i> Search</button>
                        </div>
                    </div>
                    <Link to={"/"} className='advancBtn'><i className="bi bi-funnel-fill"></i>Advanced Search</Link>
                </div>
            </div>
        );
    }
}
export default SearchBar;