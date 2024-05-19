import React from "react";

function App() {

  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }
  







  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange= {handleChange}  type="text" value={newItem} />
        <button>
          <span onClick={addItem} >Add</span>
        </button>
      </div>
      <div>
        <ul>
        { items.map ( (item, index) => <li key={index}>{item}</li> ) }
        </ul>
      </div>
    </div>
  );
}

export default App;
