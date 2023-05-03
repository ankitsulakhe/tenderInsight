import React, { Component } from 'react'



class SearchBar extends Component {   
    render(){        
        return(
            <div className="searcHhome">
                 <div className='mainSearchflex'>
                    <div className='flexSearch'>
                        <div class="selectInput">
                            <input type="text" size="30" name="search_text" class="form-control customInput customInputIcon" id="input1" placeholder="Free text search..." />
                            <div id="livesearch"></div>
                        </div>
                        <div class="selectSearch">
                        <select class="form-control customInput customInputIcon" id="select1" name="type">
                            <option value="" selected disabled>Country</option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>                                            
                            </select>
                        </div>
                        <div class="selectSearch">
                            <select class="form-control customInput customInputIcon" id="select1" name="type">
                            <option value="" selected disabled>Region</option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>                                            
                            </select>
                        </div>
                        
                        <div class="selectButton">
                            <button class="awe-btn awe-btn-13 custombutton" id="btn-search1" ><i class="bi bi-search"></i> Search</button>
                        </div>                                
                    </div>
                    <a className='advancBtn'><i className="bi bi-funnel-fill"></i>Advanced Search</a>
                </div>
            </div>  
        );
    }
}
export default SearchBar;