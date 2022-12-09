import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { errorBoxEl, infoBoxEl, firebaseConfig } from "../helper.js";
import { infoAndErrorBox } from "../helper.js";

const app = initializeApp(firebaseConfig);


export function register(context) {
    this.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs',
        'registerForm': './templates/register/registerForm.hbs'
    }).then(function () {
        this.partial('./templates/register/registerPage.hbs');
    });
};

export function createUser(context) {
    const { email, password, repeatPassword } = context.params;
    const auth = getAuth(app);

    if (Object.values(context.params).some((v) => v === '')) {
        errorBoxEl.textContent = 'All field must is fill.';
    }

    if (password === repeatPassword) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.uid) {
                    infoBoxEl.textContent = 'Successfully register.';
                    infoAndErrorBox();
                    context.redirect('#/login');
                }

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message.split('Firebase: ')[1];
                errorBoxEl.textContent = errorMessage;
                infoAndErrorBox();
            });
    } else {
        infoBoxEl.textContent = 'Password and Repeat Password is must match.';
    }

    infoAndErrorBox();
};