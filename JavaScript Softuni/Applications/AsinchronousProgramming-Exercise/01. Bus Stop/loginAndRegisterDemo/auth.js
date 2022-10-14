import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyA8i7ofL9kSTVdlL6qMU_U7gvPtSwK8n7M",
    authDomain: "my-movies-eacd7.firebaseapp.com",
    projectId: "my-movies-eacd7",
    storageBucket: "my-movies-eacd7.appspot.com",
    messagingSenderId: "196603309485",
    appId: "1:196603309485:web:268bba5016ee91990ec524"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


let $button = document.querySelector('button');
let $inputUserName = document.querySelector('#userName');
let $inputPassword = document.querySelector('#password');
let $header = document.querySelector('.login-userName');
let $logaut = document.querySelector('.logaut');
let $loginForm = document.querySelector('.form-login');
let $registerForm = document.querySelector('.register-form');
let $buttonRegisterForm = document.querySelector('.register');
let $buttonRegister = document.querySelector('.register-form > button');
let $inputs = document.querySelectorAll('.register-form > input');
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        $header.textContent = user.email;
        $logaut.style.display = 'inline-block';
        $loginForm.style.display = 'none';
    } else {
        $logaut.style.display = 'none';
        $loginForm.style.display = 'block';
        $header.textContent = 'Guest';

    }
});


$buttonRegisterForm.addEventListener('click', (event) => {
    event.preventDefault();
    $registerForm.style.display = 'block';
    $buttonRegisterForm.style.display = 'none';
});
$button.addEventListener('click', signIn);
$logaut.addEventListener('click', logOut);

$buttonRegister.addEventListener('click', () => {   
    let email = $inputs[1].value;
    let password = $inputs[2].value;
    let name = $inputs[0].value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            $registerForm.style.display = 'none';
            user.displayName = name;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            let p = document.createElement('p');
            p.textContent = errorMessage;
            p.style.color = 'red';
            $registerForm.appendChild(p);
        });
});

function signIn(event) {
    $header.style.color = 'black';
    $header.textContent = 'Please wait...';
    signInWithEmailAndPassword(auth, $inputUserName.value, $inputPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            $header.textContent = errorMessage.split('auth/')[1].split(').')[0];
            $header.style.color = 'red';
        });
}

function logOut(event) {
    signOut(auth)
        .catch(err => console.log(err.message));
}

