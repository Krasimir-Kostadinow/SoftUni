const baseUrl = 'https://vocalday.backendless.app/api/data/books';


async function request(method, body, objectId) {
    let url = baseUrl;
    if (objectId !== undefined) {
        url += `/${objectId}`; 
    }
    let typeRequest = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }
    let response = await fetch(url, typeRequest);
    let data = await response.json();
    return data;
}

export async function getBooks() {
    return await request('GET');
}

export async function createBook(body) {
    return await request('POST', body);
}

export async function updateBook(body, objectId) {
    return await request('PUT', body);
}

export async function deleteBook(body, objectId) {
    return await request('DELETE');
}