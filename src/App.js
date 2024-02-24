import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; // Import Routes and Route directly

import Home from "./pages/home";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import LoginPage from "./pages/login";
import Posts from "./pages/posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
            <Routes> {/* Wrap your routes inside <Routes> */}
              <Route path="/home" element={<Home />} /> 
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/login" element={<LoginPage/>}></Route>
              <Route path="/posts" element={<Posts/>}></Route>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
