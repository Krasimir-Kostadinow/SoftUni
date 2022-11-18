
const endpoint = {
    register: 'api/users/register',
    login: 'api/users/login',
    teams: 'data/teams'
}

function host(endpoint) {
    return `https://elderscissors.backendless.app/${endpoint}`;
}



export async function register(username, password) {
    return (await (fetch(host(endpoint.register), {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }))).json();
}


export async function login(username, password) {
    return (await (fetch(host(endpoint.login), {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    }))).json();
}

export async function createTeam(team) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    return (await (fetch(host(endpoint.teams), {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    }))).json();
}