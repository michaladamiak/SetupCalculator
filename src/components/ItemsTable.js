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
        <thead>
          <tr>
            <th className="main-table-header">Nazwa</th>
            <th className="main-table-header">Opis</th>
            <th className="main-table-header">Cena</th>
            <th className="main-table-header">Kategoria</th>
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
