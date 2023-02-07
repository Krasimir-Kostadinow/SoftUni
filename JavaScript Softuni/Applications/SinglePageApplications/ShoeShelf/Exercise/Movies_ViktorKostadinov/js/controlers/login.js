import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";

const app = initializeApp(firebaseConfig);


function login(context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/partials/header.hbs',
        'footer': './templates/partials/footer.hbs'
    }).then(function () {
        this.partial('./templates/login.hbs');
    })
};

function postLogin(context) {
    const { email, password } = context.params;
    if (email === '' || password === '') {
        return;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem('userInfo', JSON.stringify({ email: user.email, uid: user.uid }));
            this.redirect('#/home');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

export { login, postLogin }