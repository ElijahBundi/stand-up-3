import React, { useEffect } from 'react';

function SearchBar() {

    useEffect(() => {
        console.log('useEffect called')
    }, [])

    console.log("component rendering")

  return (
    <form style={{ padding: "5px", display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search..." />
      <label style={{ textAlign: 'right' }}>
        Search
      </label>
    </form>
  )
}

export default SearchBar