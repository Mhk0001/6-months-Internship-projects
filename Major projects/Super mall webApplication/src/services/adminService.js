
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// Check if user is admin
export const isAdmin = async (email) => {
  try {
    const q = query(collection(db, "admin"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // true if email exists in admin collection
  } catch (error) {
    console.error("Admin check failed", error);
    return false;
  }
};
