import React, { useState } from 'react';

// COMPONENT 3
function Register({ onAddItem }) {
  // useState React hook takes one param(initial value) and returns
  // two values: The first value is the initial state and 
  // the second one is a function that is used for updating the state.
  // useState can be used severally 

  // initial value can hold a string, number, boolean

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [id, setid] = useState(0);
    const [gender, setGender] = useState("");
    const [newsletter, setNewsletter] = useState(false);

// Destructuring

    // const [formData, setFormData] = useState({
    //   firstName: "",
    //   secondName: "",
    //   id: "",
    //   gender: "male",
    //   newsletter: true
    // })
    
    // Eventlisteners

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
          placeholder="input second name"
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