import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Register from "./Register";
import Rotter from "./Rotter";

function App() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        fetch("/items")
          .then((r) => r.json())
          .then(data => setItems(data.items));
    }, [])
  
    function addItem(newitem) {
      const updatedItems = [...items, newitem]
      setItems(updatedItems);
    }
    
    function deleteItem(id) {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
    }
    
    console.log(items)
    
    function updateItem(id, completed) {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, completed }
            } else {
               return item 
            }
        })
        setItems(updatedItems)
    }
    
    
  return (
    <div>
      <h1>Group 3 App!</h1>
      <SearchBar />
      <Register onAddItem={addItem} />
      <Rotter items={items} onDeleteItem={deleteItem} onUpdateItem={updateItem} />
    </div>
  );
}

export default App;

