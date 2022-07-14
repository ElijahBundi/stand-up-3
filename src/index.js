import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accountType, setAccountType] = useState("pro");
  const [newsletter, setNewsletter] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { 
      username,
      password,
      avatar,
      accountType,
      newsletter
    }
    console.log(formData);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src={avatar}
        alt="Avatar preview"
      />

      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

ReactDOM.render(<SignUp />, document.getElementById('root'));