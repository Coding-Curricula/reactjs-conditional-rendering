import React, { useState } from "react";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [showList, setShowList] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  // handler function to set the newItem state
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  // handler function to add the newItem to the groceryList
  const handleAddItem = () => {
    if (editMode) {
      const updatedList = [...groceryList];
      updatedList[itemToEdit] = newItem;
      setGroceryList(updatedList);
      setEditMode(false);
      setItemToEdit(null);
      setNewItem("");
    } else {
      setGroceryList([...groceryList, newItem]);
      setNewItem("");
    }
  };

  // handler function to remove an item from the groceryList
  const handleRemoveItem = (index) => {
    const newList = [...groceryList];
    newList.splice(index, 1);
    setGroceryList(newList);
  };

  // handler function to update an item from the groceryList
  const handleEditItem = (index) => {
    setEditMode(true);
    setItemToEdit(index);
    setNewItem(groceryList[index]);
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
          <button onClick={handleAddItem}>{editMode ? "Edit" : "Add"}</button>
          <ul>
            {groceryList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                <button onClick={() => handleEditItem(index)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
