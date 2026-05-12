import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKWyI4X-D6kMcnwialE_wBSv6IUSLefR0",
  authDomain: "gym-web-9bd26.firebaseapp.com",
  projectId: "gym-web-9bd26",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };