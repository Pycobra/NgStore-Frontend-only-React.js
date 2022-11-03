import React, { useEffect } from "react";
import "./search-hover.styles.css";
import { ReactComponent as UserSvg } from '../asset/user.svg';
import FormInput from "../form-input/form-input.component";
import { useState } from "react";



const SearchHover = () => { 
    const [search, setSearch] = useState('')
    const HandleChange = (e) => {
        const {value} = e.target;
        setSearch(value)
    }
    return(
        <template id="search-hover">
            <div className="content">
                <div className="block1"><span>MEN</span><span>WOMEN</span></div>
                <form>
                    <FormInput 
                        shrinkinputtype="true"
                        name="search" 
                        type='search' 
                        label="SEARCH"
                        issearch="true"
                        value={search}
                        handleChange={(e) => HandleChange(e)}
                        style={{color: 'var(--normalblack)'}}
                        required  /> 
                    <UserSvg className="search-icon"/>
                </form>
                <p>Suggestions</p>
                <p>COATS</p>
            </div>
        </template>
    )
}

export default SearchHover;