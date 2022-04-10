import { useState, useEffect } from "react";
import "./App.css";
import CategoryFilter from "./components/CategoryFilter";
import ItemsTable from "./components/ItemsTable";
import NewItem from "./components/NewItem";
import Summary from "./components/Summary";

// const initialParts = [
//   {
//     id: 1,
//     title: "Komp",
//     details: "dobry jest",
//     price: 1000,
//     category: "Podzespoły komputera",
//   },
//   {
//     id: 2,
//     title: "Mycha",
//     details: "tez dobra fest",
//     price: 100,
//     category: "Urządzenia peryferyjne",
//   },
//   {
//     id: 3,
//     title: "Blat",
//     details: "on akurat słaby",
//     price: 500,
//     category: "Inne",
//   },
// ];

const initialParts =
  JSON.parse(localStorage.getItem("localParts")) === null
    ? []
    : JSON.parse(localStorage.getItem("localParts"));

function App() {
  const [parts, setParts] = useState(initialParts);

  function addNewItemHandler(item) {
    setParts(function (prevItems) {
      return [...prevItems, item];
    });
  }

  useEffect(() => {
    localStorage.setItem("localParts", JSON.stringify(parts));
  });

  function toDeleteHandler3(item) {
    setParts(parts.filter((part) => part.id !== item));
  }

  const [selectedCategory, setSelectedCategory] = useState("Dowolna kategoria");

  function filterCategoriesHandler(category) {
    setSelectedCategory(category);
  }

  const filteredParts =
    selectedCategory === "Dowolna kategoria"
      ? parts
      : parts.filter((part) => part.category === selectedCategory);

  return (
    <div className="container">
      <NewItem onAddNewItem={addNewItemHandler} />
      <CategoryFilter selectedCategory={filterCategoriesHandler} />
      <ItemsTable
        items={filteredParts}
        toDelete2={toDeleteHandler3}
        category={selectedCategory}
      />
      <Summary items={filteredParts} />
    </div>
  );
}

export default App;
