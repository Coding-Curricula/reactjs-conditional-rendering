import React, { useState } from "react";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [showList, setShowList] = useState(false);

  const [updateItem, setUpdateItem] = useState("");

  // handler function to set the newItem state
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  // handler function to add the newItem to the groceryList
  const handleAddItem = () => {
    setGroceryList([...groceryList, newItem]);
    setNewItem("");
  };

  // handler function to update the newItem state
  const handleUpdateItem = (e) => {
    setNewItem(e.target.value);
  };

  // handler function to remove an item from the groceryList
  const handleRemoveItem = (e) => {
    const updatedGroceryList = groceryList.filter((item, index) => {
      return index !== Number(e.target.id);
    });
    setGroceryList(updatedGroceryList);
  };

  // handler function to toggle the showList state
  const handleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <button onClick={handleShowList}>
        {showList ? "Hide List" : "Show List"}
      </button>
      {showList ? (
        <div>
          <input type="text" value={newItem} onChange={handleInputChange} />
          <button onClick={handleAddItem}>Add Item</button>
          <ul>
            {groceryList.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button id={index} onClick={handleRemoveItem}>
                    Remove
                  </button>
                  <button id={index} onClick={handleUpdateItem}>
                    Update
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
