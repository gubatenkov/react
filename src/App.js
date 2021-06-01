import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCats = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCats);

  const filterCats = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newCats = items.filter((item) => item.category === category);
    setMenuItems(newCats);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCats={filterCats} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
