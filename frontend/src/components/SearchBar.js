import React, { useState } from "react";
import './SearchBar.css';
import  SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';

function SearchBar ({placeholder, data}){
    const [filteredData, setfilteredData] = useState ([]);

    const [wordEntered, setwordEntered] = useState ("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered (searchWord);
        const newFilter = data.filter((value) => {
            return value.description.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord ==="") {
            setfilteredData([]);
        } else {
          setfilteredData(newFilter);
        }
       };
       const clearInput = () => {
        setfilteredData= ([]);
        setwordEntered("");
       }
    return (
        <div className ="search">
         <div className= "searchInput">
            <input type ="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className= "searchIcon">
                {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
            </div>
           </div>
           {filteredData.length !== 0 && (
             <div className= "dataResult">
                {filteredData.slice(0,15).map((value, key) => {
                 return (
                    <a className="dataItem" href= "Events" target="_blank"> 
                     <p>{value.description}{" "}</p>
                    </a>
                    );
                 })}
                 </div>
             )}
     </div>
        
    )
}

export default SearchBar