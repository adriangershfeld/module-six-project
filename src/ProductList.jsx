import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductItem 
            key={product.id} 
            product={product} 
            animationDelay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;