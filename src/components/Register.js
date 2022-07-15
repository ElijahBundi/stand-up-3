import React, { useState } from 'react';


function Register({ onAddItem }) {
  // useState takes one param(initial value) and returns
  // two values: The first value is the initial state and 
  // the second one is a function that is used for updating the state.
  // useState can be used severally 

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [id, setid] = useState(0);
    const [gender, setGender] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    // const [formData, setFormData] = useState({
    //   firstName: "",
    //   secondName: "",
    //   id: "",
    //   gender: "male",
    //   newsletter: true
    // })
    
    function handleSubmit(event) {
      // method that stops the default function of updating
      event.preventDefault();
      // const formData = { 
      //   firstName,
      //   secondName,
      //   id,
      //   gender,
      //   newsletter
      // }
      // console.log(formData);
      const itemObj = { 
        item: { 
          firstName: firstName,
          secondName: secondName,
          id: id,
          gender: gender,
          newsletter: false
        }
      }
          // persist todo on server
      fetch("/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(itemObj)
      })
      .then(r => r.json())
      .then(data => onAddItem(data.item))
      // then use onAddItem to add item to state
    }


    
    
  
    return (
      <form onSubmit={handleSubmit}>
        <h3 style={{ textDecoration: "underline" }}>Registration</h3>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="input first name"
          value={firstName}
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setFirstName(e.target.value)}
        />
  
        <label htmlFor="secondName">Second name</label>
        <input
          type="secondName"
          id="secondName"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
  
        <label htmlFor="id">id</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
  
        <label htmlFor="type">Gender</label>
        <select
          id="type"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="">Choose</option>
        </select>
  
        <label>
          Get Our Newsletter!
          <input
            type="checkbox"
            id="newsletter"
            checked={newsletter}
            // onChange={(e) => console.log(e.target)}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
        </label>
  
        <input type="submit" value="Register" />
      </form>
    );
  }

  export default Register

//   Step 1: Break The UI Into A Component Hierarchy

//   FilterableProductTable
//   ├───SearchBar
//   └───ProductTable
//       ├───ProductCategoryRow
//       └───ProductRow

// Step 2: Build A Static Version in React


// Step 3: Identify The Minimal (but complete) Representation Of UI State

// - The original list of products (don't need state! - props)
// - The search text the user has entered (state)
// - The value of the checkbox (state)
// - The filtered list of products (don't need state! - computed from props + state)

// - Is it passed in from a parent via props? If so, it probably isn’t state.
// - Does it remain unchanged over time? If so, it probably isn’t state.
// - Can you compute it based on any other state or props in your component? If so, it isn’t state.

// filteredProduct = products.filter(product => product.name === search)

// Step 4: Identify Where Your State Should Live

// - Identify every component that renders something based on that state. 
//   - (SearchBar and ProductTable)
// - Find a common owner component (a single component above all the components that need the state in the hierarchy).
//   - (FilterableProductTable)
// - Either the common owner or another component higher up in the hierarchy should own the state.
// - If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

// Step 5: Add Inverse Data Flow