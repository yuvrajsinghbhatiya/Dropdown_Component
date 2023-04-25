import React from "react";
import Dropdown from "./Dropdown"; // Import the Dropdown component

function App() {
  const items = ["Male", "Female", "None"]; // Define the items to display in the dropdown

  return (
    <div className="App">
      <Dropdown items={items} /> {/* Render the Dropdown component with the items prop */}
    </div>
  );
}

export default App;
