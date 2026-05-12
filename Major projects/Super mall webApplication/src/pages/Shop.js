// export default Shop;
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";
import { fetchShops } from "../services/shopService";
import "../styles/Shop.css";

function Shop({ productDeleted }) {
  const [products, setProducts] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productData = await fetchProducts();
        const shopData = await fetchShops();

        setProducts(productData);
        setShops(shopData);
      } catch (error) {
        console.error("Failed to load shop page data:", error);
      }
    };

    loadData();
  }, [productDeleted]);

  return (
    <div className="shop-section">
      <h2>Shops & Products</h2>

      {shops.map((shop) => {
        const shopProducts = products.filter(
          (product) => product.shopId === shop.id
        );

        if (shopProducts.length === 0) return null;

        return (
          <div key={shop.id} className="shop-group">
            <h3 className="shop-heading">🏪 {shop.name}</h3>

            <div className="shop-products">
              {shopProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p className="price">₹{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
