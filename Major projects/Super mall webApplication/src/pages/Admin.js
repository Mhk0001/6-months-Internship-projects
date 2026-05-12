// import React, { useState, useEffect } from "react";
// import {
//   fetchProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
// } from "../services/productService";
// import { auth } from "../services/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import "../styles/Admin.css";

// function Admin() {
//   const [products, setProducts] = useState([]);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [updatedProduct, setUpdatedProduct] = useState({});
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "",
//     category: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [admin, setAdmin] = useState(false);

//   const navigate = useNavigate();

//   // 🔐 AUTH + ADMIN CHECK
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (!user) {
//         navigate("/login");
//         return;
//       }

//       // Check if user is admin
//       setAdmin(user.email === "admin@gmail.com");
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   // 📦 FETCH PRODUCTS
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch products", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   // 🚪 LOGOUT
//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   // ✏️ EDIT
//   const handleEditClick = (product) => {
//     setEditingProductId(product.id);
//     setUpdatedProduct({ ...product });
//   };

//   const handleInputChange = (e) => {
//     setUpdatedProduct({
//       ...updatedProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ➕ ADD PRODUCT
//   const handleAddProduct = async () => {
//     if (!admin) return;
//     const added = await addProduct(newProduct);
//     setProducts((prev) => [...prev, added]);
//     setNewProduct({
//       title: "",
//       description: "",
//       price: "",
//       image: "",
//       category: "",
//     });
//   };

//   // 🔄 UPDATE
//   const handleUpdateProduct = async (id) => {
//     if (!admin) return;
//     await updateProduct(id, updatedProduct);
//     setProducts((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
//     );
//     setEditingProductId(null);
//   };

//   // ❌ DELETE
//   const handleDeleteProduct = async (id) => {
//     if (!admin) return;
//     await deleteProduct(id);
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   };

//   if (loading) {
//     return <h2 style={{ textAlign: "center" }}>Checking admin access...</h2>;
//   }

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>
//       <button onClick={handleLogout} className="btn-logout">
//         Logout
//       </button>

//       {/* ADD PRODUCT FORM (only for admin) */}
//       {admin && (
//         <div className="add-product-form">
//           <h3>Add New Product</h3>
//           {["title", "description", "price", "image", "category"].map(
//             (field) => (
//               <input
//                 key={field}
//                 name={field}
//                 placeholder={field.toUpperCase()}
//                 value={newProduct[field]}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, [field]: e.target.value })
//                 }
//                 className="editable-input"
//               />
//             )
//           )}
//           <button className="btn-add" onClick={handleAddProduct}>
//             Add Product
//           </button>
//         </div>
//       )}

//       {/* PRODUCT LIST */}
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt="" className="product-image" />

//             {editingProductId === product.id ? (
//               <>
//                 <input
//                   name="title"
//                   value={updatedProduct.title}
//                   onChange={admin ? handleInputChange : () => {}}
//                   className="editable-input"
//                   disabled={!admin}
//                 />
//                 <input
//                   name="description"
//                   value={updatedProduct.description}
//                   onChange={admin ? handleInputChange : () => {}}
//                   className="editable-input"
//                   disabled={!admin}
//                 />
//                 <input
//                   name="price"
//                   value={updatedProduct.price}
//                   onChange={admin ? handleInputChange : () => {}}
//                   className="editable-input"
//                   disabled={!admin}
//                 />

//                 {admin && (
//                   <>
//                     <button
//                       className="btn-update"
//                       onClick={() => handleUpdateProduct(product.id)}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="btn-cancel"
//                       onClick={() => setEditingProductId(null)}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 )}
//               </>
//             ) : (
//               <>
//                 <h3>{product.title}</h3>
//                 <p>{product.description}</p>
//                 <p>₹{product.price}</p>

//                 {admin && (
//                   <>
//                     <button
//                       className="btn-edit"
//                       onClick={() => handleEditClick(product)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn-delete"
//                       onClick={() => handleDeleteProduct(product.id)}
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Admin;
import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "../styles/Admin.css";
// import { fetchShops } from '../services/shopService';
import { fetchShops, addShop } from '../services/shopService';



function Admin() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();
 const [shops, setShops] = useState([]);
const [newShopName, setNewShopName] = useState("");
useEffect(() => {
  const loadShops = async () => {
    const data = await fetchShops();
    setShops(data);
  };
  loadShops();
}, []);
const getShopName = (shopId) => {
  if (!shopId) return "No Shop";

  const shop = shops.find((s) => s.id === shopId);
  return shop ? shop.name : "Unknown Shop";
};

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setAdmin(user.email === "admin@gmail.com");
    setLoading(false);
  });
  return () => unsubscribe();
}, [navigate]);



  // 📦 FETCH PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    loadProducts();
  }, []);

  // 🚪 LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // ✏️ EDIT
  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    setUpdatedProduct({ ...product });
  };

  const handleInputChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

