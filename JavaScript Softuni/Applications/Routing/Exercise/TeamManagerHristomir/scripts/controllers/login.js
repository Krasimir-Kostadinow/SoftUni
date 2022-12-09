import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { errorBoxEl, infoBoxEl, firebaseConfig } from "../helper.js";
import { infoAndErrorBox } from "../helper.js";
import { startSession } from '../app.js';

const app = initializeApp(firebaseConfig);

export function login() {
    this.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs',
        'loginForm': './templates/login/loginForm.hbs'
    }).then(function () {
        this.partial('./templates/login/loginPage.hbs');
    });

};

export function loginUser(context) {
    const { email, password } = context.params;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            infoBoxEl.textContent = 'You are is logged.';
            infoAndErrorBox();
            startSession.timer = Date.now();
            localStorage.setItem('userInfo', JSON.stringify({ email: user.email, uid: user.uid }));
            context.redirect('#/home');               // ...

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message.split('Firebase: ')[1];
            errorBoxEl.textContent = errorMessage;
            infoAndErrorBox();
        });

};

