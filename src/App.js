import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <section className="Header">
        <Header />
      </section>
      <section className="Heading">
        <h1>Choose cats</h1>
      </section>
      <section className="Body">
        <Body />
      </section>
    </div>
  );
}

export default App;
