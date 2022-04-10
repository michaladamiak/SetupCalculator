import { useState } from "react";
import "./NewItem.css";

function NewItem(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDetails, setEnteredDetails] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredCategory, setEnteredCategory] = useState(
    "Podzespoły komputera"
  );

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function detailsChangeHandler(event) {
    setEnteredDetails(event.target.value);
  }

  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }

  function categoryChangeHandler(event) {
    setEnteredCategory(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const itemData = {
      id: Math.random(),
      title: enteredTitle,
      details: enteredDetails,
      price: +enteredPrice,
      category: enteredCategory,
    };

    props.onAddNewItem(itemData);
    setEnteredTitle("");
    setEnteredDetails("");
    setEnteredPrice("");
    setEnteredCategory("Podzespoły komputera");
  }

  return (
    <div className="details-form-container">
      <form className="details-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Nazwa"
          className="form-input"
          onChange={titleChangeHandler}
          value={enteredTitle}
          required
        />
        <input
          type="text"
          placeholder="Opis"
          className="form-input"
          onChange={detailsChangeHandler}
          value={enteredDetails}
          required
        />
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Cena"
          className="form-input"
          onChange={priceChangeHandler}
          value={enteredPrice}
          required
        />
        <select
          className="form-input"
          onChange={categoryChangeHandler}
          value={enteredCategory}
        >
          <option value="Podzespoły komputera">Podzespoły komputera</option>
          <option value="Urządzenia peryferyjne">Urządzenia peryferyjne</option>
          <option value="Oprogramowanie">Oprogramowanie</option>
          <option value="Inne">Inne</option>
        </select>
        <div className="button-container">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;
