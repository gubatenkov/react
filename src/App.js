import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getFromLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getFromLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    showed: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // dispaly alert
      setAlert({ showed: true, msg: "Enter a value", type: "danger" });
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId(null);
      setName("");
    } else {
      // show alert
      setAlert({ showed: true, msg: "Item added", type: "success" });
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleRemove = () => {
    setList([]);
    setAlert({ showed: true, msg: "items removed", type: "success" });
  };

  const removeItem = (id) => {
    setAlert({ showed: true, msg: "Item removed", type: "success" });
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const chooseItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(chooseItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.showed && <Alert {...alert} setAlert={setAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={handleRemove}>
            clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
