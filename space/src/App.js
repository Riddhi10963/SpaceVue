import "./App.css";
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login (hardcoded for demonstration)
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // console.log(data);
  };

  return (
    <div className="app">
      {loggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
