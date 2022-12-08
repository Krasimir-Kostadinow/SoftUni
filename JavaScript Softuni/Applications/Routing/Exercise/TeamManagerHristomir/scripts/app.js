
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
        context.uid = uid;

    }

}

// function checkForTeam(context, data) {

//     const userInfo = localStorage.getItem('userInfo');
//     const { email, uid } = JSON.parse(userInfo);

//     Object.entries(data).forEach(([objectId, team]) => {
//         team.objectId = objectId;

//     });

// }

function checkAuthorAndMember(context, data) {

    if (context.uid === data.uid) {
        context.isAuthor = true;
    }
    if (!data.members) {
        context.isOnTeam = false;
        context.isAuthor = false;
        return;
    }
    data.members.forEach((member) => {
        if (member.email === context.email && member.uid === context.uid) {
            context.isOnTeam = true;
        }
    });



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
        fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    this.loadPartials({
                        'header': './templates/common/header.hbs',
                        'footer': './templates/common/footer.hbs',
                        'team': './templates/catalog/team.hbs',
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
                } else {

                    Object.entries(data).forEach(([objectId, team]) => {
                        team.objectId = objectId;
                        checkAuthorAndMember(context, team);
                    });
                    context.teams = Object.values(data);

                    this.loadPartials({
                        'header': './templates/common/header.hbs',
                        'footer': './templates/common/footer.hbs',
                        'team': './templates/catalog/team.hbs',
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
                }

            });

    });
    this.get('#/catalog/:id', function (context) {
        checkForLogged(context);
        fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}.json`)
            .then((res) => res.json())
            .then((data) => {

                context.members = data.members;
                context.teamName = data.teamName;
                context.comment = data.comment;
                context.objectId = context.params.id;
                checkAuthorAndMember(context, data);
                this.loadPartials({
                    'header': './templates/common/header.hbs',
                    'footer': './templates/common/footer.hbs',
                    'teamMember': './templates/catalog/teamMember.hbs',
                    'teamControls': './templates/catalog/teamControls.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/details.hbs');
                });
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
    this.get('#/join/:id', function (context) {
        checkForLogged(context);
        let isJoined = false;
        let nameTeam = false;
        fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
            .then((res) => res.json())
            .then((data) => {
                let dataArr = Object.entries(data);
                for (const [objectId, team] of dataArr) {
                    let membersOfTeam = team.members;
                    if (membersOfTeam !== false) {
                        for (const member of membersOfTeam) {
                            let { email, uid } = member;
                            if (email === context.email && uid === context.uid) {
                                isJoined = true;
                                nameTeam = team.teamName;
                            }
                        }
                    }

                }


                if (isJoined) {
                    infoBoxEl.textContent = `You are already a member of team ${nameTeam}. To become a member of this team you must leave team ${nameTeam}.`;
                    infoAndErrorBox();

                } else {
                    fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`)
                        .then((res) => res.json())
                        .then((data) => {
                            let userInfo = localStorage.getItem('userInfo');
                            const { email, uid } = JSON.parse(userInfo);
                            let newMembers;
                            if (data.members === false) {
                                newMembers = [];
                            } else {
                                newMembers = data.members;
                            }

                            newMembers.push({ email: email, uid: uid });

                            fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ members: newMembers })
                            })
                                .then((res) => {
                                    infoBoxEl.textContent = `You succeed joined in team ${data.teamName}.`;
                                    infoAndErrorBox();
                                })

                        });
                }

            });


        context.redirect('#/home');

    });
    this.get('#/leave/:id', function (context) {
        fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`)
            .then((res) => res.json())
            .then((data) => {
                let newMembers = data.members.slice();
                if (data.members.length > 0) {

                    let userInfo = localStorage.getItem('userInfo');
                    const { email, uid } = JSON.parse(userInfo);
                    for (let i = 0; i < newMembers.length; i++) {
                        let member = newMembers[i];
                        const emailMember = member.email;
                        const uidMember = member.uid;
                        if (email === emailMember && uid === uidMember) {
                            newMembers.splice(i, 1);

                        }
                    }
                    if (newMembers.length <= 0) {
                        newMembers = false;
                    }
                } else {
                    infoBoxEl.textContent = `Not members in team ${data.teamName}.`;
                    infoAndErrorBox();
                }

                fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ members: newMembers })
                })
                    .then((res) => {
                        infoBoxEl.textContent = `You are succeed leave team. ${data.teamName}.`;
                        infoAndErrorBox();
                    })

            });

        context.redirect('#/home');
    });
    this.get('#/edit/:id', function (context) {
        checkForLogged(context);
        fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}.json`)
            .then((res) => res.json())
            .then((data) => {
                context.objectId = context.params.id;
                context.name = data.teamName;
                context.comment = data.comment;
                this.loadPartials({
                    'header': './templates/common/header.hbs',
                    'footer': './templates/common/footer.hbs',
                    'editForm': './templates/edit/editForm.hbs'
                }).then(function () {
                    this.partial('./templates/edit/editPage.hbs');
                });

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
    this.post('#/create', function (context) {
        checkForLogged(context);
        let userInfo = localStorage.getItem('userInfo');
        const { email, uid } = JSON.parse(userInfo);
        const { name, comment } = context.params;
        if (!userInfo || !name) {
            return;
        }


        let isJoined = false;
        let nameTeam = false;
        fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
            .then((res) => res.json())
            .then((data) => {
                if (data !== null) {
                    let dataArr = Object.entries(data);
                    for (const [objectId, team] of dataArr) {
                        let membersOfTeam = team.members;
                        if (membersOfTeam !== false) {
                            for (const member of membersOfTeam) {
                                let { email, uid } = member;
                                if (email === context.email && uid === context.uid) {
                                    isJoined = true;
                                    nameTeam = team.teamName;
                                }
                            }
                        }

                    }
                }

                if (isJoined) {
                    infoBoxEl.textContent = `You are already a member of a team ${nameTeam}. To create a team you have to leave the team you are a member of.`;
                    infoAndErrorBox();

                } else {
                    fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ teamName: name, comment: comment, uid: uid, email: email, members: [{ email: email, uid: uid }] })
                    }).then((res) => {
                        infoBoxEl.textContent = `You are create team it name ${name}.`
                        infoAndErrorBox();
                    }).catch((error) => {
                        errorBoxEl.textContent = error.message;
                        infoAndErrorBox();
                    });
                }



            });

        context.redirect('#/home');

    });
    this.post('#/edit/:id', function (context) {
        fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamName: context.params.name,
                comment: context.params.comment
            })
        })
            .then((res) => {
                infoBoxEl.textContent = `You edit team ${context.params.name}.`;
                infoAndErrorBox();
            });
        this.redirect('#/home');
    });


});

(() => {
    router.run('#/home');
})();



