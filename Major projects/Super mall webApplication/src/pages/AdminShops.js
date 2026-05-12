
// export default AdminShops;
import React, { useState, useEffect } from "react";
import { fetchShops, addShop, updateShop, deleteShop } from "../services/shopService";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

function AdminShops() {
  const [shops, setShops] = useState([]);
  const [newShop, setNewShop] = useState({ name: "", description: "" });
  const [editingShopId, setEditingShopId] = useState(null);
  const [updatedShop, setUpdatedShop] = useState({});
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) navigate("/login");
      setAdmin(user?.email === "admin@gmail.com"); // Only admin@gmail.com
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const loadShops = async () => {
      const data = await fetchShops();
      setShops(data);
    };
    loadShops();
  }, []);

  const handleAddShop = async () => {
    if (!admin) return;
    const shop = await addShop(newShop);
    setShops(prev => [...prev, shop]);
    setNewShop({ name: "", description: "" });
  };

  const handleUpdateShop = async (id) => {
    if (!admin) return;
    await updateShop(id, updatedShop);
    setShops(prev => prev.map(s => s.id === id ? { ...s, ...updatedShop } : s));
    setEditingShopId(null);
  };

  const handleDeleteShop = async (id) => {
    if (!admin) return;
    await deleteShop(id);
    setShops(prev => prev.filter(s => s.id !== id));
  };

  if (!admin) return <h2 style={{ textAlign: "center" }}>This page is for Admins only</h2>;

  return (
    <div>
      <h2>Manage Shops</h2>
      <div>
        <input placeholder="Shop Name" value={newShop.name} onChange={e => setNewShop({...newShop, name: e.target.value})}/>
        <input placeholder="Description" value={newShop.description} onChange={e => setNewShop({...newShop, description: e.target.value})}/>
        <button onClick={handleAddShop}>Add Shop</button>
      </div>

      {shops.map(shop => (
        <div key={shop.id}>
          {editingShopId === shop.id ? (
            <>
              <input value={updatedShop.name} onChange={e => setUpdatedShop({...updatedShop, name: e.target.value})}/>
              <input value={updatedShop.description} onChange={e => setUpdatedShop({...updatedShop, description: e.target.value})}/>
              <button onClick={() => handleUpdateShop(shop.id)}>Save</button>
              <button onClick={() => setEditingShopId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{shop.name}</h3>
              <p>{shop.description}</p>
              <button onClick={() => {setEditingShopId(shop.id); setUpdatedShop(shop)}}>Edit</button>
              <button onClick={() => handleDeleteShop(shop.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminShops;
