export function ProductCard(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.price}KD</h3>
      <img src={props.img} width="20%" />
    </>
  );
}
