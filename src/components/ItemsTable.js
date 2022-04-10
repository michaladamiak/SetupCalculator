import "./ItemsTable.css";
import Items from "./Items";

function ItemsTable(props) {
  function toDeleteHandler2(item) {
    props.toDelete2(item);
  }

  if (props.items.length === 0) {
    return <h2 className="empty-comment">Pusto tu, dodaj nowe elementy</h2>;
  }

  return (
    <div className="table-contener">
      <table className="main-table">
        <thead className="head-row">
          <tr className="main-table-firstrow">
            <th className="main-table-header">Item</th>
            <th className="main-table-header">Details</th>
            <th className="main-table-header">Price</th>
            <th className="main-table-header">Category</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              title={item.title}
              details={item.details}
              price={item.price}
              category={item.category}
              toDelete={toDeleteHandler2}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
