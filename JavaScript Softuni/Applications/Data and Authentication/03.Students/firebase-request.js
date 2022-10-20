const baseUrl = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app';


export function myFireBaseRequest(id, method, body) {
    let reqest =
    {
        method: method,
        body: JSON.stringify(body)
    };
    return fetch(`${baseUrl}${id}`, reqest)
        .then((resp) => resp.json())
        .catch((err) => console.log(err.message));
};