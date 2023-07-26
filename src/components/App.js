import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="container">

      <nav className="nav">
        <h2 className="nav-h2">The Royal Bank of Flatiron</h2>
      </nav>
      <div></div>

      <div className="container">
      <AccountContainer />
      </div>
      

    </div>
  );
}

export default App;