import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

// 🔹 Fetch products (RUNS ON REFRESH)
export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

// 🔹 Add product
export const addProduct = async (product) => {
  const docRef = await addDoc(collection(db, "products"), {
    ...product,
    price: Number(product.price), // ensure number
  });

  return { id: docRef.id, ...product };
};

// 🔹 Update product
export const updateProduct = async (id, updatedProduct) => {
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, updatedProduct);
};

// 🔹 Delete product
export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);
  await deleteDoc(productRef);
};
