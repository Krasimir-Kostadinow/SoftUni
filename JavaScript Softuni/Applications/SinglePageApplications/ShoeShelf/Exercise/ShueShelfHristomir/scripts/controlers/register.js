import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";


const app = initializeApp(firebaseConfig);

function register(context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/partials/header.hbs',
        'footer': './templates/partials/footer.hbs'
    }).then(function () {
        this.partial('./templates/register.hbs');
    })
};

function validation(email, password, rePassword) {
    let isValid = true;
    if (email.length <= 0) {
        isValid = false;
        return isValid;
    }
    if (password.length < 6) {
        isValid = false;
        return isValid;
    }
    if (password !== rePassword) {
        isValid = false;
        return isValid;
    }

    return isValid;

}

function postRegister(context) {

    const { email, password, rePassword } = context.params;
    if (!validation(email, password, rePassword)) {
        return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            this.redirect('#/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });



}

export { register, postRegister }