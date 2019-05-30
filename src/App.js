import React from "react";
import NavBar from "./components/navBar";
import DownloadBook from "./components/downloadBook";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DownloadBook />
    </div>
  );
}

export default App;
