import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';

function App() {
  const [user, setUser] = useState({
    username: sessionStorage.getItem('username') || null,
    password: sessionStorage.getItem('password') || null,
  });

  const handleLogin = (username, password) => {
    setUser({ username, password });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
