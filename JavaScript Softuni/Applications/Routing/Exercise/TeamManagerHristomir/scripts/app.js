import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import home from "./controllers/home.js";
import about from "./controllers/about.js";
import { login, loginUser } from "./controllers/login.js";
import { register, createUser } from "./controllers/register.js";
import logout from "./controllers/logout.js";
import catalog from "./controllers/catalog.js";
import details from "./controllers/details.js";
import { create, createTeam } from "./controllers/create.js";
import join from "./controllers/join.js";
import leave from "./controllers/leave.js";
import { edit, editTeam } from "./controllers/edit.js";
import { infoBoxEl, errorBoxEl } from "./helper.js";

export let startSession = { timer: undefined };
(function checkInputs() {
    document.addEventListener('input', function (event) {

        if (event.target.value.length === 0) {
            event.target.style.borderColor = 'red';
        } else if (event.target.name === 'password' && event.target.value.length < 6) {
            event.target.style.borderColor = 'red';
        } else if (event.target.name === 'repeatPassword' && event.target.value.length < 6) {
            event.target.style.borderColor = 'red';
        } else {
            event.target.style.borderColor = '';
        }
    })
})();

export function timerForLogout(context) {
    function logOut(context) {
        const auth = getAuth();
        signOut(auth).then(() => {

            localStorage.removeItem('userInfo');
            infoBoxEl.textContent = 'Session timeout. You are on Logout.';
            infoAndErrorBox();
            context.redirect('#/login');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            errorBoxEl.textContent = error.message;
            infoAndErrorBox();
        });

    }

    document.addEventListener('click', function () {
        if (localStorage.userInfo) {
            const millis = Date.now() - startSession.timer;
            const sec = Math.floor(millis / 1000);
            startSession.timer = Date.now();
            if (sec > 300) {
                logOut(context);
            }
        }

    });



}

const router = Sammy('#main', function (context) {
    this.use('Handlebars', 'hbs');

    //GET
    this.get('#/home', home);
    this.get('#/about', about);
    this.get('#/login', login);
    this.get('#/register', register);
    this.get('#/logout', logout);
    this.get('#/catalog', catalog);
    this.get('#/catalog/:id', details);
    this.get('#/create', create);
    this.get('#/join/:id', join);
    this.get('#/leave/:id', leave);
    this.get('#/edit/:id', edit);
    //POST
    this.post('#/register', createUser);
    this.post('#/login', loginUser);
    this.post('#/create', createTeam);
    this.post('#/edit/:id', editTeam);


});

(() => {
    router.run('#/home');
})();



