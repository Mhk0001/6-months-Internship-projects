
// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../services/productService';
// import { fetchShops } from '../services/shopService';
// import '../styles/Offers.css';

// function Offers({ productDeleted }) {
//   const [offers, setOffers] = useState([]);
//   const [shops, setShops] = useState([]);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const productData = await fetchProducts();
//         const shopData = await fetchShops();

//         // Map shopId to shop name for easy lookup
//         const shopMap = {};
//         shopData.forEach(shop => {
//           shopMap[shop.id] = shop.name;
//         });

//         // Add simulated offers and shop name
//         const simulatedOffers = productData.map(product => {
//           const discount = product.price > 100 ? 10 : 5;
//           const discountedPrice = product.price - (product.price * discount) / 100;
//           return { 
//             ...product, 
//             discount, 
//             discountedPrice, 
//             shopName: shopMap[product.shopId] || "Unknown Shop" 
//           };
//         });

//         setOffers(simulatedOffers);
//         setShops(shopData);
//       } catch (error) {
//         console.error("Failed to fetch products or shops:", error);
//       }
//     };

//     loadData();
//   }, [productDeleted]);

//   return (
//     <div className="offers-section">
//       <h2>Available Offers</h2>
//       <div className="offer-list">
//         {offers.map(offer => (
//           <div key={offer.id} className="offer-card">
//             <img src={offer.image} alt={offer.title} className="offer-image" />
//             <h3>{offer.title}</h3>
//             <small style={{ display: 'block', color: '#888', marginBottom: '5px' }}>
//               {offer.shopName}
//             </small>
//             <p>{offer.description}</p>
//             <p>Price: ₹{offer.price}</p>
//             <p>Discount: {offer.discount}% off</p>
//             <p>Offer Price: ₹{offer.discountedPrice}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Offers;
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';
import { fetchShops } from '../services/shopService';
import '../styles/Offers.css';

function Offers({ productDeleted }) {
  const [offers, setOffers] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productData = await fetchProducts();
        const shopData = await fetchShops();

        // Map shopId to shop name
        const shopMap = {};
        shopData.forEach(shop => {
          shopMap[shop.id] = shop.name;
        });

        // Filter only products with discount
        const discountedProducts = productData
          .filter(product => product.discount && product.discount > 0)
          .map(product => ({
            ...product,
            discountedPrice: product.price - (product.price * product.discount) / 100,
            shopName: shopMap[product.shopId] || "Unknown Shop"
          }));

        setOffers(discountedProducts);
        setShops(shopData);
      } catch (error) {
        console.error("Failed to fetch products or shops:", error);
      }
    };

    loadData();
  }, [productDeleted]);

  if (offers.length === 0) {
    return (
      <div className="offers-section">
        <h2>Available Offers</h2>
        <p>No discounted products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="offers-section">
      <h2>Available Offers</h2>
      <div className="offer-list">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3>{offer.title}</h3>
            <small style={{ display: 'block', color: '#888', marginBottom: '5px' }}>
              {offer.shopName}
            </small>
            <p>{offer.description}</p>
            <p>Price: ₹{offer.price}</p>
            <p>Discount: {offer.discount}% off</p>
            <p>Offer Price: ₹{offer.discountedPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
