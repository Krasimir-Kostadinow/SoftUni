
function host(endpoint) {
    return `https://eu-api.backendless.com/47F5905A-C0DA-0082-FF05-56049C6BE300/CEE1C7C3-E645-4461-BBFA-BC828DFB7EDC${endpoint}`;
};



const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout',
    'get-movies': '/data/movies'
};

async function registerUser(username, password) {
    return await (await fetch(host(endpoints['register']), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
};

async function loginUser(username, password) {
    let result = await (await fetch(host(endpoints['login']), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();

    localStorage.setItem('userInfo', JSON.stringify({ userToken: result['user-token'], userName: result.username }));

    return result;
};

async function logoutUser() {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));
    await fetch(host(endpoints['logout']), {
        headers: {
            'user-token': userToken
        }
    });
    localStorage.removeItem('userInfo');
};

async function getAllMovies() {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));

    return await (await fetch(host(endpoints['get-movies']), {
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        }
    })).json();
};

async function getMovie(objectId) {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));

    return await (await fetch(host(endpoints['get-movies'] + `/${objectId}`), {
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        }
    })).json();
};

async function deleteMovie(objectId) {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));

    return await (await fetch(host(endpoints['get-movies'] + `/${objectId}`), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        }
    })).json();
};




async function addMovie(title, description, imageUrl) {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));

    return await (await fetch(host(endpoints['get-movies']), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title, description, imageUrl
        })
    })).json();
}

async function editMovie(objectId, title, description, imageUrl) {
    const { userToken } = JSON.parse(localStorage.getItem('userInfo'));

    return await (await fetch(host(endpoints['get-movies'] + `/${objectId}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl
        })
    })).json();
};

async function likedMovie(objectId) {
    const { userToken, userName } = JSON.parse(localStorage.getItem('userInfo'));
    let newLiked = [];

    const { likeds } = await getMovie(objectId);
    console.log(likeds);
    if (likeds === null) {
        newLiked.push(userName);
    } else {
        newLiked = likeds;
        newLiked.push(userName);
    }

    return await (await fetch(host(endpoints['get-movies'] + `/${objectId}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            likeds: newLiked
        })
    })).json();

};

async function searchMovie() {
    // ????
}


