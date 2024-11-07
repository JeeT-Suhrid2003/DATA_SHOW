// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Your Firebase configuration (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyBDhubzhTCdbGBcP2spjMZUFrIiOW0vC1A",
  authDomain: "i-am-crying-at-this-point.firebaseapp.com",
  databaseURL: "https://i-am-crying-at-this-point-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "i-am-crying-at-this-point",
  storageBucket: "i-am-crying-at-this-point.appspot.com",
  messagingSenderId: "28362192160",
  appId: "1:28362192160:web:1819bbc3f9c99283ca5345",
  measurementId: "G-W5GJ8EZZT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

// Reference to the 'movies' node in your Realtime Database
const moviesRef = ref(database, 'movies');

// Get references to the input field and add button
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

// Event listener for the add button
addButtonEl.addEventListener("click", () => {
  const inputValue = inputFieldEl.value;

  // Push the new movie to the database
  push(moviesRef, inputValue)
    .then(() => {
      console.log(`${inputValue} added to the database!`);
      // Clear the input field after adding
      inputFieldEl.value = '';
    })
    .catch((error) => {
      console.error("Error adding movie:", error);
    });

});
onValue(moviesRef, (snapshot) => {

  const data = snapshot.val(); // Get the data as a JavaScript object

  console.log('Data updated:', data);
});

