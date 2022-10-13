import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8i7ofL9kSTVdlL6qMU_U7gvPtSwK8n7M",
    authDomain: "my-movies-eacd7.firebaseapp.com",
    projectId: "my-movies-eacd7",
    storageBucket: "my-movies-eacd7.appspot.com",
    messagingSenderId: "196603309485",
    appId: "1:196603309485:web:268bba5016ee91990ec524"
};

const app = initializeApp(firebaseConfig);

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
const auth = getAuth();

let $button = document.querySelector('button');
let $inputUserName = document.querySelector('#userName');
let $inputPassword = document.querySelector('#password');
let $header = document.querySelector('h2');

$button.addEventListener('click', signIn);

function signIn(event) {
    $header.style.color = 'black';
    $header.textContent = 'Please wait...';
    signInWithEmailAndPassword(auth, $inputUserName.value, $inputPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
     
            $header.textContent = `Hello ${user.email}`
            $header.style.color = 'green';
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            $header.textContent = errorMessage.split('auth/')[1].split(').')[0];
            $header.style.color = 'red';
        });
}