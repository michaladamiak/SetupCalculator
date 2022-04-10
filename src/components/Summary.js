import "./Summary.css";

function Summary(props) {
  let total = 0;
  props.items.forEach((element) => {
    total += element.price;
  });

  if (props.items.length < 2) {
    return <div></div>;
  }

  return (
    <h1 className="summary">
      Łączna cena tych {props.items.length} elementów to {total} zł
    </h1>
  );
}

export default Summary;
