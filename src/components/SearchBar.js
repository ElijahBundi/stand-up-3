import React, { useState, useEffect} from 'react';

function SearchBar() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // console.log('useEffect called')
        setTimeout(() => setCount(0), 5000)
    }, [])
    // deps array 
   // - if empty, only run once!
  // - if we have a variable in the deps array, useEffect will run what the value changes

    console.log("component rendering")


  return (
    <div>
      <input 
        style={{ padding: "5px", display: "flex", flexDirection: "column" }} 
        type="text" placeholder="Search..." 
      />
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ textAlign: 'right', width: '70px' }}
      >
        Search {count}
      </button>
    </div>
  )
}

export default SearchBar