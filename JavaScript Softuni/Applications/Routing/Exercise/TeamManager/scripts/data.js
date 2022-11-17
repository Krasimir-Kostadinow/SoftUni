
const endpoint = {
    register: 'api/users/register',
    login: 'api/users/login'
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