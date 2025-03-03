import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", price: 10000.00, description: "Wireless headphones with noise cancellation" },
    { id: 2, name: "Smart Watch", price: 39.99, description: "Fitness tracker with heart rate monitor and sleep tracking" },
    { id: 3, name: "Power Bank", price: 9999.99, description: "10,000mAh portable charger for all your devices" }
  ]);

  return (
    <div className="app">
      <header>
        <h1> Tech Shop</h1>
        <p className="tagline">Electronics</p>
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;