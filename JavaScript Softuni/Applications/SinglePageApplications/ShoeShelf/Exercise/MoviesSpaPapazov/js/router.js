let router = (patch) => {
    let routers = {
        '/login': 'login-form-template',
        '/register': 'register-form-template',
        '/home': 'home-template',
        '/addMovie': 'add-movie',
        '/details': 'template-details',
        '/editMovie': 'edit-form-template'
    }

    const mainEl = document.getElementById('app');
    let template = Handlebars.compile(document.getElementById(routers[patch]).innerHTML);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    switch (patch) {
        case '/home':
            if (userInfo !== null && userInfo.isLogged === true) {
                   
                    request('data', '', 'GET')
                        .then((data) => {
                            if (data === null) {
                                mainEl.innerHTML = template(userInfo);
                            }
                            Object.entries(data).forEach(([key, value]) => {
                                value.key = key;
                            });
                            userInfo.movies = Object.values(data);
                            mainEl.innerHTML = template(userInfo);
                        })
                        .catch((error) => {
                            console.log(error.message);
                        });
                } else {
                    mainEl.innerHTML = template(userInfo);
                }
        
            break;
        case '/details':
            if (userInfo !== null && userInfo.isLogged === true) {
                const [empty, pathname] = location.pathname.split(':');
                request('data', pathname, 'GET')
                    .then((data) => {

                        if (data.creator === userInfo.uid) {
                            data.isCreator = true;
                            if (data.liked) {
                                data.likeds = data.liked.length;
                            } else {
                                data.likeds = 0;
                            }


                        } else {
                            data.isCreator = false;
                            if (data.liked) {
                                data.likeds = data.liked.length;
                            } else {
                                data.likeds = 0;
                            }

                        }
                        if (data.liked && data.liked.includes(userInfo.email)) {
                            data.isLiked = true;
                        } else {
                            data.isLiked = false;
                        }
                        data.pathname = pathname;
                        userInfo.movie = data;
                        localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        mainEl.innerHTML = template(userInfo);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            } else {
                mainEl.innerHTML = template(userInfo);
            }
            break;

        default:
            mainEl.innerHTML = template(userInfo);
            break;
    }



};


let templateNav = document.getElementById('nav-template').innerHTML;
let cardTemplate = document.getElementById('card-template').innerHTML;
Handlebars.registerPartial('card', cardTemplate);
Handlebars.registerPartial('header', templateNav);

const [pathname, key] = location.pathname.split(':');

if (location.pathname === '/') {
    history.pushState({}, '', '/home');

} else {
    history.pushState({}, '', location.pathname);
}



if (pathname === '/details') {
    router('/details');
} else {
    router(location.pathname);
}



function notificationBox(content, typeBoxEl) {
    typeBoxEl.textContent = content;
    const boxView = typeBoxEl.parentElement;
    boxView.style.display = 'block';
    setTimeout(() => {
        typeBoxEl.textContent = '';
        boxView.style.display = 'none';
    }, 4000)
};










