import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <center></center><h2>Daftar Produk Makanan</h2>
      <ul className="product-grid">
        {products.map((product, index) => (
          <li key={index} onClick={() => addToCart(product)} className="product-item">
            <img className="product-image" src={product.imageSrc} alt={product.alt} />
            <div>
              <p>{product.name}</p>
              <p>Rp {product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
