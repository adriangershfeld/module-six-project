function ProductItem({ product, animationDelay }) {
    return (
      <div 
        className="product-item" 
        style={{ 
          animationDelay: `${animationDelay}s`,
          willChange: 'transform, opacity'
        }}
      >
        <h3 className="product-name">{product.name}</h3>
        <div className="price-tag">${product.price.toFixed(2)}</div>
        <p className="product-description">{product.description}</p>
        <button className="view-button">View Details</button>
      </div>
    );
  }
  
  export default ProductItem;