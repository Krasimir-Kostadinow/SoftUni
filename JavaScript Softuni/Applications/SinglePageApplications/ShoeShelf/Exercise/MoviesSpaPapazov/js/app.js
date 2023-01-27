const errorBoxEl = document.getElementById('errorBox');
const successBoxEl = document.getElementById('successBox');

function loginUser(event) {
    event.preventDefault();
    let { email, password } = event.target.elements;
    request('auth', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', 'POST', {
        email: email.value,
        password: password.value
    })
        .then((data) => {

            if (data.idToken) {
                localStorage.setItem('userInfo', JSON.stringify({ isLogged: true, email: data.email, idToken: data.idToken, uid: data.localId }));
                history.pushState({}, '', '/home');
                router('/home');
                notificationBox('Login successful.', successBoxEl);
            } else {
                notificationBox(data.error.message, errorBoxEl);
            }


        })
        .catch((error) => {
            console.log(error.message);
        });

};

function logout() {
    localStorage.removeItem('userInfo');
    notificationBox('Successful logout', successBoxEl);

};

function navigateHandler(event) {
    event.preventDefault();
    const className = event.target.getAttribute('class');

    if (className !== 'nav-link' && className !== 'navbar-brand text-light' && className !== 'btn btn-warning') {
        return;
    }

    let url = new URL(event.target.href);
    history.pushState({}, '', url.pathname);
    router(url.pathname)


};

function addMovie(event) {
    event.preventDefault();
    const { uid } = JSON.parse(localStorage.getItem('userInfo'));
    const { title, description, imageUrl } = event.target.elements;
    if (title.value === '' || description.value === '' || imageUrl.value === '') {
        notificationBox('Invalid inputs!', errorBoxEl);
        return;
    }
    request('data', '', 'POST', { title: title.value, description: description.value, imageUrl: imageUrl.value, creator: uid, liked: [] })
        .then((data) => {
            history.pushState({}, '', '/home');
            router('/home');
            notificationBox('Created successfully!', successBoxEl);
        })
        .catch((error) => {
            console.log(error.message);
        })
};

function registerUser(event) {
    event.preventDefault();
    const { email, password, repeatPassword } = event.target.elements;
    if (password.value !== repeatPassword.value) {
        notificationBox('Password and repeat Password not match.', errorBoxEl);
        return;
    }

    request('auth', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', 'POST', { email: email.value, password: password.value })
        .then((data) => {
            console.log(data);
            if (data.idToken) {
                notificationBox('Successful registration!', successBoxEl);
                history.pushState({}, '', '/login');
                router('/login');
            } else {
                notificationBox(data.error.message, errorBoxEl);
            }

        })
        .catch((error) => {
            console.log(error.message);
        });
};

function editMovie(event) {
    event.preventDefault();
    const { title, description, imageUrl } = event.target.elements;
    if (title.value === '' || description.value === '' || imageUrl.value === '') {
        notificationBox('Invalid inputs!', errorBoxEl);
        return;
    }
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    request('data', userInfo.movie.pathname, 'PATCH', { title: title.value, description: description.value, imageUrl: imageUrl.value })
        .then((data) => {
            history.pushState({}, '', `/details:${userInfo.movie.pathname}`);
            router('/details');
            notificationBox('Eddited successfully', successBoxEl);
        })
        .catch((error) => {
            console.log(error.message);
        });

};

function deleteMovie(event) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    request('data', userInfo.movie.pathname, 'DELETE')
        .then((data) => {
            history.pushState({}, '', '/home');
            router('/home');
            notificationBox('Deleted successfully', successBoxEl);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

function likeMovie(event) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    request('data', userInfo.movie.pathname, 'GET')
        .then((data) => {

            if (data.liked === undefined) {
                request('data', userInfo.movie.pathname, 'PATCH', { liked: [userInfo.email] })
                    .then((data) => {
                        history.pushState({}, '', `/details:${userInfo.movie.pathname}`);
                        router('/details');
                        notificationBox('Liked successfully', successBoxEl);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
            } else if (data.liked) {
                let likeds = data.liked;
                history.pushState({}, '', `/details:${userInfo.movie.pathname}`);
                router('/details');
                notificationBox('Liked successfully', successBoxEl);
                console.log(likeds);
                if (!likeds.includes(userInfo.email)) {
                    likeds.push(userInfo.email);
                    request('data', userInfo.movie.pathname, 'PATCH', { liked: likeds })
                        .then((data) => {
                            history.pushState({}, '', `/details:${userInfo.movie.pathname}`);
                            router('/details');
                            notificationBox('Liked successfully', successBoxEl);
                        })
                        .catch((error) => {
                            console.log(error.message);
                        })
                }
            }

        })
        .catch((error) => {
            console.log(error.message);
        });
};

function searchMovie(event) {
    event.preventDefault();
    const { searchName } = event.target.elements;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    request('data', '', 'GET')
        .then((data) => {

            let titleMovie = Object.entries(data);
            let searchedMovies = {};
            titleMovie.forEach(([key, movie]) => {

                if (movie.title === searchName.value) {
                    searchedMovies[key] = movie;
                } else {
                    let arr = movie.title.split(' ');
                    arr.forEach((el) => {
                        if (el === searchName.value) {
                            searchedMovies[key] = movie;
                        }
                    });
                }
            });


            const finded = Object.values(searchedMovies);
            userInfo.searchMovies = finded;
            console.log(userInfo);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            notificationBox(`Your search has found ${finded.length} results.`, successBoxEl);
            router('/home');
            userInfo.searchMovies = [];
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

        })
        .catch((error) => {
            console.log(error.message);
        });

};