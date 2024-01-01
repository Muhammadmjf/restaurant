import logo from "./logo.svg";
import "./App.css";
import { Products } from "./Products";
import { ProductCard } from "./ProductCard";

function App() {
  return (
    <div>
      <img src="src/mm.jpg" width="20%" />

      <div>
        {Products.map((Product) => (
          <ProductCard
            name={Product.name}
            price={Product.price}
            image={Product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
