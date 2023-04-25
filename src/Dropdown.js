import React, { useState } from "react";
import "./Dropdown.css"; // Import the CSS file

function Dropdown({ items }) {
  // Set up state to manage whether dropdown is open and which item is selected
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle clicks on an item in the dropdown
  const handleItemClick = (item) => {
    if (item === selectedItem) {
      setSelectedItem(null);
      setIsOpen(false);
    } else {
      setSelectedItem(item);
      setIsOpen(false); // Close the dropdown
      if (items.indexOf(item) === 2) {
        setSelectedItem(null);
        setIsOpen(false);
      }
    }
  };

  // Render a button and a list of items when the dropdown is open
  return (
    <div className="dropdown">
      <h2 className="dropdown-heading">Select the Gender :</h2>
      <button className="dropdown-button" onMouseEnter={() => setIsOpen(true)}>
        {/* Display the selected item or default text  */}
        {selectedItem || "Gender"}
      </button>
      {isOpen && (
        //  Only render the list of items when the dropdown is open
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
