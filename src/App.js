import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto Alegre" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/luisakiefer"
          target="_blank"
          rel="noreferrer"
        >
          Luisa Kiefer
        </a>
        and is open-sourced on{" "}
        <a
          href="https://github.com/luisakiefer/forecast-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
