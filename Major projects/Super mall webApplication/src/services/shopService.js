// src/services/shopService.js
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Fetch all shops
export const fetchShops = async () => {
  const snapshot = await getDocs(collection(db, "shops"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new shop
export const addShop = async (shop) => {
  const docRef = await addDoc(collection(db, "shops"), {
    ...shop,
    createdAt: new Date()
  });
  return { id: docRef.id, ...shop };
};

// Update shop
export const updateShop = async (id, updatedShop) => {
  const shopRef = doc(db, "shops", id);
  await updateDoc(shopRef, updatedShop);
};

// Delete shop
export const deleteShop = async (id) => {
  const shopRef = doc(db, "shops", id);
  await deleteDoc(shopRef);
};