//   // ➕ ADD PRODUCT
//   const handleAddProduct = async () => {
//     if (!admin) return;
//     const added = await addProduct(newProduct);
//     setProducts((prev) => [...prev, added]);
//     setNewProduct({
//   title: "",
//   description: "",
//   price: "",
//   image: "",
//   category: "",
//   shopId: "",   // 🔹 VERY IMPORTANT
// });

//   };

//   // 🔄 UPDATE
//   const handleUpdateProduct = async (id) => {
//     if (!admin) return;
//     await updateProduct(id, updatedProduct);
//     setProducts((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
//     );
//     setEditingProductId(null);
//   };
const handleAddProduct = async () => {
  if (!admin) return;

  const productToAdd = {
    ...newProduct,
    price: Number(newProduct.price),
    discount: newProduct.discount ? Number(newProduct.discount) : 0,
  };

  const added = await addProduct(productToAdd);
  setProducts((prev) => [...prev, added]);

  setNewProduct({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
    shopId: "",
    discount: "",
  });
};

const handleUpdateProduct = async (id) => {
  if (!admin) return;

  const productToUpdate = {
    ...updatedProduct,
    price: Number(updatedProduct.price),
    discount: updatedProduct.discount ? Number(updatedProduct.discount) : 0,
  };

  await updateProduct(id, productToUpdate);

  setProducts((prev) =>
    prev.map((p) => (p.id === id ? { ...p, ...productToUpdate } : p))
  );
  setEditingProductId(null);
};

  // ❌ DELETE
  const handleDeleteProduct = async (id) => {
    if (!admin) return;
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };
  // ➕ ADD SHOP
const handleAddShop = async () => {
  if (!admin) return;

  if (!newShopName.trim()) {
    alert("Please enter shop name");
    return;
  }

  try {
    const addedShop = await addShop({ name: newShopName });
    setShops((prev) => [...prev, addedShop]);
    setNewShopName("");
  } catch (error) {
    console.error("Failed to add shop", error);
  }
};


  // ⏳ LOADING STATE
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Checking admin access...</h2>;
  }

  // ⚠️ NON-ADMIN MESSAGE
  if (!admin) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>🚫 This page is only accessible by Admins.</h2>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
      {/* 🏪 ADD SHOP SECTION */}
<div className="add-shop-form">
  <h3>Add Shop</h3>

  <input
    type="text"
    placeholder="Enter shop name"
    value={newShopName}
    onChange={(e) => setNewShopName(e.target.value)}
    className="editable-input"
  />

  <button onClick={handleAddShop} className="btn-add">
    Add Shop
  </button>
</div>


      {/* ADD PRODUCT FORM */}
      <div className="add-product-form">
        <h3>Add New Product</h3>
        
  {/* 🔹 SHOP DROPDOWN (FIRST) */}
  <select
  value={newProduct.shopId || ""}
  onChange={(e) =>
    setNewProduct({ ...newProduct, shopId: e.target.value })
  }
  className="editable-input"
>
  <option value="" disabled>
    Select Shop
  </option>

  {shops.map((shop) => (
    <option key={shop.id} value={shop.id}>
      {shop.name}
    </option>
  ))}
</select>

        {["title", "description", "price", "image", "category"].map(
          (field) => (
            <input
              key={field}
              name={field}
              placeholder={field.toUpperCase()}
              value={newProduct[field]}
              onChange={(e) =>
                setNewProduct({ ...newProduct, [field]: e.target.value })
              }
              className="editable-input"
            />
          )
        )}
        {/* 🔹 Discount input (optional) */}
<input
  type="number"
  name="discount"
  placeholder="Discount % (Optional)"
  value={newProduct.discount || ""}
  onChange={(e) =>
    setNewProduct({ ...newProduct, discount: e.target.value })
  }
  className="editable-input"
/>
        
        <button className="btn-add" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="" className="product-image" />

            {editingProductId === product.id ? (
              <>
                <input
                  name="title"
                  value={updatedProduct.title}
                  onChange={handleInputChange}
                  className="editable-input"
                />
                <input
                  name="description"
                  value={updatedProduct.description}
                  onChange={handleInputChange}
                  className="editable-input"
                />
                <input
                  name="price"
                  value={updatedProduct.price}
                  onChange={handleInputChange}
                  className="editable-input"
                />

                <button
                  className="btn-update"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Save
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => setEditingProductId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>{product.title}</h3>
<p>{product.description}</p>
<p>₹{product.price}</p>

<p className="shop-name">
  🏪 {getShopName(product.shopId)}
</p>


                <button
                  className="btn-edit"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
