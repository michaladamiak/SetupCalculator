import "./Items.css";
import trash from '../img/trash.png'

function Items(props) {
  function toDeleteHandler() {
    props.toDelete(props.id);
  }

  return (
    <tr>
      <td className="main-table-row">{props.title}</td>
      <td className="main-table-row">{props.details}</td>
      <td className="main-table-row">{props.price}</td>
      <td className="main-table-row">{props.category}</td>
      <td className="delete-column">
        <div className="delete-button" onClick={toDeleteHandler}><img src={trash} alt="delete"></img></div>
      </td>
    </tr>
  );
}

export default Items;
