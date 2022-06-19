import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"  

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This was coded by{" "}
        <a href="https://github.com/luisakiefer">Luisa </a>
      </footer>
    </div>
  );
}