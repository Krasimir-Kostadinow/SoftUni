
const endpoint = {
    register: 'api/users/register',
    login: 'api/users/login',
    teams: 'api/data/teams'
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
    console.log('ehoo I`m here');
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }


    const result = (await (fetch(host(endpoint.teams), {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    }))).json();
   
    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw (error);
    }
    return result;
  
}