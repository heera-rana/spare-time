import React, {useState} from 'react';

function SearchBar ({placeholder, data}){

    const[filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter ((value) => {
            return value.description.toLowerCase().includes (searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData ([]);   
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type= "text" placeholder={placeholder} onChange={handleFilter}/>
            </div>

            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.slice(0,15).map((value, key) =>{
                    return (
                        <a key={key} className="dataItem" href= "Events" target="_blank"> 
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