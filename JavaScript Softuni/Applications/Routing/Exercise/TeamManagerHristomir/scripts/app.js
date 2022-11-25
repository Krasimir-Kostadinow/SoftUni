
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


const infoBoxEl = document.querySelector('#infoBox');
const errorBoxEl = document.querySelector('#errorBox');

const firebaseConfig = {
    apiKey: "AIzaSyDb2kAWnz0YbQuYyTXcv3-0N_fbUq2w6lM",
    authDomain: "team-manager-c0884.firebaseapp.com",
    databaseURL: "https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "team-manager-c0884",
    storageBucket: "team-manager-c0884.appspot.com",
    messagingSenderId: "1002511902799",
    appId: "1:1002511902799:web:481c5e058c5538aab3a23a"
};

const app = initializeApp(firebaseConfig);

let startSession;

function infoAndErrorBox() {
    let contentInfoBox = infoBoxEl.textContent;
    let contentErrorBox = errorBoxEl.textContent;

    if (contentInfoBox !== '') {
        infoBoxEl.style.display = 'block';
        setTimeout(() => {
            infoBoxEl.textContent = '';
            infoBoxEl.style.display = 'none';
        }, 6000);
    }

    if (contentErrorBox !== '') {
        errorBoxEl.style.display = 'block';
        setTimeout(() => {
            errorBoxEl.textContent = '';
            errorBoxEl.style.display = 'none';
        }, 8000);
    }

}
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

function timerForLogout(context) {
    function logout(context) {
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
            const millis = Date.now() - startSession;
            const sec = Math.floor(millis / 1000);
            startSession = Date.now();
            if (sec > 300) {
                logout(context);
            }
        }

    });



}

function checkForLogged(context) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        const { email, uid } = JSON.parse(userInfo);
        context.email = email;
        context.loggedIn = true;
    }
}


const router = Sammy('#main', function (context) {
    this.use('Handlebars', 'hbs');

    //GET
    this.get('#/home', function (context) {
        checkForLogged(context);
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });

        timerForLogout(context);
    });
    this.get('#/about', function (context) {
        checkForLogged(context);
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    });
    this.get('#/login', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });

    });
    this.get('#/register', function (context) {

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    });
    this.get('#/logout', function (context) {

        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('userInfo');
            infoBoxEl.textContent = 'You are sign-out on account.';
            infoAndErrorBox();
            context.redirect('#/home');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            errorBoxEl.textContent = error.message;
            infoAndErrorBox();
        });
    });
    this.get('#/catalog', function (context) {
        checkForLogged(context);
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'team': './templates/catalog/team.hbs'
        }).then(function () {
            this.partial('./templates/catalog/teamCatalog.hbs');
        });

    });
    this.get('#/create', function (context) {
        checkForLogged(context);
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'createForm': './templates/create/createForm.hbs'
        }).then(function () {
            this.partial('./templates/create/createPage.hbs');
        });
    });
    //POST
    this.post('#/register', function (context) {
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
    });
    this.post('#/login', function (context) {
        const { email, password } = context.params;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                infoBoxEl.textContent = 'You are is logged.';
                infoAndErrorBox();
                startSession = Date.now();
                localStorage.setItem('userInfo', JSON.stringify({ email: user.email, uid: user.uid }));
                context.redirect('#/home');               // ...

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message.split('Firebase: ')[1];
                errorBoxEl.textContent = errorMessage;
                infoAndErrorBox();
            });

    });
    this.post('#/create', async function (context) {
        fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                name: 'Krasi',
                age: 39
            })
        })
    });


});

(() => {
    router.run('#/home');
})();



