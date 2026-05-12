// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../services/api';
// import ShopList from '../components/ShopList';
// import '../styles/Shop.css';

// function Shop({ productDeleted }) { // Accept the `productDeleted` prop
//   const [products, setProducts] = useState([]);

//   // Fetch products when the component mounts or when a product is deleted
//   useEffect(() => {
//     const getProducts = async () => {
//       const productData = await fetchProducts();
//       setProducts(productData);
//     };
//     getProducts(); // Re-fetch products
//   }, [productDeleted]); // Re-fetch products whenever `productDeleted` changes

//   return (
//     <div className="shop-section">
//       <h2>Products</h2>
//       <ShopList products={products} />
//     </div>
//   );
// }

// export default Shop;
// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../services/productService'; // Firestore service
// import ShopList from '../components/ShopList';
// import '../styles/Shop.css';

// function Shop({ productDeleted }) {
//   const [products, setProducts] = useState([]);

//   // Fetch products from Firestore
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const productData = await fetchProducts();
//         setProducts(productData);
//       } catch (error) {
//         console.error("Failed to fetch products from Firestore:", error);
//       }
//     };

//     getProducts();
//   }, [productDeleted]); // re-fetch when a product is deleted/added

//   return (
//     <div className="shop-section">
//       <h2>Products</h2>
//       <ShopList products={products} />
//     </div>
//   );
// }

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
