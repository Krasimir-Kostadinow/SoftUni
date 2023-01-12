import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { infoBoxEl, errorBoxEl, firebaseConfig } from "../helper.js";
import { infoAndErrorBox } from '../helper.js';

const app = initializeApp(firebaseConfig);

export default function (context) {
    const auth = getAuth();
    signOut(auth).then(() => {
        localStorage.removeItem('userInfo');
        infoBoxEl.textContent = 'You are sign-out on account.';
        infoAndErrorBox();
        context.redirect('#/login');
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        errorBoxEl.textContent = error.message;
        infoAndErrorBox();
    });
}