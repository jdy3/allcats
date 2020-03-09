import React from "react";
import logo from "../src/assets/Allcats_badge.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <section className="Header">
        <Header />
      </section>
      <section className="Body">
        <Body />
      </section>
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;
