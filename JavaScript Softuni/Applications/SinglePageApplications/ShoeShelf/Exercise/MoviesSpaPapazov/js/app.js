let router = (patch) => {
    let routers = {
        login: 'login-form-template',
        register: 'register-form-template',
        home: 'home-template',
        logout: 'home-template     '

    }

    const mainEl = document.getElementById('app');
    let template = Handlebars.compile(document.getElementById(routers[patch]).innerHTML);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    mainEl.innerHTML = template(userInfo);
};

function addEventLiseners() {
    let templateNav = document.getElementById('nav-template').innerHTML;
    Handlebars.registerPartial('header', templateNav);

    history.pushState({}, '', '/home');
    router('home');

};

function loginUser(event) {
    event.preventDefault();
    let { email, password } = event.target.elements;

    request('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', 'POST', {
        email: email.value,
        password: password.value
    })
        .then((data) => {
            if (data.idToken) {
                localStorage.setItem('userInfo', JSON.stringify({ isLogged: true, email: data.email, idToken: data.idToken }));
                history.pushState({}, '', '/home');
                router('home');
            }


        })
        .catch((error) => {
            console.log(error.message);
        });

}

function navigateHandler(event) {
    event.preventDefault();
    const className = event.target.getAttribute('class');
    if (className !== 'nav-link' && className !== 'navbar-brand text-light') {
        return;
    }

    let url = new URL(event.target.href);
    history.pushState({}, '', url.pathname);
    router(url.pathname.slice(1))


};

function logout() {
    localStorage.removeItem('userInfo');
}



addEventLiseners();
