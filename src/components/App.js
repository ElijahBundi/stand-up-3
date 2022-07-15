import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Register from "./Register";
import Rotter from "./Rotter";
/*
Step 1: Break The UI Into A Component Hierarchy

  App
  ├───SearchBar
  └───Registration
  └───RegistrationNames (CRUD)     
      ├───""
      └───""

Step 2: Build A Static Version in React


Step 3: Identify The Minimal (but complete) Representation Of UI State

- The original list of products (don't need state! - props)
- The search text the user has entered (state)
- The value of the checkbox (state)
- The filtered list of products (don't need state! - computed from props + state)

? Is it passed in from a parent via props? If so, it probably isn’t state.
? Does it remain unchanged over time? If so, it probably isn’t state.
? Can you compute it based on any other state or props in your component? If so, it isn’t state.



Step 4: Identify Where Your State Should Live

- Identify every component that renders something based on that state. 
  - (SearchBar and Registration and Registered names)
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
  - (App)
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

Step 5: Add Inverse Data Flow
-Allows us to send data between parent and child components as props. #Destructuring
*/


function App() {
    const [items, setItems] = useState([]);
  
    // UseEffect is a react hook that works asynchronously 
    // and tells React that the components need to do something 
    // after render

    // React will remember the function you passed (we’ll refer to it as our “effect”), 
    // and call it later after performing the DOM updates. In this effect, 
    // we set the document title, but we could also perform data fetching or 
    // call some other imperative API.
    
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

