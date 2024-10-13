 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
 import { getDatabase , ref , set , get} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCjxaJLBKQ1Zv1Ry0CyIjpeDIqDe_mi2mw",
   authDomain: "scaler-canteen.firebaseapp.com",
   projectId: "scaler-canteen",
   storageBucket: "scaler-canteen.appspot.com",
   messagingSenderId: "815465701039",
   appId: "1:815465701039:web:9eeef734d96e6cadb7be5a"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const databaseRef = ref(database, 'users');

 document.getElementById('sign-up-button').addEventListener('click', (e) => {
     e.preventDefault();
     const phoneNum = document.getElementById('PhoneNum').value;
     const password = document.getElementById('Password').value;
     
     get(ref(database, 'users/'+phoneNum)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("User Exists");
        } else {
            set(ref(database, 'users/'+phoneNum),{
                PhoneNumber:phoneNum,
                Password:password
            })
            .then(() => {
                alert("User Created   "+ "  Redirecting...");
                setTimeout(() => {
                    window.location.href = "../index.html";
                  }, 200);
                
            })
            .catch((error) => {
                alert(error.message);
            });
        }
      }).catch((error) => {
        console.error(error);
      });
    //  document.getElementById('login-form').reset();
 })