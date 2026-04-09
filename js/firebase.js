/*
  Inicialización de Firebase
  Exporta:
  - db (base de datos)
  - auth (autenticación)
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQM04Js4yBix94z6oCOfa8sZ84WCrDTUY",
  authDomain: "webstudio-ce0dc.firebaseapp.com",
  databaseURL: "https://webstudio-ce0dc-default-rtdb.firebaseio.com",
  projectId: "webstudio-ce0dc",
  storageBucket: "webstudio-ce0dc.firebasestorage.app",
  messagingSenderId: "1078506531688",
  appId: "1:1078506531688:web:7378ec65889b294a4b44dd"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);