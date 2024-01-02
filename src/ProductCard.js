export function ProductCard({ name, price, image }) {
  return (
    <>
      <h1>{name}</h1>
      <h3>{price}KD</h3>
      <img src={image} width="20%" />
    </>
  );
}
