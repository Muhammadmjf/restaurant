import logo from "./logo.svg";
import "./App.css";
import { Products } from "./Products";
import { ProductCard } from "./ProductCard";
import mm from "./mm.jpeg";

function App() {
  return (
    <div>
      <img src={mm} width="20%" />

      <div>
        {Products.map((Product) => (
          <ProductCard
            name={Product.name}
            price={Product.price}
            image={Product.img}
          />
        ))}
      </div>
    </div>
  );
}
///
export default App;
