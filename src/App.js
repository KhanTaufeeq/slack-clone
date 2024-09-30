import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/" element={<h1>Welcome</h1>} />
                <Route path="/room/:roomId" element={<Chat />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

// The colon (:) before roomId in the path="/room/:roomId" indicates a URL parameter.
// It is used to define a dynamic segment of the URL, meaning that roomId can take on any value,
// and the component will render depending on the actual value provided in the URL.
