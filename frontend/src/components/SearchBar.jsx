import React, {useState} from 'react';

// SearchBar is in the header and allows us to search for events by title
function SearchBar ({placeholder, data}){
    const[filteredData, setFilteredData] = useState([])
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter ((value) => {
            return value.title.toLowerCase().includes (searchWord.toLowerCase())
        })
        if (searchWord === "") {
            setFilteredData ([])
        } else {
            setFilteredData(newFilter)
        }
          
    }

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type= "text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.slice(0,15).map((value, key) =>{
                    return (
                        <a key={key} className="dataItem" href= {value._id.$oid}> 
                        <p>{value.title}{" "}</p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    )
}

export default SearchBar