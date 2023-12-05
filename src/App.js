import React from "react";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Rio de Janeiro" />
        </header>
      </div>
    </div>
  );
}

export default App;
