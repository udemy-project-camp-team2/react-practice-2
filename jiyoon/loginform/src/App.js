import React from 'react';

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "admin" && password === "password") {
      alert("로그인 성공!")
    } else {
      alert("로그인 실패!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
    </form>
  )
}

export default App;
