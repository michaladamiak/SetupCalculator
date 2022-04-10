import filter from "../img/filter.png";
import "./CategoryFilter.css";

function CategoryFilter(props) {
  function categorySelectHandler(event) {
    props.selectedCategory(event.target.value);
  }

  return (
    <div className="category-filter-container">
      <label className="filter-icon">
        <img src={filter} alt="filter"></img>
      </label>
      <select onChange={categorySelectHandler}>
        <option value="Dowolna kategoria">Dowolna kategoria</option>
        <option value="Podzespoły komputera">Podzespoły komputera</option>
        <option value="Urządzenia peryferyjne">Urządzenia peryferyjne</option>
        <option value="Oprogramowanie">Oprogramowanie</option>
        <option value="Inne">Inne</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
